import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import Card from "./Cards";
import axios from "axios";
import FeaturedCard from "./FeaturedCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UserContext from "../../../context/UserContext";

const Container = styled.div`
  width: 80vw;
  padding: 10px 6%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
  @media (max-width: 1230px) {
    padding: 0;
    margin: 0;
    width: 100vw;
  }
`;

const ContentRecent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ContentFeatured = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Text = styled.p`
  margin-left: 20px;
  font-size: 24px;
  align-items: center;
  justify-content: space-between;
`;

const ProductsRow = () => {
  const { user } = useContext(UserContext);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let temp = await axios.get(`${process.env.React_APP_BASE_URL}/product/getlatest`);
    let temp2 = await axios.get(`${process.env.React_APP_BASE_URL}/product/featured`);
    let temp3 = [];
    if (user) {
      temp3 = await axios.get(`${process.env.React_APP_BASE_URL}/product/recommended/${user._id}`);
    } else {
      temp3 = await axios.get(`${process.env.React_APP_BASE_URL}/product/recommended/null`);
    }
    setRecommendedProducts(temp3.data.recommeded);
    setRecentProducts(temp.data);
    setFeaturedProducts(temp2.data);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container>
        <Text>
          <b>Recommeded For You</b>
        </Text>
        <Carousel
          Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={2500}
          centerMode={true}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {recommendedProducts?.map((item) => {
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
        </Carousel>

        <Text>
          <b>Featured Products</b>
        </Text>
        <ContentFeatured>
          {featuredProducts.map((item) => {
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
        </ContentFeatured>
        <Text>
          <b>Recent Products</b>
        </Text>
        <ContentRecent>
          {recentProducts.map((item) => {
            return (
              <FeaturedCard
                name={item.name}
                price={item.price}
                image={`${process.env.React_APP_BASE_URI}${item.image}`}
                description={item.description}
                product={item}
              />
            );
          })}
        </ContentRecent>
      </Container>
    </div>
  );
};

export default ProductsRow;
