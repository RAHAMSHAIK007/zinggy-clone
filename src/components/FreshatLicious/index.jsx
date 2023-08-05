import { Link } from "react-router-dom";
import "./index.css"



const FreshatLicious=({FreshAtLicious})=>
    {
        return(
<>
<h2>Fresh at Zinggy</h2>
<p>Handpicked assortment just for you</p>
            <div className="Fresh-container">
            {FreshAtLicious?.map((each)=>(
               <Link to="/fresh-zinggy" >
                <div  >
                    <img className="fresh-imgcontainer" src={each.image}/>
                </div>
                </Link>
          
            ))}
              </div>
              </>
        )
    }
export default FreshatLicious;