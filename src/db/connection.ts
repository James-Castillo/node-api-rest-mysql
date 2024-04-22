import { Sequelize } from 'sequelize';

// Obtener los valores de las variables de entorno o establecer valores predeterminados
const dbName = process.env.DB_NAME || 'almacen';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || 'KrJuniors08$';
const dbHost = process.env.DB_HOST || 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
});

export default sequelize;