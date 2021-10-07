import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({ name, image, description }) => {
  return (
    <Card
      elevation="2"
      style={{
        margin: 20,
        width: 275,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <CardHeader
        title={name}
        style={{
          textAlign: "left",
          marginLeft: -8,
        }}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent
        style={{
          textAlign: "left",
          marginLeft: -8,
        }}
      >
        <Typography noWrap>{description}</Typography>
      </CardContent>
      <CardActions
        style={{
          borderTop: "1px solid grey",
        }}
      >
        <Typography>
          <Link>View Product</Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Cards;
