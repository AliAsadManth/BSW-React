import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserContext";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import styled from "@emotion/styled";
import PaginationRounded from "./components/Pagination";
import axios from "axios";

const Content = styled.div`
  margin-left: -20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1230px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.7%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
  @media (max-width: 720px) {
    width: 100vw;

    margin: 0;
  }
  @media (max-width: 500px) {
    padding: 0 1%;
  }
`;

const SearchView = () => {
  const { searchProduct, setSearchProduct } = useContext(UserContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchProduct?.query && onPageChange();
  }, [page]);

  const onPageChange = () => {
    axios
      .get(
        `${process.env.React_APP_BASE_URL}/product/search?mpn=${searchProduct?.mpn}&q=${searchProduct?.query}&page=${page}`
      )
      .then((res) => {
        setSearchProduct({
          query: searchProduct?.query,
          products: res.data,
          mpn: searchProduct?.mpn,
        });
      });
  };

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Header component="ProductView" />
      <Menubar page={page} />
      <Container>
        <span style={{ fontSize: 24 }}>
          <b>{searchProduct?.products?.products?.length}</b> products found for{" "}
          <b>"{searchProduct.query}"</b>
        </span>
        <Content>
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
        <PaginationRounded
          page={page}
          count={searchProduct?.products?.total_pages}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default SearchView;
