import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Card from "./Cards";
import axios from "axios";

const Container = styled.div`
  width: 80vw;
  padding: 10px 6%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Text = styled.p`
  margin-left: 20px;
  font-size: 24px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const ProductsRow = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let temp = await axios.get(
      `${process.env.React_APP_BASE_URL}/product/getlatest`
    );
    let temp2 = await axios.get(
      `${process.env.React_APP_BASE_URL}/product/featured`
    );
    setRecentProducts(temp.data);
    setFeaturedProducts(temp2.data);
  };
  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      <Container>
        <Text>
          <b>Recent Products</b>
        </Text>
        <Content>
          {recentProducts.map((item) => {
            return (
              <Card
                name={item.name}
                price={item.price}
                image={`${process.env.React_APP_BASE_URI}${item.image[0]}`}
                description={item.description}
                product={item}
              />
            );
          })}
        </Content>
        <Text>
          <b>Featured Products</b>
        </Text>
        <Content>
          {featuredProducts.map((item) => {
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
      </Container>
    </div>
  );
};

export default ProductsRow;
