import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [error, setError] = useState(false);
  function errorHandler() {
    // fetch("jshdfjdsjshdjhsjdhjshd")
    //   .then((res) => res.json())
    //   .catch(() => {
    //     setError(true);
    //   });
  }
  useEffect(() => {
    errorHandler();
  }, []);

  return <div>{error ? <h1>Error</h1> : children}</div>;
}

export default ErrorBoundary;
