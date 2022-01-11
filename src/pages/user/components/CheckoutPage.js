import React from "react";
import styled from "@emotion/styled";
import { Typography, Button, Divider } from "@mui/material";
import InputField from "./InputField";

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.5%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
  @media (max-width: 1230px) {
    padding: 10px 0%;
  }
  @media (max-width: 500px) {
    margin-left: 14px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    display: grid;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const LeftMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const CheckoutPage = ({
  name,
  setName,
  email,
  setEmail,
  address,
  setAddress,
  phone,
  setPhone,
  amount,
  onCheckout,
}) => {
  return (
    <Container>
      <Typography style={{ fontSize: 32 }} noWrap>
        Checkout Details
      </Typography>
      <Typography style={{ fontSize: 14, color: "grey" }} noWrap>
        Don’t wait, the time will never be just right!
      </Typography>
      <Divider
        flexItem
        style={{
          backgroundColor: "grey",
          width: "95%",
          marginTop: 20,
          opacity: 0.4,
        }}
      />
      <InnerContainer>
        <LeftMainContainer>
          <Typography style={{ fontSize: 24, marginTop: 15 }} noWrap>
            Personal Information
          </Typography>
          <LeftContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Name
            </Typography>
            <InputField
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </LeftContainer>
          <LeftContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Email
            </Typography>
            <InputField
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </LeftContainer>
          <LeftContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Address
            </Typography>
            <InputField
              placeholder="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </LeftContainer>
          <LeftContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Phone Number
            </Typography>
            <InputField
              placeholder="Phone Number"
              type="Number"
              value={parseInt(phone)}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </LeftContainer>
        </LeftMainContainer>
        <RightContainer>
          <Typography style={{ fontSize: 24, marginTop: 15 }} noWrap>
            Order Information
          </Typography>
          <div
            style={{
              border: "1px solid gray",
              width: "65%",
              padding: 10,
              paddingTop: 0,
              marginTop: 15,
              borderRadius: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                Goods Total:
              </Typography>
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                {amount?.goodsTotal}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                Delivery Charges:
              </Typography>
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                {amount?.delivery === 0 ? "Free" : amount?.delivery}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                GST:
              </Typography>
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                {amount?.tax}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "lightgray",
                width: "100%",
                margin: -10,
                marginTop: 10,
                borderTop: "1px solid gray",
                padding: 10,
                paddingTop: 0,
              }}
            >
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                Grand Total:
              </Typography>
              <Typography style={{ fontSize: 16, marginTop: 15 }} noWrap>
                {amount?.grandTotal}
              </Typography>
            </div>
          </div>
        </RightContainer>
      </InnerContainer>
      <Divider
        flexItem
        style={{
          backgroundColor: "grey",
          width: "95%",
          marginTop: 20,
          opacity: 0.4,
        }}
      />
      <div style={{ width: "90.5%" }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "red",
            width: 110,
            height: "35px",
            marginTop: "20px",
          }}
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CheckoutPage;
