import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategory, getCategoryToDelete } from "../../redux/actions"
import { useHistory } from 'react-router-dom'

function DeleteCategory() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        categories.length && categories?.map(el => setId(el.id))
    }, [categories, dispatch])

    function handleDeleteButton() {
        dispatch(deleteCategory(id)) 
        window.location.reload(true)
    }

    function handleInputChange(e) {
        setCategory(e.target.value)
    }

    function handleSubmit() {
        dispatch(getCategoryToDelete(category))
        setCategory("")
    }

    return (
        <div style={{padding:"200px"}}>
            <input
                placeholder="Buscar categoria"
                onChange={handleInputChange}
                type="text" 
            />
            <button
                type="submit"
                onClick={handleSubmit}>
                Buscar
            </button>
            {
            categories.length ? categories?.map(el => {
                return(
                    <h2 key={el.id}>{el.name}<button onClick={handleDeleteButton}>Borrar</button></h2>
                ) 
            }) :
            <h2>Buscar categoria</h2>
            } 
        </div>
    )
}

export default DeleteCategory