import React from "react";
import styled from "@emotion/styled";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.nav`
  height: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: grey;
  .searchIcon {
    position: absolute;
    right: 6.5rem;
    cursor: pointer;
    @media (max-width: 768px) {
      right: 2.5rem;
    }
  }
`;
const Text = styled.span`
  margin-left: 4rem;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        contact on bws@gmail.com
      </Text>
      <div style={{width:100}}>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
      </div>
      <Text>
        Powered by MANTH Solution
      </Text>
    </Container>
  );
};

export default Footer;
