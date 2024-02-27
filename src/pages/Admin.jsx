import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useProduct } from "../context/ProductContext";

const Admin = () => {
  const { createProduct } = useProduct();
  const [values, setValues] = useState({
    image: "",
    name: "",
    age: "",
  });
  const navigate = useNavigate();

  function handleInput(e) {
    if (e.target.name === "age") {
      setValues({ ...values, [e.target.name]: Number(e.target.value) });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleCreate() {
    createProduct(values);
    setValues({
      image: "",
      name: "",
      age: "",
    });
    navigate("/");
  }

  console.log(values);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "100px",
        gap: "20px",
      }}
    >
      <TextField
        onChange={handleInput}
        sx={{
          maxWidth: "400px",
          width: "100%",
        }}
        id="outlined-basic"
        label="Image URL..."
        variant="outlined"
        name="image"
        value={values.image}
      />
      <TextField
        onChange={handleInput}
        sx={{
          maxWidth: "400px",
          width: "100%",
        }}
        id="outlined-basic"
        label="Name..."
        variant="outlined"
        name="name"
        value={values.name}
      />
      <TextField
        onChange={handleInput}
        sx={{
          maxWidth: "400px",
          width: "100%",
        }}
        id="outlined-basic"
        label="Age..."
        type="number"
        variant="outlined"
        name="age"
        value={values.age}
      />
      <Button onClick={handleCreate} variant="contained">
        Create
      </Button>
    </Box>
  );
};

export default Admin;
