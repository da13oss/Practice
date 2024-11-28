import type { APIRoute } from 'astro';
import { initializeDatabase } from '../../lib/db';

export const GET: APIRoute = async () => {
  try {
    await initializeDatabase();
    return new Response(JSON.stringify({ message: 'Database initialized successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return new Response(JSON.stringify({ message: 'Failed to initialize database' }), {
      status: 500,
    });
  }
};