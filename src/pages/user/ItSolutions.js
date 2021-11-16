import React from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { Typography, Divider } from "@mui/material";

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.5%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
`;

const ItSolutions = () => {
  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Menubar />
      <Container>
        <Typography style={{ fontSize: 32 }} noWrap>
          MANTH Solutions for IT services
        </Typography>
        <Divider
          flexItem
          style={{
            backgroundColor: "grey",
            width: "100%",
            marginTop: 20,
            opacity: 0.4,
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <img
            src="https://i.ytimg.com/vi/ga3zusCii7c/maxresdefault.jpg"
            alt="Manth"
            style={{ width: "47%", borderRadius: 4 }}
          />
          <Typography style={{ fontSize: 18, color: "grey", width: "47%" }}>
            Dedicates page for MANTH Solutions
          </Typography>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ItSolutions;
