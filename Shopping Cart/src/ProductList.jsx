import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import './ProductList.css';

import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(productList => setProducts(productList))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage message="Failed to load products. Please try again later." buttonText="Retry" onclick={() => window.location.reload()} />;
  }

  const handleClick = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!cartItems.some(item => item.id === productId)) {
      addToCart(product);
    } else {
      removeFromCart(productId);
    }
  };

  console.log(cartItems);

  return (
    <>
      
      <div className="product-list">
        <h1>Our Products:</h1>
      </div>
      <div className="container">
        {products.map((product) => (
          <div id={product.id} className="product" key={product.id}>
            <img src={product.image} className="product-img" alt="product image" />
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">${product.price}</p>
            <div className="spacer"></div>
            <button
              className="product-button"
              onClick={() => handleClick(product.id)}
            >
              {cartItems.some(item => item.id === product.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default ProductList;
