import "./FishSubCat.css"

import {BsFillLightningChargeFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

const FishSubCat=({fishSellers})=>{
  



    return(
        <>
         <div >
           <h2>fishsellers</h2>
           <p>Most popular products near you!</p>
         </div>
         <div  style={{
            display:"flex",
            marginRight :"10px",
            flexWrap : "wrap"
         }}>
         {fishSellers.map((each) =>(

           
 


        // <Link to="/bestseller" style={{
        //   textDecoration:"none"
        // }}>
         <div className="FishSubCat-item">
             <div className="FishSubCat-Container">
              <img className="FishSubCat-imgContainer"src={each.img} />
               <h3>{each.name}</h3>
               <span>{each.weight}</span>
            <div>
               <span>{each.offerPrice}</span>
                <span>{each.originalPrice}</span>   
                </div>   
              <div class="FishSubCat-Delivery">
               <BsFillLightningChargeFill />
                 <span> Today in 90 min</span>
              </div>
          </div>
          </div>
        //   </Link>

      
         ))}
          </div>

        </>
    )
}
export default FishSubCat;