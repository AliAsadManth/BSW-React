import React from "react";
import styled from "@emotion/styled";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
} from "@mui/material";
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
  align-items: center;
  width: 60%;
  @media (max-width: 1230px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

const SignupForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  setShowPassword,
  address,
  setAddress,
  phone,
  setPhone,
  onSubmit,
  loading,
}) => {
  return (
    <Container>
      <Typography style={{ fontSize: 32 }} noWrap>
        Register
      </Typography>
      <Typography style={{ fontSize: 14, color: "grey" }} noWrap>
        All fields are required!
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
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <InnerContainer>
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
            style={{
              width: "55%",
              height: "35px",
              marginTop: "20px",
            }}
          />
        </InnerContainer>
        <InnerContainer>
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
        </InnerContainer>
        <InnerContainer>
          <Typography
            style={{ fontSize: 18, color: "grey", marginTop: 15 }}
            noWrap
          >
            Password
          </Typography>
          <InputField
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "55%", height: "35px", marginTop: "20px" }}
          />
        </InnerContainer>
        <InnerContainer>
          <Typography
            style={{ fontSize: 18, color: "grey", marginTop: 15 }}
            noWrap
          >
            Confirm Password
          </Typography>
          <InputField
            placeholder="Consfirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "55%", height: "35px", marginTop: "20px" }}
          />
        </InnerContainer>
        <InnerContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                style={{ color: "grey", marginLeft: 8 }}
              />
            }
            label="Show Password"
            style={{ color: "grey", marginLeft: -20 }}
          />
        </InnerContainer>
        <InnerContainer>
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
        </InnerContainer>
        <InnerContainer>
          <Typography
            style={{ fontSize: 18, color: "grey", marginTop: 15 }}
            noWrap
          >
            Phone Number
          </Typography>
          <InputField
            placeholder="Phone Number"
            type="Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "55%", height: "35px", marginTop: "20px" }}
          />
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
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "red",
            width: 95,
            height: "35px",
            marginTop: "20px",
            color: "white",
          }}
          disabled={loading}
        >
          {loading ? <>Loading...</> : <>Register</>}
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
