import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);
      
      const subscriber = await storage.createSubscriber(validatedData);
      
      res.json({
        success: true,
        message: "Successfully subscribed to newsletter",
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          createdAt: subscriber.createdAt,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          error: "Invalid email format",
          details: error.errors,
        });
      }
      
      if (error instanceof Error && error.message === "Email already subscribed") {
        return res.status(409).json({
          success: false,
          error: "Email already subscribed",
        });
      }
      
      console.error("Newsletter subscription error:", error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  });

  // Get subscriber count (optional stats endpoint)
  app.get("/api/stats", async (req, res) => {
    try {
      const subscribers = await storage.getAllSubscribers();
      
      res.json({
        success: true,
        stats: {
          totalSubscribers: subscribers.length,
          latestSubscription: subscribers.length > 0 
            ? subscribers[subscribers.length - 1].createdAt 
            : null,
        },
      });
    } catch (error) {
      console.error("Stats error:", error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
