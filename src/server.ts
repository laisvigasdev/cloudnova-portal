
import { createServer } from "node:http";

const PORT = Number(process.env.PORT || 80);

const server = createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      status: "ok",
      application: "CloudNova"
    }));
    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <title>CloudNova Portal</title>
      <style>
        body {
          background: #101827;
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 100px 20px;
        }
        h1 { color: #38bdf8; }
        p { color: #cbd5e1; }
      </style>
    </head>
    <body>
      <h1>CloudNova</h1>
      <h2>Portal Corporativo Seguro</h2>
      <p>Aplicação alojada no Microsoft Azure.</p>
      <p>Cloud Computing | Containers | DevOps</p>
      <p>Estado: Online</p>
    </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`CloudNova running on port ${PORT}`);
});
