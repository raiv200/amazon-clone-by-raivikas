import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct" ;


function Checkout() {

  const [{basket,user},dispatch] =useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/associates/VXD168-evergreenAssociateAds-lifestyle-assoc-728x90"
          alt="Payment Page"
        />

        <div className="checkout__title">
        <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>
        </div>

        {basket.map(item => (
         
         <CheckoutProduct 
         id={item.id}
         title={item.title}
         image={item.image}
         price={item.price}
         rating={item.rating}
         />
         
         ))}

      </div>

      <div className="checkout__right">
      <Subtotal></Subtotal>
          
      </div>
    </div>
  );
}

export default Checkout;
