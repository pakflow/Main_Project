import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../Contexts/productsContext";
import { brandsContext } from "../Contexts/brandsContext";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Button,
  Typography,
  Modal,
  TextField,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AdminProductList = () => {
  const {
    createProduct,
    getProducts,
    deleteProduct,
    products,
    productsTotalCount,
  } = useContext(productsContext);
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getBrands();
  }, []);
  const [newProduct, setNewProduct] = useState({
    brand: "",
    model: "",
    price: "",
    description: "",
    image1: "",
    image2: "",
    video: "",
  });
  function handleValues(e) {
    let values = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(values);
    console.log(values);
  }
  function checkValues() {
    if (
      !newProduct.brand ||
      !newProduct.model ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.image1 ||
      !newProduct.image2 ||
      !newProduct.video
    ) {
      alert("Заполните поля!");
      return;
    } else {
      createProduct(newProduct);
    }
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const style = {
    position: "absolute",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }} width="40%">
        <Grid container spacing={2} width="900px">
          <Grid item xs={12} md={6}>
            <Button variant="outlined" onClick={handleOpen}>
              Add Product
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add Product
                </Typography>
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Brand
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newProduct.brand}
                        name="brand"
                        label="Brand"
                        onChange={handleValues}
                      >
                        {brands.map((item) => (
                          <MenuItem value={item.brand}>{item.brand}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div>
                  <TextField
                    id="standard-error"
                    label="Model"
                    name="model"
                    value={newProduct.model}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-error"
                    label="Price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-error"
                    label="Description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-error"
                    label="Image1"
                    name="image1"
                    value={newProduct.image1}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-error"
                    label="Image2"
                    name="image2"
                    value={newProduct.image2}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    id="standard-error"
                    label="Video"
                    name="video"
                    value={newProduct.video}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <Button
                    sx={{ marginTop: "2vh" }}
                    variant="outlined"
                    onClick={() => checkValues()}
                  >
                    Add Product
                  </Button>
                </div>
              </Box>
            </Modal>
            <Demo>
              <List>
                {products.map((item) => (
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => deleteProduct(item.id)} />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={item.image1} />
                    </ListItemAvatar>
                    <ListItemText primary={item.model} />
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminProductList;
