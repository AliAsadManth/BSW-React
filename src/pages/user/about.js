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

const about = () => {
  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Menubar />
      <Container>
        <Typography style={{ fontSize: 32 }} noWrap>
          About Us
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
            <img src="/assets/buildpic.jpeg" alt="Cards" />
          </Image>
          <Text>
            <Typography>
              BSW is a privately owned Australian business with a national
              footprint servicing the electrical industry. We have been
              providing quality global brands such as GE, Hensel, Socomec,
              DEHN,FMG, DECMIL and Elsteel into the Australian market for over
              years. We are proud to employ professional people in areas such as
              engineering, sales & logistics. We have an innovative and
              extensive range of products. The range consists of power
              distribution, power protection, control, energy management and
              renewables. Key customers include Switchboard manufacturers, OEMs,
              wholesalers, contractors & utilities. If you have an industrial
              electrical product requirement we will be able to fulfil them. BSW
              has an extensive technical sales network backed by a national
              customer service centre. We provide added value to our customers
              through in-house design, estimating and local manufacturing. These
              services are further supported by a flexible in-house and on-site
              training program to better utilise our products. How can we help
              you ?
            </Typography>
          </Text>
        </InnerContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default about;
