import React, { useState, useContext } from "react";
import { Modal, Typography, Box, Button } from "@mui/material";
import InputField from "./InputField";
import { toast } from "react-toastify";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import styled from "@emotion/styled";

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 550px) {
    display: block;
  }
`;

const GuestRegisterModal = ({ open, setOpen }) => {
  const { setUser, setCart, setAmount } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !address || !phone) {
      toast.error("All fields are required!");
    } else {
      try {
        const data = {
          name,
          email,
          address,
          phone,
        };
        const result = await axios.post(
          `${process.env.React_APP_BASE_URL}/user/createguest`,
          data
        );
        setUser(result?.data?.data);
        toast.success(result?.data?.message);
        setOpen(false);
        const res = await axios.get(
          `${process.env.React_APP_BASE_URL}/cart/${result.data.data._id}`
        );
        setCart(res.data.cart);
        setAmount(res.data.calc);
      } catch (err) {
        toast.error(err?.response?.data);
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          ["@media (max-width: 550px)"]: {
            width: 300,
          },
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Following Information is required!
        </Typography>
        <form
          onSubmit={handleSubmit}
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
              style={{ width: "50%", height: "35px", marginTop: "20px" }}
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
              style={{ width: "50%", height: "35px", marginTop: "20px" }}
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
              style={{ width: "50%", height: "35px", marginTop: "20px" }}
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
              style={{ width: "50%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <InnerContainer>
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "red",
                height: "35px",
                marginTop: "20px",
                marginRight: 64,
              }}
            >
              Submit
            </Button>
          </InnerContainer>
        </form>
      </Box>
    </Modal>
  );
};

export default GuestRegisterModal;
