import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { username, email, password } = await request.json();

    // Validate input
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    if (username.length < 3) {
      return new Response(
        JSON.stringify({ message: 'Username must be at least 3 characters long' }),
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: 'Password must be at least 6 characters long' }),
        { status: 400 }
      );
    }

    try {
      // Check if username already exists
      const existingUser = await db.execute({
        sql: 'SELECT id FROM users WHERE username = ?',
        args: [username],
      });

      if (existingUser.rows.length > 0) {
        return new Response(
          JSON.stringify({ message: 'Username already exists' }),
          { status: 400 }
        );
      }

      // Check if email already exists
      const existingEmail = await db.execute({
        sql: 'SELECT id FROM users WHERE email = ?',
        args: [email],
      });

      if (existingEmail.rows.length > 0) {
        return new Response(
          JSON.stringify({ message: 'Email already exists' }),
          { status: 400 }
        );
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const result = await db.execute({
        sql: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        args: [username, email, hashedPassword],
      });

      // Generate JWT
      const token = jwt.sign(
        { id: result.lastInsertId, username },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      return new Response(JSON.stringify({ token }), {
        status: 201,
      });
    } catch (error) {
      console.error('Database operation error:', error);
      if (error instanceof Error && error.message.includes('no such table')) {
        // If the table doesn't exist, initialize the database
        await db.execute(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          )
        `);
        
        // Retry the registration
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await db.execute({
          sql: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
          args: [username, email, hashedPassword],
        });

        const token = jwt.sign(
          { id: result.lastInsertId, username },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        return new Response(JSON.stringify({ token }), {
          status: 201,
        });
      }
      throw error;
    }
  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) {
      return new Response(
        JSON.stringify({ message: 'Username or email already exists' }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ message: 'An error occurred during registration' }),
      { status: 500 }
    );
  }
};