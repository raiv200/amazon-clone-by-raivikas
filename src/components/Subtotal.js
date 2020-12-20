import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {

    const history =useHistory();

    const[{basket,user},dispatch]= useStateValue();
    
    
    

  


    return (
        <div className="subtotal">

        <CurrencyFormat
         renderText={(value) => (

           <>
           <h3>Hello,{user?.email}</h3>
           <p>
           Subtotal({basket.length} items):
           <strong>{value}
           </strong>
           </p>

           <small className="subtotal__gift">
               <input type="checkbox"/>This order Contains a gift.
           </small>

           </>
          



         )}
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandSeperator={true}
         prefix={"$"}




        />

        <button onClick={e=> history.push("/payment")}>Proceed To Checkout</button>
            
        </div>
    )
}

export default Subtotal
