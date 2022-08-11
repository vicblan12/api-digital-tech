const encrypt = require("bcryptjs");

function encriptar(password) {
    return encrypt.hashSync(password, encrypt.genSaltSync(8), null); //funcion para encriptar contraseña
  };

function comprobate(password, hash){
    return encrypt.compareSync(password, hash)
}

  module.exports = {
    encriptar,
    comprobate
  }