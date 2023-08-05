
import {CiLocationOn} from 'react-icons/ci'

import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import {BiCategory} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

import './index.css'

const Header  = () => {
    return (
        <header className='header'>
            <img className='header-logo' src = "./images/WhatsApp_Image_2023-08-01_at_11.58.08_AM-removebg-preview.png" />
            <div>
                <div>
                    <CiLocationOn />
                    <span>Hyderabad</span>
                </div>
                <span>
                    8-8/65 s.r nagar
                </span>
            </div>
            <div className='header-input-div'>
                <input type="search" placeholder='search for any delicious product' />
                <AiOutlineSearch />
            </div>
            <div className='Category-bar'>
               <BiCategory/>
               <span>Category</span>
            </div>
            <div className='Category-bar'>
                
                <CgProfile/>
                <span>login</span>
            </div>
            <div className='header-card'>
                <AiOutlineShoppingCart />
                <div>
                    <span>1 item</span>
                    <span>190.01</span>
                </div>
            </div>
        </header>
    )
}

export default Header;