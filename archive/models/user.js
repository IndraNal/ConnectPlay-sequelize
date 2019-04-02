var bcrybt = require("bcrypt-nodejs");
module.exports = function(sequlize, DataTypes){
    // username and password validation for *login screen*
    var User = sequlize.define("User", {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {isEmail: true}
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    })
    // code used to check if password is valid and matches what's in the database
    User.prototype.validPassword = function(password){
        return bcrybt.compareSync(password, this.password);
    };
    // before a User is created automatically hash their password
    User.hook("beforeCreate", function(user){
        user.password = bcrybt.hashSync(user.password, bcrybt.genSaltSync(10), null);
    });
    return User;
};