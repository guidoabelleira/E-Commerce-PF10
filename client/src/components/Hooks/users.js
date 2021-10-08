import axios from "axios";

import { USER_LOAD } from "../../constantes";

export function authenticatedUserDb(user){
    console.log("console hook user: ", user)
    console.log("console hook user name: ", user.name)
    if(user){
        const values = {
            name: user.given_name,
            lastname: user.family_name,
            email: user.email,
            address: user.locale,
            userRole: 'client',
            isAdmin: false,
            password: user.nickname,
            image: user.picture
        }
        // envio a crear el usuario
        async function validate(values) {
            let response = await axios.post(USER_LOAD, values);
            let r = response.data
            console.log("response: ", r);
        }
        validate(values);
    }
}