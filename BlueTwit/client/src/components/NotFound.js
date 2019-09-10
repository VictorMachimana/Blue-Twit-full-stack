import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center" }}>
    <h1>Page Not Found</h1>
    <h2>Error: 404</h2>
    <Link to="/"> Go Home</Link>
  </div>
);

export default NotFound;
