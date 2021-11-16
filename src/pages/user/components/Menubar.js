import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import UserContext from "../../../context/UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  const { setSearchProduct } = useContext(UserContext);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  const [anchorEl4, setAnchorEl4] = useState(null);
  const open4 = Boolean(anchorEl4);
  const [catergory, setCatergory] = useState([]);
  const [subCatergory, setSubCatergory] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let tempCat = await axios.get(`${process.env.React_APP_BASE_URL}/category`);
    let tempSubCat = await axios.get(
      `${process.env.React_APP_BASE_URL}/category/subcategory`
    );
    setCatergory(tempCat.data);
    setSubCatergory(tempSubCat.data);
  };

  const onSearchClick = () => {
    if (!search) {
      toast.error("Search is empty!");
    } else {
      axios
        .get(`${process.env.React_APP_BASE_URL}/product/search?q=${search}`)
        .then((res) => {
          setSearchProduct({ query: search, products: res.data });
          history.push("/search");
        });
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <Container>
      <Text onClick={handleClick}>
        Browse
        <ExpandMoreIcon />
      </Text>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClick1}
          style={{
            width: 420,
            borderLeft: "4px solid blue",
            marginBottom: 4,
          }}
        >
          <span>Electronics Components, Power & Connectors</span>
          <KeyboardArrowRightIcon style={{ color: "red", marginLeft: 35 }} />
        </MenuItem>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose1}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{ marginLeft: 420, maxHeight: 195 }}
        >
          {catergory.map((item) => {
            if (item.parentCategory === "10001") {
              return (
                <MenuItem
                  // onClick={handleClick2}
                  style={{
                    width: 320,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 420,
                    }}
                  >
                    <span>{item.name}</span>
                    <KeyboardArrowRightIcon
                      style={{ color: "red", marginLeft: 35 }}
                    />
                  </div>
                </MenuItem>
              );
            }
          })}
        </Menu>
        <MenuItem
          onClick={handleClick2}
          style={{ width: 420, borderLeft: "4px solid red", marginBottom: 4 }}
        >
          Electrical, Automation & Cables
          <KeyboardArrowRightIcon style={{ color: "red", marginLeft: 141 }} />
        </MenuItem>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{ marginLeft: 420, maxHeight: 195 }}
        >
          {catergory.map((item) => {
            if (item.parentCategory === "10002") {
              return (
                <MenuItem
                  // onClick={handleClick2}
                  style={{
                    width: 320,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 420,
                    }}
                  >
                    <span>{item.name}</span>
                    <KeyboardArrowRightIcon
                      style={{ color: "red", marginLeft: 35 }}
                    />
                  </div>
                </MenuItem>
              );
            }
          })}
        </Menu>
        <MenuItem
          onClick={handleClick3}
          style={{
            width: 420,
            borderLeft: "4px solid yellow",
            marginBottom: 4,
          }}
        >
          Mechanical Products & Tools
          <KeyboardArrowRightIcon style={{ color: "red", marginLeft: 160 }} />
        </MenuItem>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl3}
          open={open3}
          onClose={handleClose3}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{ marginLeft: 420, maxHeight: 195 }}
        >
          {catergory.map((item) => {
            if (item.parentCategory === "10003") {
              return (
                <MenuItem
                  // onClick={handleClick2}
                  style={{
                    width: 320,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 420,
                    }}
                  >
                    <span>{item.name}</span>
                    <KeyboardArrowRightIcon
                      style={{ color: "red", marginLeft: 35 }}
                    />
                  </div>
                </MenuItem>
              );
            }
          })}
        </Menu>
        <MenuItem
          onClick={handleClick4}
          style={{
            width: 420,
            borderLeft: "5px solid rgb(196, 214, 0)",
          }}
        >
          IT, Test & Safety Equipment
          <KeyboardArrowRightIcon style={{ color: "red", marginLeft: 167 }} />
        </MenuItem>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl4}
          open={open4}
          onClose={handleClose4}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{ marginLeft: 420, maxHeight: 195 }}
        >
          {catergory.map((item) => {
            if (item.parentCategory === "10004") {
              return (
                <MenuItem
                  // onClick={handleClick2}
                  style={{
                    width: 320,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 420,
                    }}
                  >
                    <span>{item.name}</span>
                    <KeyboardArrowRightIcon
                      style={{ color: "red", marginLeft: 35 }}
                    />
                  </div>
                </MenuItem>
              );
            }
          })}
        </Menu>
      </Menu>
      <div>
        <Divider
          orientation="vertical"
          flexItem
          style={{ backgroundColor: "white", height: 35 }}
        />
      </div>
      <Searchbar
        placeholder="What are you looking for?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="searchIcon" onClick={() => onSearchClick()} />
    </Container>
  );
};

export default Menubar;
