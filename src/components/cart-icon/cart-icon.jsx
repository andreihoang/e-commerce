import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import {ReactComponent as ShoppingLogo} from '../../assets/shoppingLogo.svg'
import './cart-icon.scss'

const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleCartDrop = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
      <div className='cart-icon-container' onClick={toggleCartDrop}>
            <ShoppingLogo className='shopping-bag'/>
            <span className='item-count'>{cartCount}</span>
      </div>
       
    )
}

export default CartIcon;