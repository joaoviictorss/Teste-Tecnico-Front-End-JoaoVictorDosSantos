import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { makeServer } from "./server.ts";
import Header from "./components/header/index.tsx";
import Footer from "./components/footer/index.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart/index.tsx";

// Rotas da aplicação com o react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

// Adiciona o servidor com a falsa api de produtos utilizando o miragejs
makeServer();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
