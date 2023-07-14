import express from "express";
import { router } from "./Routes/routes.js";
import { sequelize } from "./Database/database.js";
import cors from "cors"; //IMPORTAR CORS PARA EL NAVEGADOR

const app = express();

// CORS PARA BLOQUEO DE NAVEGADOR, CONTROL DE ACCESO
app.use(cors());

//Montar enrutador en app principal
app.use(express.json());
app.use(router);
app.set("port", 3000);

const testDB = async () => {
  try {
    await sequelize.sync();
    console.log(`EXITO EN LA CONEXIÓN`);
  } catch (error) {
    console.log(`Error EN LA CONEXIÓN ${error}`);
  }
};

testDB();

//Correr Servicio por puerto 3000
app.listen(app.get("port"), () => {
  console.log(`Servidor Escuchando por puerto ${app.get("port")}`);
});
