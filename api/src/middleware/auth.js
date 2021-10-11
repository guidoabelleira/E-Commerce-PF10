const jwt = require("jsonwebtoken");
const { DB_KEY } = process.env;

const auth = (req, res, next) => {
  //middleware
  // console.log('HOLA PIA', req.headers)
  let token = req.header("x-auth-token"); //chequeo si el usuario esta autorizado o sea si me envia el token en el header "x-auth-token" se puede llamar como quieras
  if (!token) token = req.body.headers["x-auth-token"];
  if (!token)
    return res.status(401).send({ msg: "No token, authorization denied" }); //si no tiene el token no tiene autorizacion

  try {
    const decoded = jwt.verify(token, DB_KEY); //"deshashea el token" lo compara con la palabra secreta
    req.user = decoded; //guardo en req.user el id del usuario (porque eso es lo que tiene adentro el token)
    //console.log('HOLA PIA2', req.user)
    next();
  } catch (error) {
    res.status(400).send({ msg: "token is not valid" });
  }
};

//const {userId, username} = decoded ----> req.user es { id: 1, iat: 1633956444, exp: 1634042844 } es el id del token del usuario colocado en el header
//metodo sign en el video devuelve el token generado

module.exports = auth;