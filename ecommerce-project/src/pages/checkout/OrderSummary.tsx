import DeliveryDate from "./DeliveryDate";
import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import type { CartItem, DeliveryOption } from "../../types";

type OrderSummaryProps = {
  cart: CartItem[];
  deliveryOptions: DeliveryOption[];
  loadCart: () => Promise<void>;
};

function OrderSummary({ cart, deliveryOptions, loadCart }: OrderSummaryProps) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              
              {selectedDeliveryOption && (
                <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
              )}

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
