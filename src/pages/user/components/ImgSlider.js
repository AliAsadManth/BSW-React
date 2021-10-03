import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";

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
    }
  }
`;

const ImgSlider = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <Carousel autoPlay infiniteLoop centerMode>
        <Wrap>
          <a>
            <img src="https://wallpaperaccess.com/full/1831031.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="https://wallpaperaccess.com/full/1536610.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://cdn.wallpapersafari.com/13/54/n6s37h.jpg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQPsewdioYxdfeRSVplLLE1GiqF3gT8Ou8g&usqp=CAU"
              alt=""
            />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

export default ImgSlider;
