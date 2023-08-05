import "./Rs.css"
import {BsFillLightningChargeFill } from 'react-icons/bs'


const Below199=({Rs199orLower})=>{
    return(
        <>
        
            
            <div className="Bmain-container">
                <h3>Rs 199 or lower!</h3>
                <p>Order Now to get below 199</p>
            </div>
            <div class="mainRow-container">
            {Rs199orLower?.map((each)=>(
                <div className="below-container">
                <img className="below-imgcontainer" src={each.image}/>
                <h3>{each.name}</h3>
                <span>{each.name}</span>
                <div className="below-span">
                    <span>{each.offerPrice}</span>
                    <span>{each.originalPrice}</span>
                </div>
                <div>
                <BsFillLightningChargeFill />
                    <span>{each.deliverTime}</span>
                </div>
            </div>
            ))}
            
        </div>
        </>
    )
}
export default Below199;