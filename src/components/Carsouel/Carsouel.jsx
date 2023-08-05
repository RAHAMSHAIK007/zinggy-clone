
import './index.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <div className='slider-container'>
    <Slider className='banner-slider' {...sliderSettings}>
      
        <div >
          <img className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/518ec3ac-96d2-936f-1ef0-a6e5a1b18dce/original/WEB_NEW_50.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/518ec3ac-96d2-936f-1ef0-a6e5a1b18dce/original/WEB_NEW_50.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img  className='corsouelsliderdd-img'src="https://dao54xqhg9jfa.cloudfront.net/oms/518ec3ac-96d2-936f-1ef0-a6e5a1b18dce/original/WEB_NEW_50.jpeg" alt="Slide 3" />
        </div>
     
     
    </Slider>
    </div>
  );
};

export default BannerSlider;
