// const express = require("express");
// const routes = express.Router();
const UsuariosControllers = require("./Controllers/UsuariosControllers");
const { Router } = require("express");
const routes = Router();

//GET, POST, PUT, DELETE

//Salva um documento na collection Tutoriais:
routes.post("/usuario", UsuariosControllers.store);

//Buscar por um documento específico:
routes.get("/usuario/:email", UsuariosControllers.index);

//Alterar um documento da collection Tutoriais:
// routes.put("/usuario/:email", UsuariosControllers.update);

//Excluir um documento da collection Tutoriais:
// routes.delete("/usuario/:email", UsuariosControllers.destroy);

// routes.get("/", TestController.index);
// routes.post("/", TestController.create);
// routes.get("/login", TestController.login);
module.exports = routes;
