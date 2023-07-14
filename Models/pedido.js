import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Pedido = sequelize.define(
  "pedidos",
  {
    // Definicion de Atributos
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_cliente_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido_cliente_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono_cliente_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo_cliente_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion_cliente_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    producto_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_pedido: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export { Pedido };
