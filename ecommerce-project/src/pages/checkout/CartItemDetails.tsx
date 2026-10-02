import axios from "axios";
import { Key, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { formatMoney } from "../../utils/money";
import "./CheckoutPage.css";
import type { CartItem } from "../../types";

type CartItemDetailsProps = {
  cartItem: CartItem;
  loadCart: () => Promise<void>;
};

function CartItemDetails({ cartItem, loadCart }: CartItemDetailsProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const changeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const updateCartQuantity = async () => {
    if (isUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity,
      });
      await loadCart();
      setIsUpdating(false);
    } else {
      setIsUpdating(!isUpdating);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateCartQuantity();
    } else if (event.key === "Escape") {
      setQuantity(cartItem.quantity);
      setIsUpdating(false);
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
              <input
                type="text"
                className="quantity-input"
                value={quantity}
                onChange={changeQuantity}
                onKeyDown={handleKeyDown}
              />
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
