import './header.css'
import React from 'react'
import {Link} from 'react-router-dom'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import { useStateValue } from '../stateProvider';
import {auth} from '../firebase'

const Header = ()=>{
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut()
        }
    }
    
    return (
        <div className="header">
        <Link to='/'>
            <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"
            />
        </Link>

        <div className="header__search">
            <input className='header__searchInput' type="text" placeholder="search"/>
            <SearchSharpIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to='/login'>
                <div className="header__option" onClick={handleAuthentication}>
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
                <span className="header__optionLineTwo">orders </span>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">Your  </span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

           <Link to='/checkout'>
            <div className='header__optionBasket'>
                    <ShoppingBasketSharpIcon />
                    <span className='header__optionLineTwo 
                    header__basketCount'>{basket.length}</span>
            </div>
           </Link>
        </div>
    </div>
    )
}

export default Header;