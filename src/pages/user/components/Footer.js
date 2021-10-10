import React from "react";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.nav`
  height: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;
const Text = styled.span`
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <div style={{width:"100vw",backgroundColor:"rgb(51, 51, 51)"}}>
    <Container>
        <Text>contact on bws@gmail.com</Text>
        <div style={{ width: 100 }}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <Text>Powered by MANTH Solution</Text>
    </Container>
    </div>
  );
};

export default Footer;
