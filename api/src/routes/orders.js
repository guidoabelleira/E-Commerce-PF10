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
// get a ordenes por estado, utilizar en admin para ver ordenes
router.get("/find/state", async (req, res) => {   //example: http://localhost:3001/orders/find/state?state=Complete
  try {
    const state=req.query.state;
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
    if (orders) return res.json(orders);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});

// Get a todas las ordenes por id Order para el checkout
router.get("/:idOrder/ticket", (req, res) => { // http://localhost:3001/orders/:idOrder/ticket
  const { idOrder } = req.params;
    Order.findOne({
      where: {
        id: idOrder,
      },
      include: [
        {
          model: Product,
        },
      ],
    })
      .then((order) => {
        Orderline.findAll({
          where: {
            orderId: order.id,
          },
        }).then((orderlines) => {
          const orderLinePlusProduct = {
            product: order.products,
            orderlines: orderlines,
            orderId: order.id,
            totalPrice: order.totalPrice,
          };
          res.send(orderLinePlusProduct);
        });
      })
      .catch((err) => {
        res.send({ data: err }).status(400);
      });
  });
  
module.exports = router;