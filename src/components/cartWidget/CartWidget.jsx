import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import "./cartWidget.css";

export const CartWidget = () => {
  const { cart } = useContext(Shop);

  return (

      <div className="card-wigget-container">
        <img className="card-widget" src="/assets/img/carrito-de-compras.svg" alt="carrito"/>
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
