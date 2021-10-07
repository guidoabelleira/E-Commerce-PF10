import { useState } from "react"
import { useDispatch } from "react-redux"
import { postCategory } from "../../redux/actions"

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
        <div>
            <form onSubmit={handleForm}>
                <input
                    value={input.name}
                    placeholder="Categoria"
                    name="name"
                    required
                    onChange={handleInputChange}
                />
                <button
                    type="submit">
                    Crear
                </button>
            </form>
        </div>
    )
}

export default FormCategory
