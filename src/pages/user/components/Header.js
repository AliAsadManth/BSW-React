import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";
import Cart from "./Cart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";

const Nav = styled.nav`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6rem;
  @media (max-width: 1230px) {
    padding: 0;
  }
  @media (max-width: 500px) {
    margin-left: -50px;
    margin-right: -50px;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 65px;
  font-size: 0;
  margin-left: 4rem;
  cursor: pointer;
  img {
    height: 60px;
  }
`;
const LogoContianer = styled.div`
  margin-left: 10px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const CartContainer = styled.div`
  display: flex;
  position: absolute;
  top: 55px;
  right: 120px;
  z-index: 9999;
  @media (max-width: 1200px) {
    right: 20px;
  }
`;

const SideButtons = styled.div`
  display: flex;
  margin-right: 4rem;
  justify-content: flex-end;
  alignitems: center;
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
`;

const Header = ({ component }) => {
  const history = useHistory();
  const { user, setUser, cart, setCart, setAmount, setSearchProduct } =
    useContext(UserContext);
  const [showCart, setShowCart] = useState(false);

  // for dropdown menu

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // for logout
  const onLogout = () => {
    console.log("user", user.role);
    if (user.role === "user") {
      axios.delete(`${process.env.React_APP_BASE_URL}/user/logout`).then(() => {
        setUser({});
        setCart();
        setAmount();
        setSearchProduct();
        history.push("/");
        toast.success("Logged out Successfully!");
      });
    } else if (user.role === "guest") {
      axios
        .delete(`${process.env.React_APP_BASE_URL}/user/guestLogout`)
        .then(() => {
          setUser({});
          setCart();
          setAmount();
          setSearchProduct();
          history.push("/");
          toast.success("Logged out Successfully!");
        });
    }
  };

  return (
    <Nav>
      <Logo>
        <img
          src="/assets/bsw-logo-navbar.png"
          alt="BWS"
          onClick={() => history.push("/")}
        />
      </Logo>
      <SideButtons style={{ width: component === "Signup" && 75 }}>
        {component !== "Signup" &&
          (!user?._id ? (
            <LogoContianer onClick={() => history.push("/login")}>
              <AccountCircleIcon fontSize="large" />
              <span>Login</span>
            </LogoContianer>
          ) : (
            <div
              style={{
                marginRight: 10,
              }}
            >
              <LogoContianer onClick={handleClick}>
                <AccountCircleIcon fontSize="large" />
                <span>{user.name}</span>
              </LogoContianer>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ mt: 4.5 }}
              >
                <MenuItem
                  style={{ width: 150 }}
                  onClick={() => history.push("/orders")}
                >
                  My Orders
                </MenuItem>
                <MenuItem onClick={() => history.push("/profile")}>
                  My Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ))}
        <Badge color="error" badgeContent={cart?.product?.length}>
          <LogoContianer
            onClick={() => (showCart ? setShowCart(false) : setShowCart(true))}
          >
            <ShoppingCartIcon fontSize="large" />
            <span>Cart</span>
          </LogoContianer>
        </Badge>
      </SideButtons>
      {showCart && (
        <CartContainer>
          <Cart />
        </CartContainer>
      )}
    </Nav>
  );
};

export default Header;
