

import'./index.css';
import {BsFillLightningChargeFill } from 'react-icons/bs'

const Top=({TopRated})=>{

    return(
        <>
        <div className='heading-container'> 
            <h3>Top Rated</h3>
            <p>Hurry Up! get the delicious food.. Order Now</p>
        </div>
        <div className='Main-container'>
        
        {TopRated?.map((i)=>(
            <div className='top-container'>
            <img className='top-imageContainer' src={i.image}/>
            <h3>{i.name}</h3>
            <span>{i.weight}</span>
            <div className='span-container'>
                <span>{i.offerPrice}</span>
                <span>{i.originalPrice}</span>
            </div>
            <div className='Span-Div'>
            <BsFillLightningChargeFill />
            <span>{i.deliverTime}</span>
            </div>
         </div>
        ))}
        </div>
        
            </>
    )
}
export default Top;