import './ShrimpCat.css'
import {BsFillLightningChargeFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const ShrimpCat=({shrimpdata})=>{
    return(
        <>
            <div className='shrimp-main-container'>
                {shrimpdata?.map((event)=>(
                <div className='Shrimp-main-div-container'>
                    <Link to={`/prawn/${event.id}`}>
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
                                        <div className='shrimp-butn-container'>
                                            <button style={{border:"none",background:"transparent",color:"white"}}>ADD</button>
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
export default ShrimpCat;