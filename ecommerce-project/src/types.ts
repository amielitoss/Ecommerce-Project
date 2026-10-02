export type ProductType = {
  id: string;
  image: string;
  name: string;
  rating: {
    stars: number;
    count: number;
  };
  priceCents: number;
keywords: string[];
};

export type CartItem = {
  productId: string;
  quantity: number;
  deliveryOptionId: string;
  product: ProductType;
};

export type PaymentSummaryType = {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
};

export type DeliveryOption = {
  id: string;
  priceCents: number;
  estimatedDeliveryTimeMs: number;
};

export type OrderProduct = {
  product: ProductType;
  quantity: number;
  estimatedDeliveryTimeMs: number;
};

export type Order = {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: OrderProduct[];
};