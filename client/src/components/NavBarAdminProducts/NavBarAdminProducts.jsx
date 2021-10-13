import { Link } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import style from './NavBarAdminProducts.module.css';

export default function NavBarAdminProducts (){
    const {isAuthenticated} = useAuth0();

    return isAuthenticated ? (
            <div className={style.container}>
                <div className={style.column}>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/addproduct">
                            {/* <i><FontAwesomeIcon icon={faHouseUser}/></i> */}
                            <p>Añadir Producto</p>
                        </Link>
                    </div>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/addcategories">
                            {/* <i><FontAwesomeIcon icon={faHouseUser}/></i> */}
                            <p>Añadir Categorias</p>
                        </Link>
                    </div>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/stock">
                            {/* <i><FontAwesomeIcon icon={faHouseUser}/></i> */}
                            <p>Ver Stock</p>
                        </Link>
                    </div>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/editProduct">
                            <p>Editar Producto</p>
                        </Link>
                    </div>
                </div>
            </div>
        ) : (
            <div className={style.container}>
                <h2>No tienes permisos</h2>
            </div>
        )
}