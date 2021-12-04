import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
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
  z-index: 1000;
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

  const [openBrowse, setOpenBrowse] = useState(false);

  const [mainCatergory, setMainCatergory] = useState([]);
  const [mainCatergoryClick, setMainCatergoryClick] = useState({
    open: false,
    key: "",
  });
  const [catergory, setCatergory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [catergoryClick, setCatergoryClick] = useState({
    open: false,
    key: "",
  });
  const [subCatergory, setSubCatergory] = useState([]);
  const [filteredSubCatergory, setFilteredSubCatergory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMainCatergory([
      { value: "Electronics Components, Power & Connectors", key: "10001" },
      { value: "Electrical, Automation & Cables", key: "10002" },
      { value: "Mechanical Products & Tools", key: "10003" },
      { value: "IT, Test & Safety Equipment", key: "10004" },
    ]);
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

  // main category click
  const MainCategoryClickToggle = (item) => {
    let tempClick = mainCatergoryClick;
    if (tempClick.open) {
      if (tempClick.key === item.key) {
        tempClick.open = !tempClick;
      } else {
        tempClick.key = item.key;
      }
    } else {
      tempClick.open = true;
      tempClick.key = item.key;
    }
    setMainCatergoryClick(tempClick);
    let tempFiltedCat = catergory.filter((item) => {
      return item.parentCategory === tempClick.key;
    });
    setFilteredCategory(tempFiltedCat);
    setCatergoryClick({
      open: false,
      key: "",
    });
  };

  // Category click
  const categoryClickToggle = (item) => {
    let tempClick = catergoryClick;
    if (tempClick.open) {
      if (tempClick.key === item._id) {
        tempClick.open = !tempClick;
      } else {
        tempClick.key = item._id;
      }
    } else {
      tempClick.open = true;
      tempClick.key = item._id;
    }
    setCatergoryClick(tempClick);
    let tempFiltedSubCat = subCatergory.filter((item) => {
      return item.parentCategory._id === tempClick.key;
    });
    setFilteredSubCatergory(tempFiltedSubCat);
  };

  // Browse Buttom Click
  const browseClick = () => {
    setOpenBrowse(!openBrowse);
    setMainCatergoryClick({
      open: false,
      key: "",
    });
    setCatergoryClick({
      open: false,
      key: "",
    });
  };

  return (
    <Container>
      <Text onClick={() => browseClick()}>
        Browse
        {!openBrowse ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </Text>
      {openBrowse && (
        <>
          {/*main category browse */}
          <div
            style={{
              margin: "auto",
              width: "80%",
              position: "absolute",
              zIndex: 999,
              top: 128,
              left: -587,
            }}
          >
            <div
              style={{
                margin: "20px 0",
                float: "right",
                background: "white",
                width: "380px",
                position: "relative",
                borderRadius: "3px",
                paddingLeft: 12,
                paddingRight: 12,
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <ul>
                {mainCatergory?.map((item, key) => {
                  return (
                    <>
                      <li
                        style={{
                          marginBottom: "18px",
                          display: "flex",
                          marginLeft: -45,
                        }}
                      >
                        <div
                          style={{
                            height: 40,
                            width: 5,
                            backgroundColor: "red",
                            marginRight: 10,
                          }}
                        ></div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            height: 40,
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => MainCategoryClickToggle(item)}
                        >
                          <span
                            style={{
                              display: "block",
                              fontSize: "16px",
                            }}
                          >
                            {item.value}
                          </span>
                          <KeyboardArrowRightIcon />
                        </div>

                        {/* {catergory.filter((item) => {
                      return item.parentCategory === mainCatergoryClick.key;
                    })} */}
                      </li>
                      {key !== mainCatergory.length - 1 && (
                        <Divider
                          flexItem
                          style={{
                            backgroundColor: "grey",
                            width: "85%",
                            marginTop: -8,
                            opacity: 0.4,
                          }}
                        />
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* end of main category browse */}
          {/* start of parent Category */}
          {filteredCategory.length > 0 && mainCatergoryClick.open && (
            <div
              style={{
                margin: "auto",
                width: "80%",
                position: "absolute",
                zIndex: 888,
                top: 128,
                left: -212.6,
              }}
            >
              <div
                style={{
                  margin: "20px 0",
                  float: "right",
                  background: "white",
                  width: "350px",
                  position: "relative",
                  borderRadius: "3px",
                  paddingLeft: 12,
                  paddingRight: 12,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <ul>
                  {filteredCategory?.map((item, key) => {
                    return (
                      <>
                        <li
                          style={{
                            marginBottom: "18px",
                            display: "flex",
                            marginLeft: -45,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                              height: 40,
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => categoryClickToggle(item)}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "16px",
                              }}
                            >
                              {item.name}
                            </span>
                            <KeyboardArrowRightIcon />
                          </div>
                        </li>
                        {key !== filteredCategory.length - 1 && (
                          <Divider
                            flexItem
                            style={{
                              backgroundColor: "grey",
                              width: "85%",
                              marginTop: -8,
                              opacity: 0.4,
                            }}
                          />
                        )}
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          {/* End of parent Category */}
          {/* start of child Category */}
          {filteredSubCatergory.length > 0 && catergoryClick.open && (
            <div
              style={{
                margin: "auto",
                width: "80%",
                position: "absolute",
                zIndex: 777,
                top: 128,
                left: 161.4,
              }}
            >
              <div
                style={{
                  margin: "20px 0",
                  float: "right",
                  background: "white",
                  width: "350px",
                  position: "relative",
                  borderRadius: "3px",
                  paddingLeft: 12,
                  paddingRight: 12,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <ul>
                  {filteredSubCatergory?.map((item, key) => {
                    return (
                      <>
                        <li
                          style={{
                            marginBottom: "18px",
                            display: "flex",
                            marginLeft: -45,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                              height: 40,
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            // onClick={() => categoryClickToggle(item)}
                          >
                            <span
                              style={{
                                display: "block",
                                fontSize: "16px",
                              }}
                            >
                              {item.name}
                            </span>
                          </div>
                        </li>
                        {key !== filteredSubCatergory.length - 1 && (
                          <Divider
                            flexItem
                            style={{
                              backgroundColor: "grey",
                              width: "85%",
                              marginTop: -8,
                              opacity: 0.4,
                            }}
                          />
                        )}
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          {/* End of child Category */}
        </>
      )}

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
