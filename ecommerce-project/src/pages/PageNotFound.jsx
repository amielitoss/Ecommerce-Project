import Header from "../components/Header";
import "./PageNotFound.css";

function PageNotFound({ cart }) {
  return (
    <>
      <title>Page not Found</title>
      <Header cart={cart}/>
      <p className="page-not-found-message">Page not found 404 ERROR</p>
    </>
  );
}

export default PageNotFound;
