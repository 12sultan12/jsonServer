import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

// GET
// POST
// DELETE
// PATCH
// PUT

const ProductContext = ({ children }) => {
  const API_PRODUCTS = "http://localhost:3000/products";

  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function createProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
    readProduct();
  }

  async function readProduct() {
    let { data } = await axios(API_PRODUCTS);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      setOneProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateProduct(newObject, id) {
    await axios.patch(`${API_PRODUCTS}/${id}`, newObject);
  }

  const values = {
    createProduct,
    readProduct,
    data,
    deleteProduct,
    getOneProduct,
    oneProduct,
    updateProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
