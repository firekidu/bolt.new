const express = require("express");
const { createRequestHandler } = require("@remix-run/express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8788;

app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    build: require("./build"),
    getLoadContext() {
      return {};
    },
  })
);

app.listen(port, () => {
  console.log(`✅ Remix app running at http://localhost:${port}`);
});
