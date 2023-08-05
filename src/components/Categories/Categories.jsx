
import {Link} from 'react-router-dom'
import './index.css'


const Categories = ({TodayDetails,Fish}) => {
    return (
        <> 
        <div className='cate-heading'>
         <h2>Shop by categories</h2>
         <p>Freshest meats and much more!</p>
         </div>
         <Link to='/fishes'>
        <div className='categories'>
       
           {TodayDetails.map((each) => (
             <div className='categories-card'>
             <img src ={each.image} />

             <span style={{textDecoration:"none",color:"black"}}>{each.name}</span>
             </div>
           ))}
        </div>
        </Link>
        
        </>
    )
}

export default Categories