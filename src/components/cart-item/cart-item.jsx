
const CartItem = ({cartItem}) => {
    const {price, name, quantity, imageUrl} = cartItem;

    return (
        <div className="cart-item">
            <img src={imageUrl} />
            <div className="item-details">
            <span>{name}</span>
            <span>{quantity}x${price}</span>

            </div>
        </div>
    )
}

export default CartItem;