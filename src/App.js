import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Header,
  Footer,
  ProductsContextProvider,
  BrandsContextProvider,
  AuthContextProvider,
} from "./components";
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
