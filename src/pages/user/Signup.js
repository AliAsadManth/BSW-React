import React, { useState } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !address ||
      !phone
    ) {
      toast.error("All fields are required!");
      setLoading(false);
    } else if (password !== confirmPassword) {
      toast.error("Password and confirm password are not same!");
      setLoading(false);
    } else {
      const data = {
        name,
        email,
        password,
        address,
        phone_no: phone,
      };
      axios
        .post(`${process.env.React_APP_BASE_URL}/user/create`, data)
        .then((res) => {
          if (res.data.err) {
            toast.error(res.data.err);
          } else {
            toast.success(`Verification email sent to ${email}`);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setAddress("");
            setPhone("");
          }
          setLoading(false);
        });
    }
  };
  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header component="Signup" />
      <Menubar />
      <SignupForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        address={address}
        setAddress={setAddress}
        phone={phone}
        setPhone={setPhone}
        onSubmit={onSubmit}
        loading={loading}
      />
      <Footer />
    </div>
  );
};

export default Signup;
