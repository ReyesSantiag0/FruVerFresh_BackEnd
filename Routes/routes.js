import { Router } from "express";
import {
  listarProductos,
  registrarProductos,
  actualizarProductos,
  eliminarProductos,
  registrarUsuarios,
  registrarPedidos,
  listarPedidos,
  getProducto,
  getUsuario,
  autenticarUsuarios,
  eliminarPedidos,
  buscarProductos,
} from "../Controllers/controller.js";

const router = Router();

//Definir Rutas
router.get("/", (req, res) => {
  res.send("Bienvenido a FruVerFresh");
});

// RUTAS PARA PRODUCTOS
router.get("/productos", listarProductos);
router.get("/productos/:id_producto", getProducto);
router.post("/productos", registrarProductos);
router.put("/productos/:id_producto", actualizarProductos);
router.delete("/productos/:id_producto", eliminarProductos);
router.post("/buscar/", buscarProductos);

// RUTAS PARA CLIENTES
router.get("/usuarios/:id_usuario", getUsuario);
router.post("/usuarios", registrarUsuarios);
router.post("/login/", autenticarUsuarios);

// RUTAS PEDIDO
router.get("/home-cliente/compras", listarPedidos);
router.post("/home-cliente/compras", registrarPedidos);
router.delete("/home-administrador/:id_pedido", eliminarPedidos);

export { router };
