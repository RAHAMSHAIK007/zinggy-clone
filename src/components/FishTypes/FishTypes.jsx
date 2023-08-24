import './FishType.css';
import {BsFillLightningChargeFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Zinggyadd from '../Categories/Zinggyadd/Zinggyadd';

const FishType= ({Fishtypes})=>{
    return(
        <>
        <h3>Fishes and Sea Food  </h3>
            {/* <div className='FT-Main-Conatiner'>  */}
            <div className='Ft-mainDiv-container'>
            
            {Fishtypes?.map((i)=>(
                  
                  <div className='FT-Main-Conatiner'> 

                    <Link to='/ftypes'>
                    <div className='FT-img-Container'>
                        <img className='Ft-img-div-container' src={i.img}/>
                    </div>
                    </Link>
                    <div style={{textDecoration:"none"}} className='FT-content-container'>
                        <h3>{i.name}</h3>
                        <span> Vaalla Meen</span>
                        <div>
                            <span>{i.variants}</span>
                            <span>Gross Weight:1000gms</span>
                            <span style={{marginLeft:"8px"}}>Net Weight:650gms</span>
                        </div>
                        <div>
                            <span>{i.price} </span>
                            <s style={{fontSize:"12px"}}>{i.strike}</s>
                            <span style={{color:"green",fontSize:"15px",marginLeft:"12px"}}>{i.offer}</span>
                        </div>
                        <div className='FT-logo-bth-container'>
                            <div >
                            < BsFillLightningChargeFill />
                                <span style={{color:"black"}}>{i.deliverTime}</span>
                            </div>
                            <button className='FT-Button'>ADD +</button>
                        </div>
                        
                    </div>
                    
                </div>
                 
                ))}
                
            </div>
        </>
        
    )
}
<Zinggyadd/>
export default FishType;