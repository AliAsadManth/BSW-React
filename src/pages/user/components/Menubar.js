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
import Switch from "@mui/material/Switch";

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
  @media (max-width: 1230px) {
    padding: 0;
    .searchIcon {
      right: 5rem;
    }
  }
  @media (max-width: 500px) {
    margin-left: -50px;
    margin-right: -50px;
    .searchIcon {
      right: 2rem;
    }
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

const MainCatContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  position: absolute;
  z-index: 888;
  top: 128px;
  left: 160px;
  boxshadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 1230px) {
    top: 108px;
    left: 60px;
  }
  @media (max-width: 500px) {
    top: 108px;
    left: 10px;
  }
`;

const SubCatContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  position: absolute;
  z-index: 888;
  top: 128px;
  left: 564px;
  boxshadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 1230px) {
    top: 108px;
    left: 464px;
  }
  @media (max-width: 1100px) {
    top: 108px;
    left: 60px;
  }
  @media (max-width: 500px) {
    left: 10px;
  }
`;

const ChildCatContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  position: absolute;
  z-index: 888;
  top: 128px;
  left: 968px;
  boxshadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 1230px) {
    top: 108px;
    left: 868px;
  }
  @media (max-width: 1100px) {
    top: 108px;
    left: 60px;
  }
  @media (max-width: 500px) {
    left: 10px;
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
  const [checked, setChecked] = React.useState(false);

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
    setCatergory(tempCat.data.categories);
    setSubCatergory(tempSubCat.data.categories);
  };

  const onSearchClick = () => {
    if (!search) {
      toast.error("Search is empty!");
    } else {
      if (!checked) {
        axios
          .get(
            `${process.env.React_APP_BASE_URL}/product/search?mpn=false&q=${search}`
          )
          .then((res) => {
            setSearchProduct({ query: search, products: res.data, mpn: false });
            history.push("/search");
          });
      } else {
        axios
          .get(
            `${process.env.React_APP_BASE_URL}/product/search?mpn=True&q=${search}`
          )
          .then((res) => {
            setSearchProduct({ query: search, products: res.data, mpn: true });
            history.push("/search");
          });
      }
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
    let tempFiltedCat = catergory?.filter((item) => {
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
    let tempFiltedSubCat = subCatergory?.filter((item) => {
      return item?.parentCategory?._id === tempClick?.key;
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
          <MainCatContainer>
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
          </MainCatContainer>
          {/* end of main category browse */}
          {/* start of parent Category */}
          {filteredCategory.length > 0 && mainCatergoryClick.open && (
            <SubCatContainer>
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
                              height: 40,
                              width: 5,
                              backgroundColor: "blue",
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
            </SubCatContainer>
          )}
          {/* End of parent Category */}
          {/* start of child Category */}
          {filteredSubCatergory.length > 0 && catergoryClick.open && (
            <ChildCatContainer>
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
                              height: 40,
                              width: 5,
                              backgroundColor: "green",
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
                            onClick={() => {
                              history.push(`/catproduct/${item._id}`);
                              setOpenBrowse(false);
                              setMainCatergoryClick({
                                open: false,
                                key: "",
                              });
                              setCatergoryClick({
                                open: false,
                                key: "",
                              });
                            }}
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
            </ChildCatContainer>
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
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
        color="error"
      />
      <Searchbar
        placeholder={
          !checked
            ? "Search Product By Name"
            : "Search Product By Manufacturing Part Number"
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="searchIcon" onClick={() => onSearchClick()} />
    </Container>
  );
};

export default Menubar;
