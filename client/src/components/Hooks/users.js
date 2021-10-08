import axios from "axios";

import { USER_LOAD } from "../../constantes";

export function authenticatedUserDb(user){

    if(user){
        const values = {
            name: user.name,
            lastname: user.family_name,
            email: user.email,
            address: user.locale,
            userRole: 'client',
            password: user.nickname,
            image: user.picture
        }
        // envio a crear el usuario
        async function validate(values) {
            let response = await axios.post(USER_LOAD, values);
            let r = response.data
            console.log("aca response: ", r);
        }
        validate(values)
        
    }

}