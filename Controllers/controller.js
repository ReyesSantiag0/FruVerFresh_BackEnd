import { Producto } from "../Models/productos.js";
import { Usuario } from "../Models/usuarios.js";
import { Pedido } from "../Models/pedido.js";

// CONTROLADOR PRODUCTOS

const getProducto = async (req, res) => {
  const { id_producto } = req.params;
  try {
    const producto = await Producto.findByPk(id_producto);

    res.status(200).json([producto]);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const registrarProductos = async (req, res) => {
  const { nombre_producto, detalle_producto, precio_producto, foto_producto } =
    req.body;
  try {
    const nuevoProducto = await Producto.create({
      nombre_producto,
      detalle_producto,
      precio_producto,
      foto_producto,
    });
    res.status(200).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const actualizarProductos = async (req, res) => {
  const { id_producto } = req.params;
  const { nombre_producto, detalle_producto, precio_producto, foto_producto } =
    req.body;
  try {
    const productoAntiguo = await Producto.findByPk(id_producto);
    productoAntiguo.nombre_producto = nombre_producto;
    productoAntiguo.detalle_producto = detalle_producto;
    productoAntiguo.precio_producto = precio_producto;
    productoAntiguo.foto_producto = foto_producto;
    const modProducto = await productoAntiguo.save();
    res.status(200).json(modProducto);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const eliminarProductos = async (req, res) => {
  const { id_producto } = req.params;
  try {
    const respuesta = await Producto.destroy({
      where: {
        id_producto,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

const buscarProductos = async (req, res) => {
  const { nombre_producto } = req.body;

  try {
    const producto = await Producto.findOne({
      where: {
        nombre_producto: nombre_producto,
      },
    });
    if (!producto) {
      return res.status(401).json({ mensaje: "Producto no encontrado" });
    }

    if (producto.nombre_producto !== nombre_producto) {
      return res.status(401).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// CONTROLADOR USUARIOS
const getUsuario = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const usuario = await Usuario.findByPk(id_usuario);

    res.status(200).json([usuario]);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const registrarUsuarios = async (req, res) => {
  const {
    nombre_usuario,
    apellido_usuario,
    edad_usuario,
    telefono_usuario,
    correo_usuario,
    contrasena_usuario,
    tipo_usuario,
  } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      apellido_usuario,
      edad_usuario,
      telefono_usuario,
      correo_usuario,
      contrasena_usuario,
      tipo_usuario,
    });
    res.status(200).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const autenticarUsuarios = async (req, res) => {
  const { correo_usuario, contrasena_usuario } = req.body;

  try {
    const usuario = await Usuario.findOne({
      where: {
        correo_usuario: correo_usuario,
        contrasena_usuario: contrasena_usuario,
      },
    });
    if (!usuario) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    if (usuario.contrasena_usuario !== contrasena_usuario) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// REGISTRAR PEDIDOS
const registrarPedidos = async (req, res) => {
  const {
    nombre_cliente_pedido,
    apellido_cliente_pedido,
    numero_identidad_cliente_pedido,
    telefono_cliente_pedido,
    correo_cliente_pedido,
    direccion_cliente_pedido,
    producto_pedido,
    cantidad_pedido,
    precio_pedido,
  } = req.body;
  try {
    const nuevoPedido = await Pedido.create({
      nombre_cliente_pedido,
      apellido_cliente_pedido,
      numero_identidad_cliente_pedido,
      telefono_cliente_pedido,
      correo_cliente_pedido,
      direccion_cliente_pedido,
      producto_pedido,
      cantidad_pedido,
      precio_pedido,
    });
    res.status(200).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const listarPedidos = async (req, res) => {
  try {
    const pedido = await Pedido.findAll();
    res.status(200).json(pedido);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const eliminarPedidos = async (req, res) => {
  const { id_pedido } = req.params;
  try {
    const respuesta = await Pedido.destroy({
      where: {
        id_pedido,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

export {
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
};
