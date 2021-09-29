import Card from "../Card/Card"
import style from "./Cards.module.css"

export default function Cards ({state}) {
    if(state[0] !== {error: "Product not found"} && state[0]){
       return(<div className={style.container}>
       <div className={style.parent}>{ state.map((e, i) => {
           if(e.name){
            return (<div key={i}><Card 
                id={e.id}
                image={e.image}
                name={e.name}
                category={e.category}
                price={e.price}
                index={i} />
                </div>
         )
           } else{
               return <div key={i}><p>error</p></div>;
           }
       
    })}</div></div>) 
    } else {
        //si se puede en el futuro remplazar por un gif de carga
        return (
            <div>
                <p>No Products Found.</p>
            </div>
        )
    }
}