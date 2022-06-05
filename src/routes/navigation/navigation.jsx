import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { signOutUser } from '../../firebase/fiirebase.utils';

import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from '../../components/cart-icon/cart-icon';
import './navigation.scss';
import CartDrop from '../../components/cart-dropdown/cart-drop';

import { CartContext } from '../../context/cartContext';
import { useSelector } from 'react-redux';

const Navigation = () => {

    const currentUser = useSelector((state) => state.user.currentUser);
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>

            <div className='navigation'>
                <Link to='/' className='logo'>
                    <Logo />
                </Link>
                <div className='nav-links'>
                    <Link to='/shop' className='nav-link'>SHOP</Link>

                    {currentUser ?
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> 
                        : (<Link to='/auth' className='nav-link'>SIGN IN</Link>) 
                    }
                
                    <CartIcon />
                </div>
                {isCartOpen && <CartDrop/>}
                
            </div>
            
            <Outlet/>
        </Fragment>
        

    )

}


export default Navigation;