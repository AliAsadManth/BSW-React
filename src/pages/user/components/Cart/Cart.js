import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserContext from "../../../../context/UserContext";
import { CountertopsOutlined } from "@mui/icons-material";

const Button = styled.button`
  background: red;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  border: 0;
  font-size: 16px;
  margin: 25px 0 15px 0;
  width: 100%;
  cursor: pointer;
`;

const Cart = () => {
  const { cart } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let tempPrice = totalPrice;
    cart.product?.map((item) => {
      tempPrice += item.quatity * item.productId.price;
    });
    setTotalPrice(tempPrice);
  }, []);

  return (
    <div
      style={{
        margin: "auto",
        width: "80%",
      }}
    >
      <div
        style={{
          margin: "20px 0",
          float: "right",
          background: "white",
          width: "320px",
          position: "relative",
          borderRadius: "3px",
          padding: "20px",
          border: "1px solid grey",
        }}
      >
        <div
          style={{ borderBottom: "1px solid #e8e8e8", paddingBottom: "15px" }}
        >
          <ShoppingCartIcon
            fontSize="small"
            style={{
              fontSize: "24px",
              marginRight: "3px",
              float: "left",
            }}
          />
          <span
            style={{
              backgroundColor: "red",
              borderRadius: "10px",
              color: "white",
              display: "inline-block",
              fontSize: "12px",
              lineHeight: 1,
              padding: "3px 7px",
              textAlign: "center",
              verticalAlign: "middle",
              whiteSpace: "nowrap",
            }}
          >
            {cart.product?.length}
          </span>
          <div style={{ float: "right" }}>
            <span style={{ color: "#abb0be" }}>Total:</span>
            <span style={{ color: "#6394f8" }}>${totalPrice}</span>
          </div>
        </div>

        <ul style={{ paddingTop: "20px" }}>
          {cart.product?.map((item) => {
            // totalPrice += item.quatity * item.productId.price;
            // setTotalPrice(10);
            return (
              <li
                style={{
                  marginBottom: "18px",
                  display: "flex",
                  marginLeft: -40,
                }}
              >
                <div>
                  <img
                    style={{ width: 50, marginRight: 10 }}
                    src={`${process.env.React_APP_BASE_URI}${item.productId.image[0]}`}
                    alt="item1"
                  />
                </div>
                <div>
                  <span
                    style={{
                      display: "block",
                      paddingTop: "10px",
                      fontSize: "16px",
                    }}
                  >
                    {item.productId.name}
                  </span>
                  <span style={{ color: "#6394f8", marginRight: "8px" }}>
                    ${item.quatity * item.productId.price}
                  </span>
                  <span style={{ color: "#abb0be" }}>
                    Quantity: {item.quatity}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
