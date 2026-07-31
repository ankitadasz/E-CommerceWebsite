import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./Context/ThemeContext";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
      <AuthProvider>
        
         <App />
         </AuthProvider>
         </CartProvider>
      
    </ThemeProvider>
  </QueryClientProvider>
);
