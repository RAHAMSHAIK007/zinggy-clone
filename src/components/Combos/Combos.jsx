import { Link } from "react-router-dom";
import "./Combos.css"
import {BsFillLightningChargeFill } from 'react-icons/bs'
import Zinggyadd from "../Categories/Zinggyadd/Zinggyadd";
import Aboutzinggy from "../About/About";
const Combos=({CombosForYou, About})=>{
    return(
        <>
            <h2 className="combo-heading"style={{
          textDecoration:"none"
        }}>Combos for you</h2>
            <p>Savour the savings! </p>

            <div className="combo-maincontainer">
            {CombosForYou.map((each)=>(
           <Link to='/recipe'>
             <div className="combo-box" style={{textDecoration:"none"}} >
                <img  className="Combo-imgcontainer"src={each.img}/>
                <h4 className="combo-weight">{each.name}</h4>
                <span>{each.weight}</span>
                    <div className="prices-container">
                        <span>{each.offerPrice}</span>
                        <span>{each.originalPrice}</span>
                    </div>
                        <div>
                            <BsFillLightningChargeFill />
                            <span>{each.deliverTime}</span>
                        </div>
                </div>
            </Link>  
                     
            ))}
            </div>
           
        </>
        
    )
}
export default Combos;