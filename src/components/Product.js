import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

  const[{basket}, dispatch]= useStateValue();

  

  const addToBasket =() =>{

    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      },
    });


  }



  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>

        <div className="product__price">
          <span>$</span>
          <strong>{price}</strong>
        </div>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="The lean StartUp book" />

      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  );
}

export default Product;
