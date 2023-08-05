import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaWeightHanging} from 'react-icons/fa'
import {ImSpoonKnife} from 'react-icons/im'
import {MdFoodBank} from 'react-icons/md'
import  './Mb.css'
import Aboutzinggy from "../About/About";
import Zinggyadd from "../Categories/Zinggyadd/Zinggyadd";


const MbFresh = ({About}) => {
  const images= [
    "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c6611e27-fff4-7144-5f5d-af1666b60d9a/original/PDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg",
    "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2cf5afce-739b-2461-e430-2baf648288ee/original/PDP_79_Butter_Chicken_Combo(Shandaar_Butter_Chicken_+_Chicken_Cubes_-_Combo).jpg",
    "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/T2Z7FGHEXYI6XCGFJ7LDQLCHZM.jpg",  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className="slider-img">
      <h2>Chicken Recipie</h2>
      
      <div className="sidebyside" >
        <div className="courusal-side">
            <Slider className='banner-slider' {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img className="img-src"src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
       
      </div>
  
        {/* <div>
                    <img className='chicken-container' src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c6611e27-fff4-7144-5f5d-af1666b60d9a/original/PDP_9._Chicken_Curry_Cut_Small_-_Large_Pack_HYD_(2).jpg" />
                  </div> */}
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
      
      </div>
         <Aboutzinggy About={About}/>
            <Zinggyadd />
    </div>
  );
};

export default MbFresh;
