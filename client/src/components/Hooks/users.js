import axios from "axios";


import { USER_LOAD } from "../../constantes";

export async function authenticatedUserDb(user){
    // console.log("console hook user: ", user)
    // console.log("console hook user name: ", user.name)
    if(user){
        const values = {
            name: user.given_name,
            lastname: user.family_name,
            userRole: 'client',
            isAdmin: false,
            email: user.email,
            password: user.nickname,
            image: user.picture
        }
        // envio a crear el usuario
        async function validate(values) {
            let response = await axios.post(USER_LOAD, values);
            const r = response.data
            console.log("response active: ", r.isActive);
            if(r.isActive === false){
                return false
            }
            return r.id
        }
        const id = await validate(values);
        console.log("id en user: ", id)
        if(id){
            console.log("es objeto")
            localStorage.setItem('idUser', id);
            return id
        }
        return window.location="http://localhost:3000/error404";
    }
}



