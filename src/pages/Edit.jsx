import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useProduct } from "../context/ProductContext";

const Edit = () => {
  const { getOneProduct, oneProduct, updateProduct } = useProduct();
  const [values, setValues] = useState({
    image: "",
    name: "",
    age: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setValues({
        ...values,
        image: oneProduct.image,
        name: oneProduct.name,
        age: oneProduct.age,
      });
    }
  }, [oneProduct]);

  console.log(oneProduct);

  function handleSave() {
    updateProduct(values, id);
    setValues({
      image: "",
      name: "",
      age: "",
    });
    navigate("/");
  }

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
        onChange={(e) => setValues({ ...values, image: e.target.value })}
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
        onChange={(e) => setValues({ ...values, name: e.target.value })}
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
        onChange={(e) => setValues({ ...values, age: e.target.value })}
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
      <Button onClick={handleSave} variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default Edit;
