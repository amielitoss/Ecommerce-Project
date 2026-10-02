import Header from "../components/Header";
import "./PageNotFound.css";
import type { CartItem } from "../types";

type PageNotFoundProps = {
  cart: CartItem[];
}

function PageNotFound({ cart }: PageNotFoundProps) {
  return (
    <>
      <title>Page not Found</title>
      <Header cart={cart}/>
      <p className="page-not-found-message">Page not found 404 ERROR</p>
    </>
  );
}

export default PageNotFound;
