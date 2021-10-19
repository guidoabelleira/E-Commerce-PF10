import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategories, postProduct } from "../../redux/actions"
import style from "./Form.module.css"
function Form() {
 
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories)
   
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
 
    const [input, setInput] = useState({
        name: "",
        image: "",
        price: null,
        stock: null ,
        onStock: null,
        onSale: null,
        description: "",
        category: []
    })
 
    function handleSelectCategory(e) {
        setInput({
            ...input,
            category: [...input.category,e.target.value]
        })
    }
 
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postProduct(input))
        alert('Producto creado satisfactoriamente')
        setInput({
            name: "",
            image: "",
            price: "",
            stock: "" ,
            onStock: "",
            onSale: "",
            description: "",
            category: []
        })
    }
 
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
 
    function handleSelectOnSale(e) {
        setInput({
            ...input,
            onSale: e.target.value
        })
    }
 
    function handleSelectOnStock(e) {
        setInput({
            ...input,
            onStock: e.target.value
        })
    }
 
    return (
        <div className={style.container}>
            <h2 className={style.label}>Nuevo Producto:</h2>  
            <form onSubmit={handleSubmit} >
                {/* <span>Nombre</span> */}
                    <input
                        value={input.name}
                        placeholder="Nombre"
                        type="text"
                        name="name"
                        required
                        onChange={handleInputChange}
                        className={style.input}
                    />
                {/* <span>Imagen</span> */}
                    <input
                        placeholder="Imagen"
                        value={input.image}
                        type="text"
                        name="image"
                        required
                        onChange={handleInputChange}
                        className={style.input}
                    />
                {/* <span>Precio</span> */}
                    <input
                        placeholder="Precio"
                        value={input.price}
                        type="number"
                        name="price"
                        required
                        onChange={handleInputChange}
                        className={style.input}
                    />
                {/* <span>Stock</span> */}
                    <input
                        value={input.stock}
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        required
                        onChange={handleInputChange}
                        className={style.input}
                    />
                    {/* <span>Descripción</span> */}
                    <input
                        placeholder="Descripción"
                        value={input.description}
                        name="description"
                        onChange={handleInputChange}
                        className={style.input}
                        required
                        type="text"
                    />
                     <br></br>
                    <span>Categorias:</span>
                    <select
                        onChange={handleSelectCategory}
                        className={style.select}
                    >
                        <option value={null}></option>
                        {
                            categories.map((el) => {
                                return (
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            })
                        }
                    </select>
                        <p>{input.category.map(el => el.toString()+ " ")}</p>
                 <br></br>  
                <span>En stock?</span>
                    <select
                        onChange={handleSelectOnStock}
                        className={style.select}
                    >
                        <option value={null}>Seleccionar</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </select>
                <br></br>
                <span>En oferta?</span>
                    <select
                        onChange={handleSelectOnSale}
                        className={style.select}
                    >
                        <option value={null}>Seleccionar</option>
                        <option value={true}>Si</option>
                        <option value={false}>No</option>
                    </select>
                    <br></br>
               
                    <button className={style.bttn} type='submit'>Crear producto</button>
            </form>
        </div>
    )
}
 
export default Form
 
