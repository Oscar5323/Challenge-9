const express = require("express");
const html_route = require('./routes/html.routes');
const api_route = require('./routes/api-routes');
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(html_route)
app.use(api_route)
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);