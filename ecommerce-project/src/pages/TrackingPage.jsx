import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams, Link } from "react-router";
import "./TrackingPage.css";

function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const loadTracking = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );

      setOrder(response.data);
    };
    loadTracking();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((item) => {
    return item.product.id === productId;
  });

  if (!orderProduct) {
    return <p>Product not found.</p>;
  }

  const orderTime = order.orderTimeMs;
  const deliveryTime = orderProduct.estimatedDeliveryTimeMs;
  const currentTime = Date.now();
  const progressPercent = Math.min(
    ((currentTime - orderTime) / (deliveryTime - orderTime)) * 100,
    100,
  );
  let deliveryStatus;

  if (progressPercent < 33) {
    deliveryStatus = "Preparing";
  } else if (progressPercent < 100) {
    deliveryStatus = "Shipped";
  } else {
    deliveryStatus = "Delivered";
  }

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/png" href="/images/tracking-favicon.png" />

      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {progressPercent >= 100 ? "Delivered on" : "Arriving on"}{" "}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{orderProduct.product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${
                deliveryStatus === "Preparing" ? "current-status" : ""
              }`}
            >
              Preparing
            </div>

            <div
              className={`progress-label ${
                deliveryStatus === "Shipped" ? "current-status" : ""
              }`}
            >
              Shipped
            </div>

            <div
              className={`progress-label ${
                deliveryStatus === "Delivered" ? "current-status" : ""
              }`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPage;
