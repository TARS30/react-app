import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import ErrorFallback from "./ui/ErrorFallback.jsx";



import { ErrorBoundary } from "react-error-boundary";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary onReset={() => window.location.replace('/')} FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
