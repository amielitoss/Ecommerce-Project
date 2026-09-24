import Header from "../components/Header";
import './PageNotFound.css';

function PageNotFound(){
    return (
        <>
        <title>Page not Found</title>
        <Header />
        <p className="page-not-found-message">Page not found 404 ERROR</p>
        </>
    )
}

export default PageNotFound;