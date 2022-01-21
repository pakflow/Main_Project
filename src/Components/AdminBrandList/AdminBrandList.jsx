import React, { useContext, useEffect, useState } from "react";
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
} from "@mui/material";

const AdminBrandsList = () => {
  const style = {
    position: "absolute",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "300px",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [newBrand, setNewBrand] = useState({
    brand: "",
    logo: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const { getBrands, deleteBrand, brands, createBrand } =
    useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  function handleValues(e) {
    let values = {
      ...newBrand,
      [e.target.name]: e.target.value,
    };
    setNewBrand(values);
    console.log(values);
  }
  function checkValues() {
    if (!newBrand.brand || !newBrand.logo) {
      alert("Заполните поля!");
      return;
    } else {
      createBrand(newBrand);
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: 800 }} width="40%">
        <Grid container width="900px">
          <Grid item xs={12} md={6}>
            <Button variant="outlined" onClick={handleOpen}>
              Add Brand
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add Brand
                </Typography>
                <div>
                  <TextField
                    error
                    id="standard-error"
                    label="Brand"
                    name="brand"
                    value={newBrand.brand}
                    onChange={handleValues}
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    error
                    id="standard-error"
                    label="Logo"
                    name="logo"
                    value={newBrand.logo}
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
                    Add Brand
                  </Button>
                </div>
              </Box>
            </Modal>
            <Demo>
              <List>
                {brands.map((item) => (
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => deleteBrand(item.id)} />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={item.logo} />
                    </ListItemAvatar>
                    <ListItemText primary={item.brand} />
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

export default AdminBrandsList;
