import { useParams } from 'react-router-dom';
import './TOF.css';
import {BsFillLightningChargeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import CartContext from '../../context/context';
import CartContainer from '../../context/context';

const TypesOfFishes=({catagoryitems})=>{
    let {id} = useParams();
    console.log(id)

    return (
    <CartContainer.Consumer>
    

    {value  => {

        const {addcartItem} = value

      
    
        const filterDate = catagoryitems.filter((each) => each.id === id)
    
        console.log(filterDate[0]?.img) 
    
        const addItemValue = (event) => {
            // addCartItem()
            console.log(event)
            console.log("djklsahnibdun")
            addcartItem(event)
        }
    
        return(
            <>
                <div className='shrimp-main-container'>
                    {filterDate[0]?.img.map((event)=>(
                    <div className='Shrimp-main-div-container'>
                        <Link to={`/tof/${event.id}`}>
                        <div className='Shrimp-main-img-container'>
                            <img className='Shrimp-img-container' src={event.img}/>
                        </div>
                        </Link>
                        <div className='shrimp-content-container'>
                            <h3>{event.name}</h3>
                            <span>{event.des}</span>
                                <div className='Shrimp-weighr-container'>
                                <span>{event.weight}| {event.pieces} | {event.serve}Serves</span>
                                <div className='Shrimp-price-img-container'>
                                    <span>{event.price}</span>
                                    <span style={{fontSize:"12px",marginLeft:"5px"}}><s>{event.cost}</s></span>
                                    <span style={{color:"green",marginLeft:"20px"}}>{event.offer} </span>
                                </div>
                                </div>
                                    < div className='Shrimp-del-div-cont'>
                                        <span ><BsFillLightningChargeFill />{event.deliverytime}</span>
                                            <div className='shrimp-butn-container' 
                                            onClick={() => addItemValue(event)}>


                                                <button style={{border:"none",background:"transparent",color:"white"}}  >ADD</button>
                                                <span style={{fontSize:"20px",marginBottom:"10px",marginRight:"5px"}}>+</span>
                                            </div>
                                    </div>
                        </div>
                    </div>
                    ))}
                </div>
            </>
        )
    }
 
}
    
    </CartContainer.Consumer>
    )

}

export default TypesOfFishes