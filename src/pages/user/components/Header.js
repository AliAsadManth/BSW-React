import React from "react";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";

const Nav = styled.nav`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 65px;
  font-size: 0;
  margin-left: 4rem;
  img {
    height: 60px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SideButtons = styled.div`
  display: flex;
  margin-right: 4rem;
  width: 180px;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
      position: relative;
      cursor: pointer;

      &:before {
        background-color: rgb(0, 0, 0);
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
      }
    }
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/assets/bsw-logo-navbar.png" alt="BWS" />
      </Logo>
      <SideButtons>
        <div>
          <AccountCircleIcon fontSize="large" />
          <span>Login</span>
        </div>
        <div>
          <ShoppingCartIcon fontSize="large" />
          <span>Cart</span>
        </div>
      </SideButtons>
    </Nav>
  );
};

export default Header;
