import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { getProductByName } from "../../redux/actions";

import style from './Searchbar.module.css';

// se corrije ruta de redux/actions

function Searchbar() {
    const dispatch = useDispatch()
    const [input, setInput] = useState()

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductByName(input))
    }
    useEffect(async() => {
        await getProductByName(input)
        
    }, []);
    
    return (
        <div className={style.container}>
  <div className={style.search}>
      <input type="text" className={style.searchTerm} placeholder="Search your product" onChange={handleInputChange}/>
      <button type="submit" class={style.searchButton}onClick={handleSubmit}>
        <i className={style.i}></i>
     </button>
   </div>
        </div>
    )
}

export default Searchbar

