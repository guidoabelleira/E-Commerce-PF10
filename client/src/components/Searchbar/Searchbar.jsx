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
    console.log(input)
    return (
        <div className={style.body}>
            <div className={style.searchBar}>
                <input 
                class="form-control rounded"
                    type="text"
                    placeholder="Search product..."
                    onChange={handleInputChange}
                />                
                <button 
                    type="submit"
                    onClick={handleSubmit}>
                    Search
                </button>
                <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search">
        </i>
        </span>
            </div>
        </div>
    )
}

export default Searchbar