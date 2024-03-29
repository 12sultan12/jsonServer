import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProduct } from "../context/ProductContext";

const Products = ({ el }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        onClick={() => navigate(`/detail/${el.id}`)}
        sx={{ height: 250 }}
        image={el.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => deleteProduct(el.id)}
          size="small"
          sx={{ color: "red" }}
        >
          DELETE
        </Button>
        <Button
          onClick={() => navigate(`/edit/${el.id}`)}
          size="small"
          sx={{ color: "green" }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Products;
