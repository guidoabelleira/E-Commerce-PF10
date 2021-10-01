import Card from "../Card/Card"
import style from "./Cards.module.css"
import PopularCard from "../PopularProducts/PopularCard"
import DiscountCard from "../DiscountCard/DiscountCard"
import LastedCard from "../LastedCard/LastedCard"
//se le debe pasar como parametros, el estado correspondiente y que tipo de card es, si es una card en productos solo se pasa el estado, si es una popular card o otra, se pasa el estado y la prop correspondiente con el valor true.
export default function Cards ({state,popularCard = false ,discountCard  = false, lastedCard  = false}) {
    if(state[0] !== {error: "Product not found"} && state[0]){
       return(<div className={style.container}>
           <div className={style.parent}>{ state.map((e, i) => {
               if(e.name && lastedCard){
               return (<div key={i}>
                   <LastedCard id={e.id} image={e.image} name={e.name} category={e.category} index={i} />
               </div>
               )
               }
               if(e.name && discountCard){
               return (<div key={i}>
                   <DiscountCard id={e.id} image={e.image} name={e.name} category={e.category} index={i} />
               </div>
               )
               }
               if(e.name && popularCard){
               return (<div key={i}>
                   <PopularCard id={e.id} image={e.image} name={e.name} category={e.category} price={e.price}
                       index={i} />
               </div>
               )
               }
               if(e.name){
               return (<div key={i}>
                   <Card id={e.id} image={e.image} name={e.name} category={e.category} price={e.price} index={i} />
               </div>
               )
               } else{
               return <div key={i}>
                   <p>error</p>
               </div>;
               }

               })}</div>
       </div>)
    } else {
        //si se puede en el futuro remplazar por un gif de carga
        return (
            <div>
                <p>No Products Found.</p>
            </div>
        )
    }
}