import { Sequelize } from 'sequelize';

// Obtener los valores de las variables de entorno o establecer valores predeterminados
const dbName = process.env.DB_NAME || '';
const dbUser = process.env.DB_USER || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || '';

// Convertir el puerto de cadena a número
const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort, // Utiliza el puerto convertido a número
  dialect: 'mysql',
});

export default sequelize;