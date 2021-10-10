import React from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  background-color: rgb(117, 117, 117);
  .searchIcon {
    position: absolute;
    right: 11rem;
    cursor: pointer;
  }
`;
const Text = styled.span`
  margin-left: 4rem;
  font-size: 24px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  cursor: pointer;
`;
const Searchbar = styled.input`
  margin-right: 4rem;
  width: 74%;
  height: 35px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  border-radius: 3px;
  outline: none;
  &:focus {
    border: 1px solid black;
    transition: 250ms ease;
    color: black;
    &::-webkit-input-placeholder {
      transition: opacity 250ms ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 250ms ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 250ms ease;
      opacity: 0;
    }
  }
`;

const Menubar = () => {
  return (
    <Container>
      <Text>
        Browse
        <ExpandMoreIcon />
      </Text>
      <div>
        <Divider
          orientation="vertical"
          flexItem
          style={{ backgroundColor: "white", height: 35 }}
        />
      </div>
      <Searchbar placeholder="What are you looking for?" />
      <SearchIcon className="searchIcon" />
    </Container>
  );
};

export default Menubar;
