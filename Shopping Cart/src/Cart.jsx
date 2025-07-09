
import { useState, useEffect,useContext } from "react";
import { CartContext } from "./CartContext";
import './Cart.css';

const Cart=(props)=>{

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        const initialQuantities = cartItems.map(() => 1);
        setQuantity(initialQuantities);
    }, [cartItems]);

    const increment = (e) => {
        const index = e.target.id;
        setQuantity(prevQuantity => {
            const newQuantity = [...prevQuantity];
            newQuantity[index] = (newQuantity[index] || 1) + 1;
            return newQuantity;
        });
        
    };
    const decrement = (e) => {
        const index = e.target.id;
        setQuantity(prevQuantity => {
            const newQuantity = [...prevQuantity];
            newQuantity[index] = Math.max((newQuantity[index] || 1) - 1, 1);
            return newQuantity;
        });
    };
return (
    <>
    
    <div className="cart">
        <div className="cart-header">
            <h1>Shopping Cart: </h1>
            {cartItems.length > 0 ? <h2>Items in Cart: {cartItems.length}</h2> : <h2>Your Cart is Empty</h2>}
        </div>
        <div className="cart-items">
           {cartItems.map((item, index) => (
      <div key={item.id} className="cart-item" >
        <img src={item.image} className="item-img" alt="cart item image" />
        <div className="item-details">
        <h4 className="item-title">{item.title}</h4>
        <p className="item-price">${item.price}</p>
        <button className="item-remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
        <div className="item-quantity">

             <h2>Quantity: </h2>
      <div className="quantity-input">
        <button className="decrease-button" id={index} onClick={decrement}>-</button>
        <span className="quantity-value">{quantity[index]}</span>
        <button className="increase-button" id={index} onClick={increment}>+</button>
      </div>
        </div>
        
        
    </div>
    ))}
        </div>
        <div className="cart-total-container">
  <div className="cart-total-box">
    <p className="total-label">
      Total Price: 
      <span className="total-amount">
        ${cartItems.reduce((total, item, index) => total + item.price * quantity[index], 0).toFixed(2)}
      </span>
    </p>
    <button className="checkout-button">Checkout</button>
  </div>
</div>

    </div>
    </>
);


    
}
export default Cart;