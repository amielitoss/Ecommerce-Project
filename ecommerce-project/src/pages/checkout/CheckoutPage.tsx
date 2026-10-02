import axios from "axios";
import { useState, useEffect } from "react";
import CheckoutHeader from "../../components/CheckoutHeader";
import "./CheckoutPage.css";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import { type PaymentSummaryType, type CartItem, type DeliveryOption } from "../../types";

type CheckoutPageProps= {
  cart: CartItem[];
  loadCart: () => Promise<void>
}

function CheckoutPage({ cart, loadCart }: CheckoutPageProps) {
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);
  const [paymentSummary, setPaymentSummary] = useState<PaymentSummaryType | null>(null);

  useEffect(() => {
    const loadDelivery = async () => {
    let response =  await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
    setDeliveryOptions(response.data);
    }
    loadDelivery();
  }, []);

  useEffect(()  =>  {
    const loadPaymentSummary = async () => {
    const response = await axios.get("/api/payment-summary")
      setPaymentSummary(response.data)
    }
    loadPaymentSummary();
  }, [cart])

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href="/images/cart-favicon.png" />

      <CheckoutHeader cart={cart}/>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
