import React, { useState } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
} from "@mui/material";
import InputField from "./components/InputField";
import axios from "axios";

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.5%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    axios
      .get(`${process.env.React_APP_BASE_URL}/user/contact`, data)
      .then((res) => {
        alert(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <div>
      <Header />
      <Menubar />
      <Container>
        <Typography style={{ fontSize: 32 }} noWrap>
          Contact Us
        </Typography>
        <Divider
          flexItem
          style={{
            backgroundColor: "grey",
            width: 1045,
            marginTop: 20,
            opacity: 0.4,
          }}
        />
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Full Name
            </Typography>
            <InputField
              type="text"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "50%", height: "35px", marginTop: "20px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Email
            </Typography>
            <InputField
              type="Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "50%", height: "35px", marginTop: "20px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60%",
            }}
          >
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Message
            </Typography>
            <InputField
              type="textarea"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "50%",
                height: "250px",
                marginTop: "20px",
                paddingTop: 6,
              }}
            />
          </div>
          <Divider
            flexItem
            style={{
              backgroundColor: "grey",
              width: 1045,
              marginTop: 20,
              opacity: 0.4,
            }}
          />
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "red",
              width: "13%",
              marginTop: "20px",
            }}
          >
            Send Message
          </Button>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
