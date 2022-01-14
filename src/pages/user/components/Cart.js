import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserContext from "../../../context/UserContext";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

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
  const { cart, amount, user, setCart, setAmount } = useContext(UserContext);
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let tempPrice = totalPrice;
    cart?.product?.map((item) => {
      tempPrice += item.quatity * item.productId.price;
    });
    setTotalPrice(tempPrice);
  }, []);

  const onRemove = async (id) => {
    const result = await axios.delete(
      `${process.env.React_APP_BASE_URL}/cart/remove/${id}/${user._id}`
    );
    toast.success(result?.data?.msg);
    const res = await axios.get(
      `${process.env.React_APP_BASE_URL}/cart/${user._id}`
    );
    setCart(res?.data?.cart);
    setAmount(res?.data?.calc);
  };

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
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div
          style={{ borderBottom: "1px solid #e8e8e8", paddingBottom: "32px" }}
        >
          <ShoppingCartIcon
            fontSize="small"
            style={{
              fontSize: "24px",
              marginRight: "3px",
              float: "left",
            }}
          />
          <div style={{ float: "right" }}>
            <span style={{ color: "#abb0be" }}>Total:</span>
            <span style={{ color: "#6394f8" }}>${amount?.goodsTotal}</span>
          </div>
        </div>

        <ul style={{ paddingTop: "20px", height: 280, overflowY: "scroll" }}>
          {cart?.product?.map((item) => {
            // totalPrice += item.quatity * item.productId.price;
            // setTotalPrice(10);
            return (
              <li
                style={{
                  marginBottom: "18px",
                  display: "flex",
                  marginLeft: -40,
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    style={{ width: 50, marginRight: 10 }}
                    src={`${process.env.React_APP_BASE_URI}${item.productId.image[0]}`}
                    alt="item1"
                    onError={(e) => (
                      (e.target.onerror = null),
                      (e.target.src = "/assets/defaultImg.jpeg")
                    )}
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
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
                  <div>
                    <IconButton onClick={() => onRemove(item.productId._id)}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => history.push("/checkoutDetails")}
          disabled={cart?.product?.length === 0 || !cart}
          style={{
            backgroundColor: cart?.product?.length === 0 || (!cart && "gray"),
          }}
        >
          Proceed To Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
