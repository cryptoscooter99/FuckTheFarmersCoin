import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ZodError } from 'zod';
import { insertSubscriberSchema } from '../shared/schema';
import { storage } from '../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const validated = insertSubscriberSchema.parse(req.body);
    const subscriber = await storage.createSubscriber(validated);

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscriber: {
        id: subscriber.id,
        email: subscriber.email,
        createdAt: subscriber.createdAt,
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ success: false, error: 'Invalid email format', details: error.errors });
    }
    if (error instanceof Error && error.message === 'Email already subscribed') {
      return res.status(409).json({ success: false, error: 'Email already subscribed' });
    }
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

