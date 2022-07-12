import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopContext";
import "./cartWidget.css";

export const CartWidget = () => {
  const { cart } = useContext(Shop);
  
  const navigate = useNavigate();
  
  const handleToCart = () => {
    navigate(`/cart`);
  };

  return (

      <div className="card-wigget-container">
        <img onClick={handleToCart} className="card-widget" src="/assets/img/carrito-de-compras.svg" alt="carrito"/>
        {
            cart.length > 0 
            ? (
                <div className="card-widget-counter-container">
                    <div className="card-widget-counter">{cart.length}</div>
                </div>
            ) : null
        }
      </div>
  );
};
