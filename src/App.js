import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Components/Contexts/authContext";
import BrandsContextProvider from "./Components/Contexts/brandsContext";
import ProductsContextProvider from "./Components/Contexts/productsContext";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./index.css";
import Routing from "./Routing";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <BrandsContextProvider>
          <ProductsContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductsContextProvider>
        </BrandsContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
