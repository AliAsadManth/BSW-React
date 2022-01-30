import React, { useState } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { Typography, Button, Divider } from "@mui/material";
import InputField from "./components/InputField";
import axios from "axios";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.5%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
  @media (max-width: 1100px) {
    width: 90vw;
    margin: 0;
  }
  @media (max-width: 500px) {
    width: 98vw;
    padding: 0 1%;
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
        toast.success(res.data.msg);
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
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
              Full Name
            </Typography>
            <InputField
              type="text"
              required={true}
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
              type="Email"
              required={true}
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
              backgroundColor: "#ef4b51",
              width: 150,
              marginTop: "20px",
              marginBottom: 10,
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
