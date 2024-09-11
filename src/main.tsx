import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthonticationContext from "./modules/authontication/context/AuthonticationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* including usecontext App */}
    <AuthonticationContext>
      <App />
    </AuthonticationContext>
  </StrictMode>
);
