import { Sequelize } from 'sequelize';

// Extrae las credenciales de conexión de las variables de entorno
const DB_NAME = process.env.DB_NAME || 'almacen';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'admin123';
const DB_HOST = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});

export default sequelize;
