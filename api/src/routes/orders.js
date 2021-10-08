const router = require('express').Router()
const { Order, User } = require("../db.js");
const isAdmin = require("../middleware/isAdmin");
const auth = require("../middleware/auth");

router.get("/", (req, res, next) => {
  Order.findAll({
    include: [
      {
        model: User,
      },
    ], 
  })
    .then((orders) => {
      return res.send(orders).status(200);
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});
// id: num Order
router.put("/:id", /* auth, isAdmin, */ (req, res, next) => {
  const { state } = req.body; // 'Cart', 'Created', 'Processing', 'Canceled', 'Complete'
  const { id } = req.params;

  Order.update(
    {
      state: state,
    },
    { where: { id: id } }
  )
    .then((value) => {
      console.log(value);
      const result = value[0];
      if (result) {
        return res.status(202).send("Element updated");
      }
      return res.status(400).send("Order not found!");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

  
// ruta para finalizar la compra del carrito----------------------------------------------
router.put("/checkout/:id", (req, res) => {
  const { state, totalPrice } = req.body;
  const { id } = req.params;
  Order.update(
    {
      state: state,
      totalPrice: totalPrice,
    },
    { where: { id: id } }
  )
    .then((value) => {
      const result = value[0];
      if (result) {
        return res.status(202).send("Element updated");
      }
      return res.status(400).send("Order not found!");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Order.findAll({
    where: {
      id: id,
    },
  })
    .then((order) => {
      const orderId = order;
      if (orderId) {
        return res.status(200).json(order);
      }
      return res.status(400).send("Order not found!");
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

router.delete("/:id", /* auth, isAdmin, */ (req, res) => {
  const { id } = req.params;
  Order.findOne({
    where: {
      id: id,
    },
  })
    .then((order) => {
      order.destroy();
      res.send("Order Deleted");
    })
    .catch((err) => res.send({ data: err }).status(400));
});

router.post("/:state", async (req, res) => {
  try {
    const { state } = req.params;
    const orders = await Order.findAll({
      where: {
        state: state,
      },
      include: [
        {
          model: User,
        },
      ],
    });
    if (orders) res.send(orders);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});

module.exports = router;