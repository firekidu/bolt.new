import express from "express";
import { createRequestHandler } from "@remix-run/express";
import path from "path";

const BUILD_DIR = path.resolve("build");

const app = express();

// Serve static files
app.use("/build", express.static("public/build"));

// Handle Remix requests
app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
    mode: process.env.NODE_ENV,
  })
);

const port = process.env.PORT || 8788;
app.listen(port, () => {
  console.log(`✅ Express server is listening at http://localhost:${port}`);
});
