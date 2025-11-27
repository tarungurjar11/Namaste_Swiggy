import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <h2>404 - Page Not Found</h2>
            <p>{error.status || error.statusText}</p>
        </div>
    );
}

export default PageNotFound;