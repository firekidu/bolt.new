// server.js
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 8788;
const app = express();

app.use(compression());
app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    build: await import("./build/index.js"),
    getLoadContext() {
      return {};
    },
  })
);

app.listen(port, () => {
  console.log(`✅ Remix app running at http://localhost:${port}`);
});
