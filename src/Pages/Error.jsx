import { useRouteError, Link } from "react-router-dom";
import "../App.css";

export const Error = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-content">
        <p className="error-code">{error?.status || 500}</p>

        <h1>{error?.statusText || "Something went wrong"}</h1>

        <p className="error-message">
          {error?.error?.message || "The page you are looking for could not be found."}
        </p>

        <Link to="/" className="error-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};