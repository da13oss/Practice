import type { APIRoute } from 'astro';
import { db } from '../../lib/db';
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
    const { score } = await request.json();

    // Save score
    await db.execute({
      sql: 'INSERT INTO scores (user_id, score) VALUES (?, ?)',
      args: [decoded.id, score],
    });

    return new Response(JSON.stringify({ message: 'Score saved' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Save score error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
    });
  }
};