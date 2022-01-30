import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import { useParams } from "react-router";
import axios from "axios";
import moment from "moment";
import { Button } from "@mui/material";
import Card from "./components/Cards";
import UserContext from "../../context/UserContext";
import { toast } from "react-toastify";
import GuestUserModal from "./components/GuestUserModal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Text = styled.p`
  font-size: 24px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  width: 80vw;
  padding: 10px 7.7%;
  margin-left: 3.5rem;
  marginbottom: 50px;
  @media (max-width: 900px) {
    width: 100vw;
    margin-left: 0;
  }
  @media (max-width: 500px) {
    padding: 10px 2.5%;
    margin-left: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

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

const ImageGalleryContainer = styled.div`
  position: relative;
  object-fit: fill;
  width: 50%;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const ProdunctView = () => {
  const params = useParams();
  const { user, cart, setCart, setAmount } = useContext(UserContext);

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [gallery, setGallery] = useState([
    {
      original: "https://via.placeholder.com/1000x600?text=No+Image+1",
    },
  ]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let temp = await axios.get(
      `${process.env.React_APP_BASE_URL}/product/${params.id}`
    );
    let tempgallery = [];

    temp.data.product.image.map((item) => {
      tempgallery.push({
        original: `${process.env.React_APP_BASE_URI}${item}`,
      });
    });
    tempgallery.length > 0 && setGallery(tempgallery);
    setProduct(temp.data.product);
    setRelatedProduct(temp.data.relatedProducts);
  };

  const addToCart = async () => {
    if (quantity <= 0) {
      toast.error("Quatity should be greater than 0");
    } else if (!user?._id) {
      setOpenModal(true);
    } else {
      const data = {
        productId: product._id,
        quatity: quantity,
      };
      const temp = await axios.post(
        `${process.env.React_APP_BASE_URL}/cart/add/${user._id}`,
        data
      );
      toast.success(temp.data.msg);
      const res = await axios.get(
        `${process.env.React_APP_BASE_URL}/cart/${user._id}`
      );
      setCart(res?.data?.cart);
      setAmount(res?.data?.calc);
    }
  };

  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header component="ProductView" />
      <Menubar />
      <InnerContainer>
        <Text style={{ marginBottom: -10 }}>
          <b>{product.name}</b>
        </Text>
        <Text style={{ fontSize: "16px" }}>
          {moment(product.createdAt).format("MM-DD-YYYY")}
        </Text>
        <FlexContainer>
          <ImageGalleryContainer>
            <ImageGallery
              items={gallery}
              showIndex={true}
              onErrorImageURL="https://via.placeholder.com/1000x600?text=No+Image+1"
            />
            {product?.pdf && (
              <a
                href={`${process.env.React_APP_BASE_URI}${product.pdf}`}
                target="_blank"
              >
                Click Here For Product PDF
              </a>
            )}
          </ImageGalleryContainer>

          <div
            style={{
              display: "grid",
              placeItems: "center",
              width: "35vw",
            }}
          >
            <div>
              <Text style={{ marginBottom: 10 }}>
                <b>${product.price}</b> Per Piece
              </Text>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: "lightgray",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
                    }
                  >
                    <RemoveIcon />
                  </div>

                  <input
                    type="Number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    disabled
                    style={{
                      width: 35,
                      height: 30,
                      paddingLeft: 10,
                      backgroundColor: "white",
                    }}
                  />
                  <div
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: "lightgray",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                      marginRight: 10,
                    }}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <AddIcon />
                  </div>
                </div>

                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: quantity !== 0 && "#ef4b51",
                    width: 135,
                  }}
                  disabled={quantity === 0}
                  onClick={addToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </FlexContainer>
        <Text>
          <b>Product Description</b>
        </Text>
        <Text style={{ marginTop: -10, fontSize: 18 }}>
          {product.description}
        </Text>
        <Text>
          <b>Related Products</b>
        </Text>
        <Content>
          {relatedProduct?.map((item) => {
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
        <GuestUserModal open={openModal} setOpen={setOpenModal} />
      </InnerContainer>
      <Footer />
    </div>
  );
};

export default ProdunctView;
