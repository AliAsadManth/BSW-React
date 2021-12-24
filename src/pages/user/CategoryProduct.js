import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Card from "./components/Cards";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import axios from "axios";

const Content = styled.div`
  margin-left: -20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const CategoryProduct = () => {
  const params = useParams();
  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, [params.id]);
  const fetchData = async () => {
    let temp = await axios.get(
      `${process.env.React_APP_BASE_URL}/product/getByCatId/${params.id}`
    );
    console.log("temppppp: ", temp);
    setCatProducts(temp.data);
  };
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
      </div>
      <Footer />
    </div>
  );
};

export default CategoryProduct;
