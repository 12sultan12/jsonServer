import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import Box from "@mui/material/Box";
import Products from "./Products";


const Home = () => {
  const { readProduct, data } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 22%)",
        justifyContent: "space-between",
        gridAutoRows: "400px",
        mt: "40px",
        padding: "0 20px",
      }}
    >
      {data.map((el, idx) => (
        <Products key={idx} el={el} />
      ))}
    </Box>
  );
};

export default Home;
