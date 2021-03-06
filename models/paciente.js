'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nombre: DataTypes.STRING,
    numero_chip: DataTypes.STRING,
    especie: DataTypes.STRING,
    edad_anios: DataTypes.INTEGER,
    edad_meses: DataTypes.INTEGER,
    raza: DataTypes.STRING,
    color: DataTypes.STRING,
    castrado: DataTypes.STRING,
    chip: DataTypes.STRING,
    ultima_visita: DataTypes.DATE

  }, {
    //Evitar que sequelize modifique el nombre de la tabla.
    freezeTableName: true,
    //Definir nombre de la tabla.
    tableName: 'Paciente',
  });
  Paciente.associate = function(models) {
    // associations can be defined here
  };
  return Paciente;
};