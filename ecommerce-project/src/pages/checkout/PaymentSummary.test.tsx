import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import axios from "axios";
import PaymentSummary from "./PaymentSummary";
import userEvent from "@testing-library/user-event";
import type { PaymentSummaryType as PaymentSummaryType } from "../../types";

vi.mock("axios");

describe("PaymentSummary component", () => {
  let user: ReturnType<typeof userEvent.setup>
  let loadCart: ReturnType<typeof vi.fn>
  let paymentSummary: PaymentSummaryType;
  beforeEach(() => {
    user = userEvent.setup();
    loadCart = vi.fn();
    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251,
    };
  });

  it("displays the payment summary correctly", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>,
    );

    expect(await screen.findByText("$52.51")).toBeInTheDocument();
    expect(screen.getByText("$42.75")).toBeInTheDocument();
    expect(screen.getByText("$4.99")).toBeInTheDocument();
    expect(screen.getByText("$47.74")).toBeInTheDocument();
    expect(screen.getByText("$4.77")).toBeInTheDocument();
  });

  it("checks if Place Order button works", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PaymentSummary
                paymentSummary={paymentSummary}
                loadCart={loadCart}
              />
            }
          />

          <Route path="/orders" element={<div>Orders Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const placeOrderButton = screen.getByRole("button", {
      name: "Place your order",
    });

    await user.click(placeOrderButton);
    expect(axios.post).toHaveBeenCalledWith("/api/orders");
    expect(loadCart).toHaveBeenCalled();
    expect(await screen.findByText("Orders Page")).toBeInTheDocument();
  });
});
