import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(props);

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={props.image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{props.title}</p>
        <p className="checkoutProduct-price">
          <small>₹ </small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
