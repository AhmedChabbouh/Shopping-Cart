import React from "react";  
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({message="Page not found", buttonText='Go to Home', onclick}) => {
  const navigate = useNavigate();
   const handleClick = () => {
    navigate("/home");
  };
  
  return (
    <div className="container">
    <div className="error-container">

      <h1 className="error-title">Error</h1>
      <p className="error-message">{message}</p>
      <button onClick={onclick ? onclick : handleClick} className="error-button">
        {buttonText}
      </button>
    </div>
    </div>
  );
};

export default ErrorPage;
