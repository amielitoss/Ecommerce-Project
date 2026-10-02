import dayjs from "dayjs";

type DeliveryDateProps = {
  selectedDeliveryOption: {
    estimatedDeliveryTimeMs: number;
  };
};

function DeliveryDate({ selectedDeliveryOption }: DeliveryDateProps) {
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D",
      )}
    </div>
  );
}

export default DeliveryDate;
