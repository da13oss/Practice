import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const POST: APIRoute = async ({ request }) => {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
    const { email, currentPassword, newPassword } = await request.json();

    // Get current user data
    const userResult = await db.execute({
      sql: 'SELECT * FROM users WHERE id = ?',
      args: [decoded.id],
    });

    const user = userResult.rows[0];

    // If changing password, verify current password
    if (newPassword) {
      const validPassword = await bcrypt.compare(
        currentPassword,
        user.password as string
      );
      if (!validPassword) {
        return new Response(
          JSON.stringify({ message: 'Current password is incorrect' }),
          { status: 400 }
        );
      }

      // Hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Update email and password
      await db.execute({
        sql: 'UPDATE users SET email = ?, password = ? WHERE id = ?',
        args: [email, hashedPassword, decoded.id],
      });
    } else {
      // Update email only
      await db.execute({
        sql: 'UPDATE users SET email = ? WHERE id = ?',
        args: [email, decoded.id],
      });
    }

    return new Response(JSON.stringify({ message: 'Profile updated' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
};