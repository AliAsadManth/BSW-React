import React, { useEffect, useState, useContext } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ProfileTabs from "./components/ProfileTabs";
import { toast } from "react-toastify";
import UserContext from "../../context/UserContext";
import axios from "axios";

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.5%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
  @media (max-width: 1100px) {
    width: 90vw;
    margin: 0;
  }
  @media (max-width: 500px) {
    width: 98vw;

    padding: 0 1%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassConfirm, setNewPassConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setPhone(parseInt(user.phone_no));
    }
  }, [user]);

  const onProfileSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !address || !phone) {
      toast.error("All fields are required!");
      setLoading(false);
    } else {
      const data = {
        name,
        email,
        address,
        phone_no: phone,
      };
      axios
        .put(`${process.env.React_APP_BASE_URL}/user/update/${user._id}`, data)
        .then((res) => {
          if (res.data.err) {
            toast.error(res.data.err);
          } else {
            toast.success(res.data.msg);
          }
        });
      setUser((prev) => {
        prev.name = data.name;
        prev.email = data.email;
        prev.address = data.address;
        prev.phone_no = data.phone_no;
        return { ...prev };
      });
      setLoading(false);
    }
  };

  const onPasswordSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!oldPass || !newPass || !newPassConfirm) {
      toast.error("All fields are required!");
      setLoading(false);
    } else if (newPass !== newPassConfirm) {
      toast.error("New password and confirm new password are not same!");
      setLoading(false);
    } else {
      const data = {
        oldPass,
        newPass,
        newPassConfirm,
      };
      axios
        .put(
          `${process.env.React_APP_BASE_URL}/user/update/password/${user._id}`,
          data
        )
        .then((res) => {
          if (res.data.err) {
            toast.error(res.data.err);
          } else {
            toast.success(res.data.msg);
            setOldPass("");
            setNewPass("");
            setNewPassConfirm("");
          }
        });
      setLoading(false);
    }
  };
  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Menubar />
      <Container>
        <Typography style={{ fontSize: 32 }} noWrap>
          My Profile
        </Typography>

        <InnerContainer>
          <ProfileTabs
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            oldPass={oldPass} ///pass start
            setOldPass={setOldPass}
            newPass={newPass}
            setNewPass={setNewPass}
            newPassConfirm={newPassConfirm}
            setNewPassConfirm={setNewPassConfirm} ///end pass
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            address={address}
            setAddress={setAddress}
            phone={phone}
            setPhone={setPhone}
            onProfileSubmit={onProfileSubmit}
            onPasswordSubmit={onPasswordSubmit}
            loading={loading}
          />
        </InnerContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
