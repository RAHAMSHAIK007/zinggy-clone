import { useState } from 'react';
import './fish.css';


const Fish=({fishes})=>{

    const [count, setCount] = useState(1)

    const minuseValue = () => {
        if(count <= 0.5){
            setCount(0.5)
        }else{
            setCount(count - 0.5)
        }
    }

    const pluseValue = () => {
        setCount(count + 0.5)
    }

    console.log(count)

    return(
        <>
        <h3>Fish Raw Meat</h3>
        
        <div className='fishtotaldiv'>
            <div className='Fish-sideContainer'>
            <div>
                <img className='fishbig-img' src='https://static.freshtohome.com/media/catalog/product/cache/1/image/400x267/18ae109e34f485bd0b0c075abec96b2e/b/i/big_eye_snapper.jpg'/>
            </div>
            <div>
                <h3>WHOLE</h3>
                <div className='fish-container'>
                    <span style={{marginRight:"10px"}}><s>₹249.00</s></span>
                    <span style={{marginRight:"10px"}}>₹219.00</span>
                    <span>/500g</span>
                </div>
                <div className='Fish-spanContainer'>
                    <span>A tasty snapper which looks very beautiful, so much so that it is said that a leading female movie actor was named after this fish (wait...or was it the other way around?). In any case, tastes great.</span>
                    <span>Storage Instructions:</span>
                    <span> Store under refrigeration at 4°C or below, in hygienic conditions</span>
                    <span style={{color:"blue"}}>Marketed By:</span>
                    <span>Call Us : +91 6300599999 Email Us: support@zinggy.in Registered Address: Floor no.4, h no 7-1-621/259, sahithi arcade, Sanjeeva reddy nagar, beside sr nagar Traffic police station, hyderabad, hyderabad, Telangana, 500038.</span>
                </div>
            </div>
        </div>
        <div className='fishfullcontainer'>
        <h3>Big Eye Snapper (300g to 600g)</h3>
        {fishes?.map((event)=>(
        <div className='fishside-container'>
            
            <div className='Fish-maincontainer'>  
                <div>
                    <img className="fishimg-container"src={event.image}/>
                </div>
                <div className='fishmenu-container'>
                    <h5 style={{width:"150px"}}>{event.name}</h5>
                    <div className='fishweight-container'>
                        <div className='plus-minue-div'>
                            <button className='fishbuttonclass' onClick={minuseValue}>-</button>
                            <p style={{
                                width:"30px",
                                textAlign:"center"
                            }} className='fishbuttonclassspan'>{count}</p>
                            <button className='fishbuttonclass'onClick={pluseValue}>+</button>
                        </div>
                        <br />
                        {/* <span>300gms</span> */}
                        <button style={{ marginLeft:"15px" ,color:"white", backgroundColor:"green",marginTop:"15px"
                        }}>ADD+</button>
                    </div>
                    <span style={{marginTop:"10px",fontSize:"12px"}}> FinalPrice: {count * 25}/Kg</span>
                    <div className='fweightcontainer'>
                        <span>GrossWeight:{event.grosswt}</span>
                        <span style={{marginLeft:"25px"}}>Net Weight:{event.Netwt}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
        ))}
        </div>
        </div>
        
        </>
        
    )
}

export default Fish;