require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});// Proporciona una nueva instancia de sequelize para interactuar con la base de datos desde vs

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  }); // este codigo es para poder importar los archivos que se creen con .js en la carpeta de models
//Al finalizar, el array "modelDefiners" contendrá todos los modelos importados desde los archivos ".js" en el directorio "/models"


modelDefiners.forEach(model => model(sequelize));// por cada modelo que itere envia la instacia de sequelize para ser recivida por parametro


let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Driver, Team } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Team.belongsToMany(Driver, { through: 'Driver_Teams' });//" establece una relación de uno a muchos entre los modelos de "Team" y "Driver"
Driver.belongsToMany(Team, { through: 'Driver_Teams' });//significa que un objeto de la clase "Driver" puede pertenecer a un objeto de la clase "Team". 

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};