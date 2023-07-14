import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Producto = sequelize.define(
  "producto",
  {
    // Definicion de Atributos
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio_producto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    foto_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export { Producto };
