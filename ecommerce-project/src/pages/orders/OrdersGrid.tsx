import OrderHeader from "./OrderHeader";
import OrderDetails from "./OrderDetails";
import type { Order } from "../../types";

type OrdersGridProp = {
  orders: Order[];
  loadCart: () => Promise<void>
}

function OrdersGrid({ orders, loadCart }: OrdersGridProp) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetails order={order} loadCart={loadCart}/>
          </div>
        );
      })}
    </div>
  );
}

export default OrdersGrid;
