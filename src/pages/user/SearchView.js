import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import styled from "@emotion/styled";

const Content = styled.div`
  margin-left: -20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const SearchView = () => {
  const { searchProduct } = useContext(UserContext);

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Header component="ProductView" />
      <Menubar />
      <div
        style={{
          width: "80vw",
          padding: "10px 7.7%",
          marginLeft: "3.5rem",
          marginBottom: "50px",
        }}
      >
        <span style={{ fontSize: 24 }}>
          <b>{searchProduct?.products?.products?.length}</b> products found for{" "}
          <b>"{searchProduct.query}"</b>
        </span>
        <Content>
          {console.log(searchProduct)}
          {searchProduct?.products?.products?.map((item) => {
            return (
              <Card
                name={item.name}
                price={item.price}
                image={`${process.env.React_APP_BASE_URI}${item.image}`}
                description={item.description}
                product={item}
              />
            );
          })}
        </Content>
      </div>
      <Footer />
    </div>
  );
};

export default SearchView;
