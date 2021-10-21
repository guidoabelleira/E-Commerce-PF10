// Confirmación de orden creada:

//Endpoint ---> http://localhost:3001/sendEmail/orderCreated

// Por BODY necesito:
let body ={
    user:{
        name,
        lastname,
        email
    },
    info:{
        orderId,
        totalPrice
    }
}

// INFO viene de orders. Si la palabra no te queda cómoda,
// la cambio por la que quieras, no hay problema.

// LET es solo para que no pierda formato.
// Probé haciendo comentado y se tabula mal

//------------------------------------------------------------------------------------------------------//

// Confirmación de compra:

//Endpoint ---> http://localhost:3001/sendEmail/orderComplete

// Por BODY necesito:
let body ={
    user:{
        name,
        lastname,
        email
    },
    info:{
        orderId,
        totalPrice
    }
}


//------------------------------------------------------------------------------------------------------//

// Orden despachada:

//Endpoint ---> http://localhost:3001/sendEmail/dispatchOrder

// Por BODY necesito:
let body ={
    user:{
        name,
        lastname,
        email
    },
    info:{
        orderId,
    }
}

//------------------------------------------------------------------------------------------------------//

// Contact Us (viene desde el form):

//Endpoint ---> http://localhost:3001/sendEmail/contactUs

// Por BODY necesito:
let body ={
    user:{
        name,
        email,
        affair,
        message,
        telephone
    }
}

//------------------------------------------------------------------------------------------------------//

// Newsletter (sin validación, solo mandar el mail):

//Endpoint ---> http://localhost:3001/sendEmail/newsletter

// Por BODY necesito:
let body ={
    user:{
        name,
        lastname,
        email,
    },
    info:{
        title, // título del mail
        body   // mensaje de newsletter
    }
}

//------------------------------------------------------------------------------------------------------//

// OPCIONAL ---> Endpoint para enviar mail de WELCOME 
// No automatizado aunque "se puede" como un chiche
// manualmente a esta ruta

//Endpoint ---> http://localhost:3001/sendEmail/welcome

// Por BODY necesito:
let body ={
    user:{
        name,
        lastname,
        email
    }
}