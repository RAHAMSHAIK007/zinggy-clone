import './BFS.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFillLightningChargeFill } from 'react-icons/bs'
import Aboutzinggy from '../About/About';
import Zinggyadd from '../Categories/Zinggyadd/Zinggyadd';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

const BFS=({ bfss, About})=>{
    return(
        <>
        <h3>Best Special Offer</h3>
            <div className='main-container'>
                    {bfss?.map((i)=>(
                <div className='BFSContainer'>
                    {/* <div className='img-container'>
                        <img className='imagediv' src="https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F9b02751f-73b9-4f17-aca5-82693f62fe64%2Foriginal%2F-_Class_chicken_Nuremberg.jpg&w=384&q=75" />
                    </div> */}

                        <div className="BFS-container">
                            <Slider className='' {...settings}>
                            {i.images?.map((image, index) => (
                                <div key={index}>
                                <img className="BFS-imgcontainer" src={image} alt={`Image ${index + 1}`} />
                                </div>
                            ))}
                            </Slider>
                    
                         </div>
                            <div className='Sub-container'>
                                <h3>{i.name}</h3>
                                <span>{i.varity}</span>
                                <span>{i.weight}</span>
                            </div>
                                <div className='price-boxes'>
                                    <span>{i.offerPrice}</span>
                                    <span>{i.originalPrice}</span>
                                </div>
                                    <div className='price-boxses'>
                                        <BsFillLightningChargeFill />
                                        <span>{i.deliverytime}</span>
                                        <button className='BFS-btn'>ADD +</button>
                            
                                    </div>
                </div>
                ))}
                            
            </div>
            {/* <Aboutzinggy About={About} /> */}
            {/* <Zinggyadd/> */}
            
        </>
    )
}
export default BFS;