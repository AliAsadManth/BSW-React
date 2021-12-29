import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
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

const CategoryProduct = () => {
  const params = useParams();
  const [catProducts, setCatProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [params.id, page]);

  const fetchData = async () => {
    let temp = await axios.get(
      `${process.env.React_APP_BASE_URL}/product/getByCatId/${params.id}?page=${page}`
    );
    setCatProducts(temp.data);
  };

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Header component="ProductView" />
      <Menubar />
      <Container>
        <span style={{ fontSize: 24 }}>
          <b>"{catProducts?.products?.length}"</b> results found
        </span>
        <Content>
          {catProducts?.products?.map((item) => {
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
          count={catProducts?.total_pages}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryProduct;
