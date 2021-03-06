import styled from "@emotion/styled";
import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import UserContext from "../../context/UserContext";
import ForgetPasswordModal from "./components/ForgetPasswordModal";
import { toast } from "react-toastify";
// import LoginGif from "../../../public/assets/93385-login.gif";

const Container = styled.nav`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const LoginPage = () => {
  const { setUser, setCart, setAmount } = useContext(UserContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalEmail, setmodalEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Both email and password are required!");
    } else {
      const data = {
        email,
        password,
      };
      const result = await axios.post(
        `${process.env.React_APP_BASE_URL}/user/login`,
        data
      );
      if (result.data === "Invalid email or password") {
        toast.error("Invalid email or password");
      } else {
        try {
          setUser(result.data);
          const res = await axios.get(
            `${process.env.React_APP_BASE_URL}/cart/${result.data._id}`
          );
          setCart(res.data.cart);
          setAmount(res.data.calc);
          history.push("/");
          toast.success("Logged in Successfully!");
        } catch (err) {
          console.log("err", err.response);
        }
      }
    }
  };

  const onModalSubmit = () => {
    if (!modalEmail) {
      toast.error("Email is required!");
    } else {
      const data = {
        email: modalEmail,
      };
      axios
        .put(`${process.env.React_APP_BASE_URL}/user/forgetpassword`, data)
        .then((res) => {
          toast.success(res.data.msg);
        })
        .catch((err) => {
          toast.error(err.response.data.err);
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: "800px", width: "800px" }}>
        <iframe
          style={{ border: "none", height: "800px", width: "800px" }}
          src="https://embed.lottiefiles.com/animation/93385"
        ></iframe>
      </div>
      <Container>
        <LoginCard
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
          setOpenModal={setOpenModal}
        />
        <ForgetPasswordModal
          email={modalEmail}
          setEmail={setmodalEmail}
          open={openModal}
          setOpen={setOpenModal}
          onModalSubmit={onModalSubmit}
        />
      </Container>
    </div>
  );
};

export default LoginPage;
