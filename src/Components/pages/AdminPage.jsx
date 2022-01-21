import { Grid } from "@mui/material";
import React from "react";
import AdminBrandsList from "../AdminBrandList/AdminBrandList";
import AdminProductList from "../AdminProductList/AdminProductList";
import "./AdminPage.css";

const AdminPage = () => {
  return (
  <> 
<div className="admin-page">
  <div className="brandlist">
    <div style={{height: "200px"}}></div>
  <Grid container rowSpacing={1}>
      <AdminBrandsList />
      <AdminProductList />
      </Grid>
      </div>

      {/* <AddProductModal /> */}
      {/* <AdminProductsList /> */}
      </div>
      </>
  );
};

export default AdminPage;
