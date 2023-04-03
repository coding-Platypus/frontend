import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/Jupiter_W1/auto_store._CB452468413_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Cart is empty</h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout-title">Your Shopping Cart</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout-right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
