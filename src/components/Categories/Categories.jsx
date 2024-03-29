
import {Link} from 'react-router-dom'
import './index.css'


const Categories = ({TodayDetails,Fish}) => {
    return (
        <> 
        <div className='cate-heading'>
         <h2>Shop by categories</h2>
         <p>Freshest meats and much more!</p>
         </div>
        
        <div className='categories'>
       
           {TodayDetails.map((each) => (
              
             <div className='categories-card'>
                    <Link to={`/differentfish/${each.id}`}>
                        <img src ={each.image} />
                  
                  </Link> 
                      <span className="categoryspan-container"style={{ textDecoration:"none",color:"black"}}>{each.name}</span>
              
             </div>
            
           ))}
        </div>
        
        
        </>
    )
}

export default Categories