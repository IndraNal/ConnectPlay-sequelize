// Import the ORM to create functions that will interact with the database.
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {

    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Must be a valid email address",
        }
      }
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
          },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false
         },
    Login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LogOut: {
      type: DataTypes.DATE,
      allowNull: true
          },
    Address: {
      type: DataTypes.TEXT,
      allowNull: false
         },
    Address2: {
      type: DataTypes.TEXT,
      allowNull: true
        },
    CityName: {
      type: DataTypes.STRING,
      allowNull: false
         },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Latitude:{
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Longitude:{
      type: DataTypes.DOUBLE,
      allowNull: true
    }
     });
  return Player;
};

