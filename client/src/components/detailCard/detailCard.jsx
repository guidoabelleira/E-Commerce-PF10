export default function detailCard (props) {
    const {
        name,
        id,
        image,
        price,
        stock,
        onStock,
        onSale,
        description,
        category,
    } = props
    return(
        <div>
            <header>
                {name, category, id}
            </header>
            <section>
                <img src={image} alt={`imagen de ${name}`} />
                <div>
                    {`${price} $`}
                </div>
                <div>
                    {`Stock = ${stock}`}
                </div>
            </section>
            <footer>
                <div>
                    {onStock? <p>"on Stock"</p> : <p>"out Stock"</p>}
                    <br/>
                    {onSale? <p>"on Sale"</p> : <p>"out Sale"</p>}
                </div>
                <p>{description}</p>
            </footer>
        </div>
    )
}