import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Firebase Config
const firebaseConfigPath = path.join(__dirname, "firebase-applet-config.json");
const firebaseConfig = JSON.parse(fs.readFileSync(firebaseConfigPath, "utf-8"));

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: firebaseConfig.projectId,
  });
}

const db = getFirestore(admin.app(), firebaseConfig.firestoreDatabaseId);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for LinkedIn Webhook
  // This endpoint will receive posts from Zapier/Make
  app.post("/api/webhook/linkedin", async (req, res) => {
    const { title, content, excerpt, image, date, category, linkedinUrl, secret } = req.body;

    // Simple security check
    if (secret !== process.env.WEBHOOK_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const blogRef = db.collection("blogs").doc();
      await blogRef.set({
        title: title || "New LinkedIn Post",
        content: content || "",
        excerpt: excerpt || content?.substring(0, 150) + "...",
        image: image || "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
        date: date || new Date().toISOString(),
        category: category || "LinkedIn",
        linkedinUrl: linkedinUrl || "",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.json({ success: true, id: blogRef.id });
    } catch (error) {
      console.error("Error saving blog post:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // API Route for Video Webhook (Instagram Reels / YouTube)
  app.post("/api/webhook/videos", async (req, res) => {
    const { url, type, title, secret } = req.body;

    if (secret !== process.env.WEBHOOK_SECRET) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const videoRef = db.collection("featured_videos").doc();
      await videoRef.set({
        url,
        type: type || "youtube",
        title: title || "",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.json({ success: true, id: videoRef.id });
    } catch (error) {
      console.error("Error saving video:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
