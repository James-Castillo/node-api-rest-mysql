import { Sequelize } from 'sequelize';

// Extrae las credenciales de conexión de las variables de entorno
const DB_NAME = process.env.DB_NAME || 'almacen';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'admin123';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT_STRING = process.env.DB_PORT || '3306'; // Puerto predeterminado para MySQL
const DB_PORT = parseInt(DB_PORT_STRING, 10); 

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT, 
    dialect: 'mysql'
});

export default sequelize;
