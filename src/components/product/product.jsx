import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import './product.scss'

const Product = ({product}) => {
    const {addItemToCart} = useContext(CartContext);
    const {name, imageUrl, price} = product;

    const addItemToCartDrop = () => addItemToCart(product);

    return (
      <div className="product-container">
        <img src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>

            </div>
        <button className='button' onClick={addItemToCartDrop}>Add to Card</button>
      </div>
    );
  }
  
  export default Product;