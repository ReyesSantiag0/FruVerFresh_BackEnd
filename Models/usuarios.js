import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Usuario = sequelize.define(
  "usuarios",
  {
    // Definicion de Atributos
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    telefono_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export { Usuario };
