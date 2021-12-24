import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardActions } from "@mui/material";

export default function FeaturedCard({
  name,
  image,
  description,
  price,
  product,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        width: 344,
        height: 115,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        justifyContent: "space-between",
        margin: 2.5,
        transition: "all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
        "&:hover": {
          transform: "scale(1.05)",
        },
        ["@media (max-width: 700px)"]: {
          width: "95vw",
        },
        ["@media (max-width: 450px)"]: {
          width: "90vw",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="p"
            style={{ fontSize: 18, fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ${price}
          </Typography>
          <CardActions style={{ marginLeft: -7 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography>
                <a
                  style={{ textDecoration: "none", marginRight: 2 }}
                  href={`/product/${product._id}`}
                >
                  View Product
                </a>
              </Typography>
              <ArrowForwardIosIcon
                fontSize="sm"
                color="red"
                style={{ color: "red" }}
              />
            </div>
          </CardActions>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt=""
        onError={(e) => (
          (e.target.onerror = null), (e.target.src = "/assets/defaultImg.jpeg")
        )}
      />
    </Card>
  );
}
