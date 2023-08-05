import "./index.css"

import {BsFillLightningChargeFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

const Bestseller=({Bestsellers})=>{
  



    return(
        <>
         <div >
           <h2>Bestsellers</h2>
           <p>Most popular products near you!</p>
         </div>
         <div  style={{
            display:"flex",
            marginRight :"10px",
            flexWrap : "wrap"
         }}>
         {Bestsellers.map((each) =>(

           
 


        <Link to="/bestseller" style={{
          textDecoration:"none"
        }}>
         <div className="Bestseller-item">
             <div className="BS-Container">
              <img className="Bestseller-imgContainer"src={each.image} />
               <h3>{each.name}</h3>
               <span>{each.weight}</span>
            <div>
               <span>{each.offerPrice}</span>
                <span>{each.originalPrice}</span>   
                </div>   
              <div class="Bs-Delivery">
               <BsFillLightningChargeFill />
                 <span> Today in 90 min</span>
              </div>
          </div>
          </div>
          </Link>

      
         ))}
          </div>

        </>
    )
}
export default Bestseller;