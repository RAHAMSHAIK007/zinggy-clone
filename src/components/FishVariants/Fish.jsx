import { useState } from 'react';
import './fish.css';
import {Link, useParams} from 'react-router-dom'
import CartContainer from '../../context/context';

const Fish=({FishVariantCatagoery})=>{
    
    let {id}=useParams();
    console.log(id);
    
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
    return(
    <CartContainer.Consumer>
        {value=>{

            const{addcartItem}=value

            const addItemValue=(event)=>{
                addcartItem(event)
                console.log(event)
            }
            
// remove from cart
            // const removecartItem = (event) => {
            //     const addcartItem = cartItems.filter(each => each.id !== each);
            //     setCartItems(addcartItem);
            // }


        const filterDate=FishVariantCatagoery.filter((each)=>each.id===id)
        console.log(filterDate[0]?.fish)

        console.log(filterDate[0]?.fish.innerArray)




    return(
        <>
        <h2>{filterDate[0]?.fish.head}</h2>
        <div className='fishtotaldiv'>
            <div className='Fish-sideContainer'>
            <div>
                <img className='fishbig-img' src={filterDate[0]?.fish.img}/>
            </div>
            <div>
                <h3>Whole</h3>
                <div className='ffish-container'>
                    <span style={{marginRight:"10px"}}><s>{filterDate[0]?.fish.costprice}</s></span>
                    <span style={{marginRight:"10px"}}>{filterDate[0]?.fish.sellingprice}</span>
                    <span>{filterDate[0]?.fish.weight}</span>
                </div>
                <div className='Fish-spanContainer'>
                    <span>{filterDate[0]?.fish.aboutfish}</span>
                    <span >Storage Instructions:</span>
                    <span> {filterDate[0]?.fish.storageprecautions}</span>
                    <span >Marketed By:</span>
                    <span>{filterDate[0]?.fish.marketedBy}</span>
                </div>
            </div>
        </div>
        <div className='fishfullcontainer'>
        <h3>{filterDate[0]?.fish.fishname}</h3>
        {filterDate[0]?.fish.innerArray.map((event)=>(
        <div className='fishside-container'>
            
            <div className='Fish-maincontainer'>  
                <div>
                    <img className="fishimg-container"src={event.img}/>
                </div>
                <div className='fishmenu-container'>
                    <h5 style={{width:"200px",height:"15px"}}>{event.name}</h5>
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
                        }} onClick={() => addItemValue(event)}>ADD+</button>
                    </div>
                    <span style={{marginTop:"10px",fontSize:"12px"}}> FinalPrice: {count * 25}/Kg</span>
                    <span>{event.price}</span>
                    <div className='fweightcontainer'>
                        <span>GrossWeight:{event.Grossweight}</span>
                        <span style={{marginLeft:"25px"}}>Net Weight:{event.netweight}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
        ))}
        </div>
        </div>
        
        </>
        
    )
}}
    </CartContainer.Consumer>
    )
}


export default Fish;