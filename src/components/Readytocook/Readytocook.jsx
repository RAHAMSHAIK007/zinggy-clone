import './Readytocook.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Readytocook=({RTCFshxstypes})=>{
    
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
      }
    return(
        <>
            <div  className='RTCFxt-background-div-container'>
                     <div>
                      <h2 style={{marginleft:"20px"}}>Fish Category</h2>
                    </div>
                    <div className='ff-slider-container'>
                        <Slider className='ff-banner-slider' {...sliderSettings}>
                        
                            <div >
                            <img className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/c5bb850c-c67e-bffa-dc31-ff351c2d4b14/original/2_(16).jpeg" alt="Slide 1" />
                            </div>
                            <div>
                            <img className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/825a7a15-73ca-5539-90a8-e8c4ed2d8b29/original/4_(10).jpeg" alt="Slide 2" />
                            </div>
                            <div>
                            <img  className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/1a59b4ba-3412-cfdc-bbd9-7d582544b445/original/3_(11).jpeg" alt="Slide 3" />
                            </div>
                            <div>
                            <img  className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/69aa625c-5e2c-b4d8-3cea-184ea25f8e59/original/1_(17).jpeg" alt="Slide 4" />
                            </div>
                        
                        
                        </Slider>
                    </div>
                    <div className='RTCFxt-body-container'>
                            {RTCFshxstypes?.map((event)=>(
                           
                                <div className='RTCFxt-div-main-container'>
                                
                                    <div className='RTCFxt-subdiv-container'>
                                    <img src={event.image}/>
                                    </div>
                                       <span>{event.name}</span>     
                                    </div>
                          
                             ))}
                    </div>
                </div>
        </>
    )
}
export default Readytocook;