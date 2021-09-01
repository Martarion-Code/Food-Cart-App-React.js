import Header from "./components/Layout/Header";

import { useState} from "react";


import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";



function App() {

  const [cartIsShown, setCartIsShown] = useState(false)


  function showAndHideCart(){
    setCartIsShown((prev) => !prev);
  }



  return (
    <CartProvider>
    {cartIsShown && <Cart onHideCart={showAndHideCart}/>}
      <Header onShowCart={showAndHideCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
