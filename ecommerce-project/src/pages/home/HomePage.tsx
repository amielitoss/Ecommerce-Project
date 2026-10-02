import axios from "axios";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";
import type { CartItem, ProductType } from "../../types";

type HomePageProps = {
  cart: CartItem[];
  loadCart: () => Promise<void>
}

function HomePage({ cart, loadCart }: HomePageProps) {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductType[]>([]);

  const search = searchParams.get("search");

  useEffect(() => {
    let url = "/api/products";

    if(search) {
      url = `/api/products?search=${search}`
    }

    const loadProducts = async () => {
      const response = await axios.get(url);
      setProducts(response.data)
      
    }
    loadProducts();
  }, [search])

  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href="/images/home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
