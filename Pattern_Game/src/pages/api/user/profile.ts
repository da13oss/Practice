import type { APIRoute } from 'astro';
import { db } from '../../../lib/db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const GET: APIRoute = async ({ request }) => {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

    // Get user data
    const userResult = await db.execute({
      sql: 'SELECT email FROM users WHERE id = ?',
      args: [decoded.id],
    });

    // Get user scores
    const scoresResult = await db.execute({
      sql: 'SELECT score FROM scores WHERE user_id = ? ORDER BY score DESC LIMIT 10',
      args: [decoded.id],
    });

    return new Response(
      JSON.stringify({
        email: userResult.rows[0].email,
        scores: scoresResult.rows.map(row => row.score),
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Profile error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
};