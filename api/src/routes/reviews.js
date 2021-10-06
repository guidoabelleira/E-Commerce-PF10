const router = require('express').Router();
const { Sequelize } = require("sequelize");
const { Review, Orderline, User, Order, Product } = require("../db.js");

router.get("/product/:id/reviews", (req, res) => {
  const id = req.params.id;
  Review.findAndCountAll({
    where: {
      productId: id,
    },
    include: {
      model: User,
    },
  })
    .then((review) => res.send(review))
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

router.get("/product/:id/oneStarReviews", async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findAndCountAll({
      where: {
        productId: id,
        rating: "1",
      },
    });
    return res.send(reviews);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});
router.get("/product/:id/twoStarsReviews", async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findAndCountAll({
      where: {
        productId: id,
        rating: "2",
      },
    });
    return res.send(reviews);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});
router.get("/product/:id/threeStarsReviews", async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findAndCountAll({
      where: {
        productId: id,
        rating: "3",
      },
    });
    return res.send(reviews);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});
router.get("/product/:id/fourStarsReviews", async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findAndCountAll({
      where: {
        productId: id,
        rating: "4",
      },
    });
    return res.send(reviews);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});
router.get("/product/:id/fiveStarsReviews", async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await Review.findAndCountAll({
      where: {
        productId: id,
        rating: "5",
      },
    });
    return res.send(reviews);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});

router.post("/product/:id/review", (req, res) => {
  const { description, rating, userId } = req.body;
  const { id } = req.params;
  Review.create({
    userId: userId,
    productId: id,
    description: description,
    rating: rating,
  })
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

router.put("/:idReview", (req, res, next) => {
  const { idReview } = req.params;
  const { description, rating } = req.body;
  Review.update(
    {
      description: description,
      rating: rating,
    },
    { where: { id: idReview } }
  )
    .then((value) => {
      const result = value[0];
      if (result) {
        return res.send("Element updated").status(202);
      }
      return res.send("Review not found!").status(400);
    })
    .catch((err) => {
      return res.send({ data: err }).status(400);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Review.destroy({
    where: {
      id: id,
    },
  })
    .then((review) => {
      if (review) {
        return res.send("Review Deleted");
      }
      return res.send({ data: "Review not found!" }).status(400);
    })
    .catch((err) => res.send({ data: err }).status(400));
});

// Match Product-User
router.post("/user/product", async (req, res) => {   //este debería ser un get
  try {
    const {userId} = req.body;
    const {productId} = req.body;
    const review = await Review.findOne({
      where: {
        userId: userId,
        productId: productId,
      },
    });
    if (!review) {
      res.send(
        `No se encuentra una review del userId ${userId} para el productId ${productId}`
      );
    }
    res.send(review);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});
// All reviews from one User
router.get("/user/:userId", async (req, res) => {
  try {
    const {userId} = req.params;
    const review = await Review.findAll({
      where: {
        userId: userId,
      },
      order: [["productId", "ASC"]],
    });
    if (!review) {
      res.send(`El userId ${userId} no tiene reviews`);
    }
    res.send(review);
  } catch (err) {
    return res.send({ data: err }).status(400);
  }
});

module.exports = router;