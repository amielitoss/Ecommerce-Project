import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import "./CheckoutPage.css";

function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const changeQuantity = (event) => {
    setQuantity(Number(event.target.value));
  }

  const updateCartQuantity = async () => {
    if(isUpdating){
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
          quantity
        });
        await loadCart();
        setIsUpdating(false);
    } else {
      setIsUpdating(!isUpdating)
    }
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdating ? (
              <input type="text" className="quantity-input"  value={quantity} onChange={changeQuantity}/>
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updateCartQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
