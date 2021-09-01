import React from 'react'
import { useContext, useEffect, useState} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
    const [stateBumb, setBump] = useState(false);
    const cartCtx = useContext(CartContext)
    // console.log(cartCtx)

    const numberOfCartItems = cartCtx.items.reduce((curNumb, item) => curNumb + item.amount, 0);
    
    const btnClasses = `${classes.button} ${stateBumb ? classes.bump : ''}`;
    useEffect(() =>{
        if (cartCtx.items.length === 0) {
            return;
          }
          setBump(true);
      
          const timer = setTimeout(() => {
            setBump(false);
          }, 200);
      
          return () => {
            clearTimeout(timer);
          };
    }, [cartCtx.items])
    
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes['icon']}> 
                <CartIcon />
            </span>
            <span>Your Cart </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;
