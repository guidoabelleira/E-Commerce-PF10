const router = require('express').Router()

// -------------------------- MERCADOPAGO ----------------------------------- //

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales

router.post("/", (req, res, next) =>{
  // Crea un objeto de preferencia
  
  mercadopago.configure({
    access_token: 'TEST-889101705265373-101021-bd726e9accba70f029aa2785da5d6a19-322126240'
  });
let preference = {
  items: [
    {
      title: 'Mate barril de Calden',
      unit_price: 355.50,
      quantity: 2,
    }
  ]
};

mercadopago.preferences.create(preference)
.then((response) => {
    res.send(response.body.init_point)

  }).catch(function(error){
    console.log(error);
  });

})

module.exports = router;