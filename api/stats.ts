import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const subscribers = await storage.getAllSubscribers();
    return res.status(200).json({
      success: true,
      stats: {
        totalSubscribers: subscribers.length,
        latestSubscription: subscribers.length > 0 ? subscribers[subscribers.length - 1].createdAt : null,
      },
    });
  } catch (error) {
    console.error('Stats error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

