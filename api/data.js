const {  User,  Order,  Orderline,  Review} = require('./src/db'); 

function orderDb() {
  Order.bulkCreate([
    {
      totalprice: 4579.3,
      state: "Cart",
      userdId: 1,
    },
    {
      totalprice: 2193,
      state: "Created",
      userdId: 1,
    },
    {
      totalprice: 280.00,
      state: "Canceled",
      userdId: 1,
    },
    {
      totalprice: 380,
      state: "Cart",
      userdId: 2,
    },
    {
      totalprice: 186.38,
      state: "Complete",
      userdId: 2,
    },
    {
      totalprice: 1078,
      state: "Processing",
      userdId: 2,
    },
    {
      totalprice: 768,
      state: "Created",
      userdId: 3,
    },
    {
      totalprice: 681,
      state: "Cart",
      userdId: 3,
    },
    {
      totalprice: 1834,
      state: "Created",
      userdId: 4,
    },
    {
      totalprice: 210.00,
      state: "Complete",
      userdId: 4,
    },
  ]);
}

function orderlineDb() {
  Orderline.bulkCreate([
    {
      subtotal: 340.50,
      quantity: 1,
      productId: 1,
      orderId: 1,
    },
    {
      subtotal: 313.55,
      quantity: 1,
      productId: 3,
      orderId: 1,
    },
    {
      subtotal: 3386.25,
      quantity: 5,
      productId: 7,
      orderId: 1,
    },
   {
      subtotal: 539.0,
      quantity: 1,
      productId: 8,
      orderId: 1,
    },
    {
      subtotal: 1617,
      quantity: 3,
      productId: 8,
      orderId: 2,
    },
    {
      subtotal: 576.00,
      quantity: 3,
      productId: 14,
      orderId: 2,
    },
    {
      subtotal: 280.00,
      quantity: 2,
      productId: 12,
      orderId: 3,
    },
    {
      subtotal: 170.00,
      quantity: 1,
      productId: 11,
      orderId: 4,
    },
    {
      subtotal: 210.00,
      quantity: 1,
      productId: 16,
      orderId: 4,
    },
    {
      subtotal: 186.38,
      quantity: 1,
      productId: 32,
      orderId: 5,
    },
    {
      subtotal: 1078,
      quantity: 2,
      productId: 8,
      orderId: 6,
    },
    {
      subtotal: 768,
      quantity: 4,
      productId: 14,
      orderId: 7,
    },
    {
      subtotal: 681,
      quantity: 2,
      productId: 2,
      orderId: 8,
    },
    {
      subtotal: 1834,
      quantity: 4,
      productId: 6,
      orderId: 9,
    },
    {
      subtotal: 210.00,
      quantity: 1,
      productId: 16,
      orderId: 10,
    },
  ]);
}

function userDb() {
  User.bulkCreate([
{
        "name": "Pia",
        "image": "https://github.com/piacorrea",
        "lastname": "Correa",
        "email": "pia.correac@usach.cl",
        "address": "Valle Escondido 1450",
        "userRole": "superadmin",
        "isAdmin":  true,
        "password": "holapia1"
    },
 {
        "name": "Julieta",
        "image": "https://github.com/piacorrea",
        "lastname": "Naranjo",
        "email": "julietita@usach.cl",
        "address": "Valle Escondido 1450",
        "userRole": "admin",
        "isAdmin":  false,
        "password": "holajulieta1"
    },
  {
        "name": "Jenny",
        "image": "https://github.com/piacorrea",
        "lastname": "Cantin",
        "email": "yeya_cantin@hotmail.com",
        "address": "Libertad 1290, Valle Escondido, Cordoba",
        "userRole": "client",
        "isAdmin":  false,
        "password": "holayeya1"
    }  
]);
}
function reviewsDb() {
   Review.bulkCreate([
    {
      rating: "2",
      description: "Impresentable, he tirado mi plata!|@#~€¬=(¿}]^*)=/%$·$%!ª",
    },
    {
      rating: "2",
      description: "Pésima en su terminación, no lo recomiendo",
    },
    {
      rating: "3",
      description: "Calidad dudosa, pero no se puede pedir más por ese precio",
    },
    {
      rating: "4",
      description: "Bastante bueno en su terminación, esperemos que dure",
    },
    {
      rating: "5",
      description: "Excelente, 100% recomendado",
    },
    {
      rating: "1",
      description: "Pésimo, no malgasten su dinero",
    },
    {
      rating: "2",
      description: "Mas malo imposible, me siento robado",
    },
    {
      rating: "3",
      description: "Calidad media, por ese precio podría ser mejor",
    },
    {
      rating: "4",
      description: "Me gusta, cumple su función",
    },
    {
      rating: "5",
      description: "Increíble, excelente calidad, recomendado!",
    },
    {
      rating: "2",
      description: "Uffff, que decepción",
    },
    {
      rating: "3",
      description: "Maso maso",
    },
    {
      rating: "3",
      description: "Calidad standard",
    },
    {
      rating: "5",
      description: "Me encantaaaaa este producto",
    },
    {
      rating: "5",
      description: "Todo bien 5 puntos",
    },
    {
      rating: "2",
      description:
        "Un desastre, he malgastado mi plata!|@#~€¬=(¿}]^*)=/%$·$%!ª",
    },
    {
      rating: "2",
      description: "Pésimo, no lo recomiendo",
    },
    {
      rating: "3",
      description: "Calidad media, pero no se puede pedir más por ese precio",
    },
    {
      rating: "5",
      description: "Muy bueno, esperemos que dure",
    },
    {
      rating: "4",
      description: "Excelente producto, 80% recomendado",
    },
    {
      rating: "2",
      description: "Malísimo, no tiren su dinero",
    },
    {
      rating: "1",
      description: "Mas malo no es posible, me siento estafado",
    },
    {
      rating: "3",
      description: "Ahí anda +-, por ese precio no se puede pedir más",
    },
    {
      rating: "5",
      description: "Me fascina!",
    },
    {
      rating: "4",
      description: "Buena calidad, 100 % recomendado!",
    },
    {
      rating: "1",
      description: "Buee!, roto al segundo día",
    },
    {
      rating: "3",
      description: "Casi le doy 2 pero bueno me atendieron bien",
    },
    {
      rating: "4",
      description: "Calidad óptima",
    },
    {
      rating: "4",
      description: "Me gusta, se ve fuerte",
    },
    {
      rating: "5",
      description: "Todo bien! 10 pts",
    },
  ]);
}

function review_productDb() {
  // Crea relación entre review y productos
  var userid = 1;
  var j = 1;
  for (let i = 1; i < 29; i++) {
    if (userid > 6) {
      userid = 1;
    }
    if (j > 14) {
      j = 1;
    }
    Review.update(
      {
        productId: j,
        userId: userid,
      },
      { where: { id: i } }
    );
    userid++;
    j++;
  }
}



module.exports = {
  // exporta las funciones
  userDb,
  orderDb,
  orderlineDb,
  review_productDb,
  reviewsDb,
};
