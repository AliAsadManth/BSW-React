import React from "react";
import styled from "@emotion/styled";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useHistory } from "react-router-dom";

const Container = styled.nav`
  height: 225px;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  @media (max-width: 1000px) {
    padding: 0;
    padding-left: 10px;
  }
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 100%;
    margin-bottom: 25px;
  }
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Text = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  font-weight: 600;
`;

const Footer = () => {
  const history = useHistory();
  return (
    <div style={{ width: "100vw", backgroundColor: "rgb(51, 51, 51)" }}>
      <Container>
        <div style={{ color: "white", marginTop: 55 }}>
          <Text>We Accept</Text>
          <br />
          <img src="/assets/au_payment_options.svg" alt="Cards" />
        </div>
        <div style={{ color: "white", marginTop: 55 }}>
          <Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
              }}
            >
              <PhoneIcon /> +61 8 6249 2742
            </div>
          </Text>
          <br />
          <Text>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
              }}
            >
              <EmailIcon /> sales@bswengineering.com
            </div>
          </Text>
        </div>
        <div style={{ color: "white", marginTop: 55 }}>
          <Text>Legals</Text>
          <p
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => history.push("/privacypolicy")}
          >
            Privacy Policies
          </p>
          <p
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => history.push("/terms")}
          >
            Terms And Condtions
          </p>
        </div>
        <div style={{ color: "white", marginTop: 55 }}>
          <Text>Other Pages</Text>
          <p
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => history.push("/about")}
          >
            About Us
          </p>
          <p
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => history.push("/contact")}
          >
            Contact Us
          </p>
          <p
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => {
              window.location = "https://manth-sol.github.io/";
            }}
          >
            IT Solutions
          </p>
          <p
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => {
              window.location = "https://bswengineering.com/dashboard/";
            }}
          >
            Admin Dashboard
          </p>
        </div>
      </Container>
      <Text
        style={{
          color: "white",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: 25,
          width: 225,
        }}
      >
        Follow us on:{"  "}
        <img
          src="/assets/LinkedIn.svg"
          alt="Cards"
          style={{ width: 105, borderRadius: 100, cursor: "pointer" }}
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/company/bsw-engineering-solutions-supplies")
          }
        />
      </Text>
    </div>
  );
};

export default Footer;
