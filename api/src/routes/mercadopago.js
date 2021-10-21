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
    items: [],
    back_urls: {
      success: "http://localhost:3000/order", // /home
      failure: "http://localhost:3000/home",
      pendind: "http://localhost:3000/home",
    },
    auto_return: "all",
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
      res.send(response.body.init_point)

    }).catch((error) => {
      next(error);
    });

})

module.exports = router;