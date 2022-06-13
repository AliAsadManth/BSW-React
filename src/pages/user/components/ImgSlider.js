import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;
  a {
    display: block;
    position: relative;
    margin: 0px 5px;
    img {
      height: 55vh;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
      margin-left: auto;
      border: 2px solid rgba(249, 249, 249, 0.1);
      margin-right: auto;
      border-radius: 4px;
      @media (max-width: 1230px) {
        height: 40vh;
      }
      @media (max-width: 700px) {
        height: 30vh;
      }
      @media (max-width: 500px) {
        height: 25vh;
      }
    }
  }
`;

const ImgSlider = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let temp = await axios.get(
      `${process.env.React_APP_BASE_URL}/slider/active`
    );
    setSlider(temp.data);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <Carousel autoPlay infiniteLoop centerMode showThumbs={false}>
        {slider?.map((item) => {
          console.log(`${process.env.React_APP_BASE_URI}${item.image}`);

          return (
            <Wrap>
              <a>
                <img
                  src={`${process.env.React_APP_BASE_URI}${item.image}`}
                  alt=""
                />
              </a>
            </Wrap>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImgSlider;
