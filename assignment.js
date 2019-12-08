const http = require("http");

server = http.createServer((req, res) => {
  const { url, POST } = req;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>welcome</title></header>");
    res.write("<body><p>welcome</p></body>");
    res.write('<form action="/create-users" method="POST">');
    res.write('<input type="text" name="name" value="name">');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<header><title>welcome</title></header>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Samco</li><li>Srm</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/create-users") {
    let body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      body = Buffer.concat(body).toString();
      console.log("Username = ", body.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>page not found</title></header>");
  res.write("<body><p>page not found</p></body>");

  res.write("</html>");
  res.end();

  console.log(url, POST);
});

server.listen(3000);
