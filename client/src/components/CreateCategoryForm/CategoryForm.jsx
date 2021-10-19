import { useState } from "react"
import { useDispatch } from "react-redux"
import { postCategory } from "../../redux/actions"
import style from "./CategoryForm.module.css"
 
function FormCategory() {
    const [input, setInput] = useState({
        name: ""
    })
    const dispatch = useDispatch()
 
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
 
    function handleForm(e) {
        e.preventDefault()
        dispatch(postCategory(input))
        alert('Categoria creada satisfactoriamente')
        setInput({
            name: ""
        })
    }
 
    return (
        <div className={style.container}>
            <h2 className={style.label}>Nueva Categoría:</h2>
            <form onSubmit={handleForm}>
                <input
                    value={input.name}
                    placeholder="Categoría"
                    name="name"
                    required
                    onChange={handleInputChange}
                    className={style.input}
                />
                <button
                    type="submit"
                    className={style.bttn}
                    >
                    Crear
                </button>
            </form>
        </div>
    )
}
 
export default FormCategory
