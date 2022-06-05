import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import './cart-drop.scss'

const CartDrop = () => {

    const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate();
    
    const goToCheckOut = () => {
        navigate('/checkout');
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className="cart-drop-container">
            <div className="cart-items">
          

            { cartItems.length ?
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                )) :  <span>Empty Cart</span>
            }

            </div>
            <button onClick={goToCheckOut}>Check Out</button>

        </div>
    )
}

export default CartDrop;