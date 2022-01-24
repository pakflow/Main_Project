import React, { useEffect, useContext } from "react";
import { productsContext } from "../Contexts/productsContext";
import "./All.css";

const All = () => {
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return ( 
   <>
    <div>
        {products.length > 0 ? (
            products.map((item) => (
                <div>
                    <div className="product-img">
                        <img src={item.image1}/>
                    </div>
                        <div className="product-model">

                        </div>
                        <div className="product-price">

                        </div>
                </div>
            ))
        ) : (null)}
        </div>  
  </>
  )};

export default All;
