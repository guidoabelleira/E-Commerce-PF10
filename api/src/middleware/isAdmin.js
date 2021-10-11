const { User } = require("../db.js");

const isAdmin = (req, res, next) => {

    User.findByPk(req.user.id).then(user => {
        if(user.userRole === "admin") {
            next();
        } else {
            res.status(401).send({ msg: "Unauthorized!" })
        }
    }).catch(err => {
        res.status(401).send({ msg: "Unauthorized" })
    })
}

//Este middleware al ser colocado en las rutas, significa q sólo se debe colocar el token de admin en el header, si colocas un token de un client no dejará ejecutar la ruta.

module.exports = isAdmin;
