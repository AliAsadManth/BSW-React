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

const Text = styled.p`
  font-size: 24px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Picture = styled.img`
  object-fit: fill;
  height: 75vh;
  width: 50vw;
`;

const Content = styled.div`
  margin-left: -20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const ProdunctView = () => {
  const params = useParams();
  const { user, cart, setCart, setAmount } = useContext(UserContext);

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let temp = await axios.get(
      `${process.env.React_APP_BASE_URL}/product/${params.id}`
    );
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
      {console.log(cart)}
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
        <Text style={{ marginBottom: -10 }}>
          <b>{product.name}</b>
        </Text>
        <Text style={{ fontSize: "16px" }}>
          {moment(product.createdAt).format("MM-DD-YYYY")}
        </Text>
        <div style={{ display: "flex" }}>
          <Picture src={`${process.env.React_APP_BASE_URI}${product.image}`} />
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

              <input
                type="Number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{
                  width: 35,
                  height: 29,
                  marginRight: 10,
                  paddingLeft: 10,
                }}
              />
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "red",
                }}
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default ProdunctView;
