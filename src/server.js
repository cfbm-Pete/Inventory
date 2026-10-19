import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.type("text/plain").send("ok");
});

app.get("/", (req, res) => {
  res.type("html").send(`<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ระบบจัดการสต็อกสินค้า</title>
  </head>
  <body>
    <h1>ระบบจัดการสต็อกสินค้า</h1>
  </body>
</html>`);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
