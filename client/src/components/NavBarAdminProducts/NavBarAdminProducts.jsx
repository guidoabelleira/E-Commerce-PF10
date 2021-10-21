import { Link } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import style from './NavBarAdminProducts.module.css';

export default function NavBarAdminProducts (){
    const {isAuthenticated} = useAuth0();

    return isAuthenticated ? (
            <div className={style.container}>
                
                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/addproduct">
                        <button className={style.mainBttn}> 
                            {/* <i><FontAwesomeIcon icon={faHouseUser}/></i> */}
                            <p>Añadir Producto</p>
                        </button>
                        </Link>
                    </div>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/addcategories">
                        <button className={style.mainBttn}>
                            {/* <i><FontAwesomeIcon icon={faHouseUser}/></i> */}
                            <p>Añadir Categorías</p>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/stock">
                        <button className={style.mainBttn}>
                            {/* <i><FontAwesomeIcon icon={faHouseUser}/></i> */}
                            <p>Ver Stock</p>
                            </button>
                        </Link>
                    </div>

                    <div>
                        <Link className={style.mainBttn} to="/adminproducts/PreLoadUpdateProduct">
                        <button className={style.mainBttn}>
                            <p>Editar Producto</p>
                            </button>
                        </Link>
                    </div>
                </div>
            
        ) : (
            <div className={style.container}>
                <h2>No tienes permisos</h2>
            </div>
        )
}