const { DataTypes } = require('sequelize');
const { all } = require('../routes');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => { //exporta el modelo, y recive la instacia de sequelize por parametro.

  // defino el modelo
  sequelize.define('Driver', { // el .define se usa para definir el modelo o tabla, el primer argumento es el nombre del modelo y el segundo los tipos de datos que va a tener.
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    image: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teams: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
  }
  );
};

