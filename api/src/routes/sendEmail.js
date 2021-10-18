const router = require("express").Router();
const { Product, Categories, Review, User, Order, Orderline} = require("../db.js");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const {USER_MAIL, USER_PASS} = process.env;

//Primer paso es tener al usuario creado!
router.post("/", (req, res) => {
  let transporter = nodemailer.createTransport({
/*     host: "smtp.gmail.com",         //Descomentar si no funciona como está
    port: 465,
    secure: true, //true for 465, false for other ports */
    service: "gmail",
    auth: {
      user: USER_MAIL, //
      pass: USER_PASS, //OJO ESTOS DATOS DEBEN IR EN .ENV COMO DATOS OCULTOS PORQUE SON SENSIBLES
    },
  });

  const emailType = req.params.emailType;
  let mailOptions;

  if (emailType === "welcome") {
    mailOptions = {
      from: USER_MAIL,
      to: req.body.user.email,
      subject: "Bienvenid@",
      html:
        `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
                <div style="width: 100%; max-width: 700px; margin: auto;">
                    <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
                        <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Mates-Mati</h1>
                     </div>
            
          <div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
          <p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
                                    Bienvenid@   ` +
        req.body.user.name +
        `  ` +
        req.body.user.lastname +
        `  !
        <hr>
        <p>
        Gracias por confiar en nosotr@s!</p>
        <hr>
        <small>En caso de cualquier inquietud, por favor contactanos en: ecommercepf10@gmail.com</small>`,
    };
  } else if (emailType === "forgotPassword") {
    mailOptions = {
      from: USER_MAIL,
      to: req.body.user.email,
      subject: "Link para restaurar contraseña",
      html:
        `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
                <div style="width: 100%; max-width: 700px; margin: auto;">
                    <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
                        <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Mates-Mati</h1>
                     </div>
            
          <div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
          <p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
                                    Hola   ` +
        req.body.user.name +
        `  ` +
        req.body.user.lastname +
        `  !` +
        `Este es su enlace para la recuperación de contraseña, recuerde que es de un solo uso` +
        `http://localhost:3000/users/forgotPassword/?` +
        req.body.user.emailHashed +
        ` ` +
        `No compartir este link
        <hr>
        <p>
        Gracias por confiar en nosotr@s!</p>
        <hr>
        <small>En caso de cualquier inquietud, por favor contactanos en: ecommercepf10@gmail.com</small>`,
    };
  } else if (emailType === "sendPurchase") {
    const { user, info } = req.body;
    mailOptions = {
      from: USER_MAIL,
      to: user.email,
      subject: "Detalle y confirmación de compra",
      html: `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
      <div style="width: 100%; max-width: 700px; margin: auto;">
      <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
      <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Mates-Mati</h1>
      </div>
      
      <div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
      <p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
      Hola ${user.name}  ${user.lastname}  !
      <h3>Tu compra: </h3>
      Order N° ${info.orderId}
      <hr>
             
      <h3>Precio total: ${info.totalPrice}</h3>
      <hr>
      <p> Si deseas ver los detalles de tu orden, por favor regrese a nuestra página!! </p>
      <p>
      Gracias por tu compra!</p>
      <hr>
      <small>En caso de cualquier inquietud, por favor contactanos en: ecommercepf10@gmail.com</small>
      `,
    };
  } else if (emailType === "dispatchOrder") {
    const { user, info } = req.body;
    mailOptions = {
      from: USER_MAIL,
      to: user.email,
      subject: "Orden despachada!",
      html: `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
      <div style="width: 100%; max-width: 700px; margin: auto;">
      <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
      <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Mates-Mati</h1>
      </div>
      
      <div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
      <p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
      Hola ${user.name}  ${user.lastname}  !
      <h2>Tu orden fue despachada con éxito! </h2>
      Orden N° ${info.orderId}
      <hr>
      Ya estamos en camino a tu dirección.
      <hr>
      <p> Si deseas ver más detalles de tu orden, por favor regrese a nuestra página!! </p>
      <p>
      Gracias por tu compra!</p>
      <hr>
      <small>En caso de cualquier inquietud, por favor contactanos en: ecommercepf10@gmail.com</small>
      `,
    };
  } else if(emailType === "newsletter"){
    const {user, info} = req.body;
    mailOptions = {
      from: USER_MAIL,
      to: user.email,
      subject: info.title,
      html: `<div id="container" style="width: 100%; font-family: sans-serif; font-weight: normal;">
      <div style="width: 100%; max-width: 700px; margin: auto;">
      <div style="background-color: #0E6655; text-align: center; padding: 0.7rem 0;">
      <h1 style="color: white; font-family: sans-serif; font-weight: normal;">Mates-Mati</h1>
      </div>
      
      <div style="text-align: center; padding: 0 0.72rem; padding-top: 2.5rem; background-color:white">
      <p style="color: #4f5154; margin-bottom: 1.4rem; font-size: 1rem;">&iexcl;
      Hola ${user.name}  ${user.lastname}  !
      <h3>Estas son las nuevas noticias: </h3>
      ${info.body}
      <hr>
      <p>
      Gracias por suscribirte!</p>
      <hr>
      <small>En caso de cualquier inquietud, por favor contactanos en: ecommercepf10@gmail.com</small>`
    }
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      //console.log('HOLA', mailOptions)
      res.send("email has been send");
    }
  });
 // console.log('HOLA2', mailOptions)
  res.send("email has been send");
});

module.exports = router;