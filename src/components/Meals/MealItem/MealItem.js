import React, {useContext} from "react";
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

import MealItemForm from "./MealItemForm";


function MealItem(props) {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    
    function addToCartHandler(amount){

        cartCtx.addItem({
            id: Math.random() * 1000,
            name: props.name,
            price: props.price,
            amount: amount,
        })
        
    }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}
export default MealItem;
