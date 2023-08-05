import './index.css';
import {FaWeightHanging} from 'react-icons/fa'
import {MdFoodBank} from 'react-icons/md'
import {ImSpoonKnife} from 'react-icons/im'
import Zinggyadd from '../Categories/Zinggyadd/Zinggyadd';
import Aboutzinggy from '../About/About';
import {Link} from 'react-router-dom'

const Freshfood=()=>{
    return(
        <>
            <div className='ChickenCurry-container'>
               
                    <>
                
                  <div>
                    <img className='chicken-container' src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c6611e27-fff4-7144-5f5d-af1666b60d9a/original/PDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg" />
                  </div>
                <div className='content-container'>
                    <h3>Chicken Curry Cut - Small Pieces (Large Pack)</h3>
                    <span>Bone-In | Small Cuts | Curry Cut</span>
                    <div>
                        <div className='weight-container'>
                            <div className='cwecontainer'>
                                <FaWeightHanging/>
                                <span>1000g</span>
                            </div>
                            <div className='cwecontainer'>
                                <ImSpoonKnife/>
                                <span>24-36 Pieces</span>
                            </div>
                            <div className='cwecontainer'>
                                <MdFoodBank/>
                                <span>Serves 6</span>
                            </div>
                        </div>
                        <div className='content'>
                        <span>Licious Chicken Curry Cut is a premium cut that includes the leg, breast & wings.This smaller, tender cut has equal-sized pieces for uniform cooking and the juiciest bites.Our meaty, juicy Chicken Curry Cut is perfect for a large meal.</span>
                        <span>Nutritional Information: (Approx Values per 100 g)</span>
                           <span> Total Energy: 127 Kcal</span>
                            <span>Carbohydrate: 0 g</span>
                            <span>Fat: 4.5 g</span>
                            <span>Protein: 21.6 g</span>

                            <span>Licious meats are chilled between 0-4°C to maintain freshness. Do not freeze.</span>

                        </div> 
                        <hr />
                        <div className='price-container'>
                            <span>₹305.00</span>
                                <span ><s>₹345.00</s></span>
                               <span style={{color:"green"}}> 11% off
                            </span>
                            <button className='btn'>ADD +</button>
                        
                        </div>
                    </div>
                </div>
                
                </>

                
                
            </div>
            
        </>
    )
}
export default Freshfood;