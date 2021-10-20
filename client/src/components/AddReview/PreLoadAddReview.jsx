import React, { useState, useEffect } from 'react';
import { 
    useDispatch, 
    //useSelector, 
} from 'react-redux';
//import { Link } from "react-router-dom";
import Loading from '../Loading/Loading';
import { 
    getAllCategories,
    getAllProducts,

} from '../../redux/actions';
import AddReview from './AddReview';


export default function PreLoadAddReview (){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    //const categories = useSelector(state => state.allCategories)

    useEffect(() => {
        const data = async ()=>{
            try{
                dispatch(getAllCategories())
                dispatch(getAllProducts())
                setTimeout(()=>{
                    setLoading(false)
                }, 2000)
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
                loading?
                (
                    <Loading />
                ) 
                :
                (
                    <AddReview />
                )
            }
        </div>
    )
}