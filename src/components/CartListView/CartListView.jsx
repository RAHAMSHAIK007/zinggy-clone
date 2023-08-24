import CartContext from '../../context/context'
import './CartListView.css'

import {AiTwotoneDelete} from 'react-icons/ai'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removecartItem} = value

      const removeCartItem = (item) => {
          // console.log(item)
          removecartItem(item)
      }

      console.log(cartList)

      return (
        
        <>
        {cartList.length === 0 ? (
            <div className='empty-cart-list'>
              <img className='Cart-image-container' src='https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg'/>
            </div>
        ) : (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            // <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            <div className='cart-main'>
               <div style={{
                display:'flex',
                gap:"0.4rem",
                width:"70%"
               }}>
                <img  src ={eachCartItem.img} />
                 <div style={{
                  lineHeight:"10PX"
                 }}>
                        <h3>{eachCartItem.name}</h3>
                        <p>{eachCartItem.price}</p>
                        <p>{eachCartItem.weight}</p>
                        </div>
                </div>
                <div  className='delete-image-card' >
                   {/* <button >Remove</button> */}
                   <AiTwotoneDelete onClick={()=>removeCartItem(eachCartItem)} />
                {/* console.log("djwhvjhcvwbcb") */}
                </div>
            </div>
          ))}
        </ul>
        )}
        </>
      )
      
    }}

  </CartContext.Consumer>
)

export default CartListView