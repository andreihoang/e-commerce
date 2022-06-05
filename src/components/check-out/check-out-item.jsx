
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';


import './check-out-item.scss'

const CheckOutItem = ({cartItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;
    const {addItemToCart, removeItemFromCart, clearItemFromCard} = useContext(CartContext);
    
    return (
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="quantity">{price*quantity}</span>
            <div className="remove-button" onClick={() => clearItemFromCard(cartItem)}>✕</div>
        </div>
    );
  }
  
export default CheckOutItem;