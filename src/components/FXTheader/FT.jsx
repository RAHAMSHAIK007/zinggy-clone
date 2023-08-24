import './FT.css';
import {FaWeightHanging} from 'react-icons/fa'
import {MdFoodBank} from 'react-icons/md'
import {ImSpoonKnife} from 'react-icons/im'
import Zinggyadd from '../Categories/Zinggyadd/Zinggyadd';
import Aboutzinggy from '../About/About';

const FishCurry=({About})=>{
    return(
        <>
            <div className='fishCurry-container'>
                {/* {chickencurry.map((each) => ( */}
                    <>

                  <div>
                    <img className='fish-container' src="https://cdn-dlopd.nitrocdn.com/WvjGxjzkqpCRBAFiAQBxkifGOZsxmrbF/assets/static/optimized/rev-3cf5128/wp-content/uploads/2021/09/Masala-Fish-Curry-Recipe-min-scaled.jpg" />
                  </div>
                <div className='content-container'>
                    <h3>Fish Curry Cut - Small Pieces (Large Pack)</h3>
                    <span>Bone-In | Small Cuts | Curry Cut</span>
                    <div>
                        <div className='fishweight-container'>
                            <div className='fishcwecontainer'>
                                <FaWeightHanging/>
                                <span>1000g</span>
                            </div>
                            <div className='fishcwecontainer'>
                                <ImSpoonKnife/>
                                <span>24-36 Pieces</span>
                            </div>
                            <div className='fishcwecontainer'>
                                <MdFoodBank/>
                                <span>Serves 6</span>
                            </div>
                        </div>
                        <div className='fishcontent'>
                        <span>Zinggy Fish Curry Cut is a premium cut .This smaller, tender cut has equal-sized pieces for uniform cooking and the juiciest bites.Our meaty, juicy Fish Curry Cut is perfect for a large meal.</span>
                        <span>Nutritional Information: (Approx Values per 100 g)</span>
                           <span> Total Energy: 127 Kcal</span>
                            <span>Carbohydrate: 0 g</span>
                            <span>Fat: 4.5 g</span>
                            <span>Protein: 21.6 g</span>

                            <span>Licious meats are chilled between 0-4°C to maintain freshness. Do not freeze.</span>

                        </div> 
                        <hr />
                        <div className='fishprice-container'>
                            <span>₹305.00</span>
                                <span ><s>₹345.00</s></span>
                               <span style={{color:"green"}}> 11% off
                            </span>
                            <button className='fishbtn'>ADD +</button>
                        
                        </div>
                    </div>
                </div>
                </>
                
            </div>
            <Aboutzinggy About={About}/>
            <Zinggyadd/>
        </>
    )
}
export default FishCurry;