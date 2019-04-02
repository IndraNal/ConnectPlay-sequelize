module.exports = function(sequlize, DataTypes){
    // registration form model for input validation for *registration page*
    var Register = sequlize.define("Resgister", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {isEmail: true}
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    });
    // code used to check if password is available 
    Register.prototype.validPassword = function(password){
        return bcrybt.compareSync(password, this.password);
    };
    // before a Registration is completed automatically hash their password
    Register.hook("beforeCreate", function(register){
        register.password = bcrybt.hashSync(register.password, bcrybt.genSaltSync(10), null);
    });
    return Register;
};