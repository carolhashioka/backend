const express = require("express");
const mongoose = require("mongoose"); //ODM - OBJECT DATA MAPPING
//Inicializa o servidor:
const server = express();

server.use(express.json());
//CONEXÃO COM O BANCO DE DADOS (DW2TUTS)
mongoose.connect("mongodb://localhost:27017/web_projeto", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const routes = require("./routes");

server.use(routes);
//Rodar o servidor:
server.listen(3333);
