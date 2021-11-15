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
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <img
            src="/assets/buildpic.jpeg"
            alt="Cards"
            style={{ width: "47%", borderRadius: 4 }}
          />
          <Typography style={{ fontSize: 18, color: "grey", width: "47%" }}>
            BSW is a privately owned Australian business with a national
            footprint servicing the electrical industry. We have been providing
            quality global brands such as GE, Hensel, Socomec, DEHN,FMG, DECMIL
            and Elsteel into the Australian market for over years. We are proud
            to employ professional people in areas such as engineering, sales &
            logistics. We have an innovative and extensive range of products.
            The range consists of power distribution, power protection, control,
            energy management and renewables. Key customers include Switchboard
            manufacturers, OEMs, wholesalers, contractors & utilities. If you
            have an industrial electrical product requirement we will be able to
            fulfil them. BSW has an extensive technical sales network backed by
            a national customer service centre. We provide added value to our
            customers through in-house design, estimating and local
            manufacturing. These services are further supported by a flexible
            in-house and on-site training program to better utilise our
            products. How can we help you ?
          </Typography>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default about;
