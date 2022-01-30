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
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  width: 47%;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const Text = styled.div`
  width: 47%;
  color: gray;
  font-size: 18px;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const ItSolutions = () => {
  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Menubar />
      <Container>
        <Typography style={{ fontSize: 32 }} noWrap>
          BSW IT Solutions
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
        <InnerContainer>
          <Image>
            <img
              src="https://i.ytimg.com/vi/ga3zusCii7c/maxresdefault.jpg"
              alt="BSW"
              style={{ width: "100%" }}
            />
          </Image>
          <Text>
            <Typography style={{ fontSize: 18, color: "grey" }}>
              BSW Engineering is a web and mobile development agency that has
              dedicated and skilled team of professionals. We are able to create
              dynamic and cost effective solution for its clients. We believe in
              delivering services without compromising in on time and quality.
              We ideate and plan to design develop custom web and mobile app
              solutions to connect our clients with their customers efficiently.
              We have a team of skilled full stack developers with expertise in
              MERN stack and flutter development.
            </Typography>
            <div style={{ display: "flex" }}>
              <h4>Email: </h4>
              <h4
                onClick={() =>
                  (window.location = "mailto:ITsol@bswengineering.com")
                }
                style={{ cursor: "pointer" }}
              >
                &nbsp;ITsol@bswengineering.com
              </h4>
            </div>
          </Text>
        </InnerContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default ItSolutions;
