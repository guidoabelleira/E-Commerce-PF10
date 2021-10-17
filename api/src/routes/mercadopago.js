const router = require('express').Router()

// -------------------------- MERCADOPAGO ----------------------------------- //

// SDK de Mercado Pago
const mercadopago = require('mercadopago');
// Agrega credenciales

router.post("/", (req, res, next) => {
  // Crea un objeto de preferencia
  const products = req.body

  mercadopago.configure({
    access_token: 'APP_USR-327784668252270-111502-2ac20dc1d5088b2e30bb07d2bfef4cbf-672708481'
  });

  let preference = {
    items: []
  };

  const addPreference = products.forEach((el) => {
    preference.items.push({
      title: el.name,
      unit_price: parseInt(el.price),
      quantity: parseInt(el.count)
    })
  })

  mercadopago.preferences.create(preference)
    .then(addPreference)
    .then((response) => {
      res.redirect(response.body.init_point)

    }).catch((error) => {
      next(error);
    });

})

module.exports = router;