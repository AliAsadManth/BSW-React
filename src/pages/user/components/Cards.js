import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Cards = ({ name, image, description, price, product }) => {
  return (
    <Card
      elevation="2"
      style={{
        margin: 20,
        width: 245,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderTop: "3px solid #ef4b51",
      }}
      sx={{
        transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
        "&:hover": {
          borderTop: "3px solid pink",
          transform: "scale(1.05)",
        },
        ["@media (max-width: 500px)"]: {
          width: "200px !important",
        },
        ["@media (max-width: 450px)"]: {
          width: "180px !important",
        },
        ["@media (max-width: 400px)"]: {
          width: "150px !important",
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt=""
        onError={(e) => ((e.target.onerror = null), (e.target.src = "/assets/defaultImg.jpeg"))}
      />
      <CardContent
        style={{
          textAlign: "left",
          marginLeft: -8,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontSize: 18 }} noWrap>
            <b>{name}</b>
          </Typography>
          <Typography style={{ fontSize: 12 }} noWrap>
            <b>${price}</b>
          </Typography>
        </div>
        <Typography style={{ fontSize: 16 }} noWrap>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            width: "100%",
            marginTop: -15,
            alignItems: "center",
          }}
        >
          <Typography>
            <a style={{ textDecoration: "none", marginRight: 2 }} href={`/product/${product._id}`}>
              View Product
            </a>
          </Typography>
          <ArrowForwardIosIcon fontSize="sm" color="#ef4b51" style={{ color: "#ef4b51" }} />
        </div>
      </CardActions>
    </Card>
  );
};

export default Cards;
