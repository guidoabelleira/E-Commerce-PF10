import React, { useState, useEffect } from 'react';
import { useDispatch, } from 'react-redux';
import { Link } from "react-router-dom";
import { 
    getAllCategories,
} from '../../redux/actions';


export default function PreLoadAddReview (){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const data = async ()=>{
            try{
                dispatch(getAllCategories())
                setLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }
        data()
    }, [dispatch,]);


    return (
        <div >
            {
                <Link 
                    to='/adminproducts/addReview'
                >
                    <button 
                        disabled={loading}
                    > 
                        {
                            loading? 
                                "Cargando..."
                                :
                                "Editar"
                        } 
                    </button>
                </Link>
            }
        </div>
    )
}