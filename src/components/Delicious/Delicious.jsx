import './Delicious.css';

import {BsFillLightningChargeFill } from 'react-icons/bs'

const BonelessFood = ({DeliciousBonelessCuts}) => {
    return(
        <>
        <h3>Delicious boneless cuts</h3>
        <p>Get Delicious boneless cuts Order Now</p>
        <div class="BMain-div">
           
            <div className="Bmain-container">
            
            </div>
            {DeliciousBonelessCuts.map((each)=>(
                 <div className='les-container'>
                 <img  className=" boneless-img"src={each.image}/>
                 <h3>{each.name}</h3>
                 <span>{each.weight}</span>
                 <div className='bspan-classes'>
                     <span>{each.offerPrice}</span>
                     <span>{each.originalPrice}</span>
                 </div>
                 <div className='Span-Div'>
                 <BsFillLightningChargeFill />
                 <span >{each.deliverTime}</span>
                 </div>
             </div>

            ))}
         
        </div>
          
        </>
    )
}
export default BonelessFood;