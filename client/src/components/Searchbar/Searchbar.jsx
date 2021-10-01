import { useState } from "react"
import { useDispatch } from 'react-redux'
import { getProductByName } from "../../redux/actions";

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

    return (
        <div>
            <input 
                type="text"
                placeholder="Search product..."
                onChange={handleInputChange}
            />
            <button
                type="submit"
                onClick={handleSubmit}>
            Buscar
            </button>
        </div>
    )
}

export default Searchbar