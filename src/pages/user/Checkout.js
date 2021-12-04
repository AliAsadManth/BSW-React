import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import UserContext from "../../context/UserContext";
import CheckoutPage from "./components/CheckoutPage";
import axios from "axios";

const Checkout = () => {
  const { user, amount, cart } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user?.phone_no?.slice(3));
  }, [user]);

  const onCheckout = async () => {
    let body = {
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: name,
            },
            unit_amount: parseInt(amount.grandTotal) * 100,
          },
          quantity: 1,
        },
      ],
      metaData: {
        booking: cart._id,
      },
    };
    const result = await axios.patch(
      `${process.env.React_APP_BASE_URL}/order/checkout`,
      body
    );
    window.location = result.data.url;
  };

  return (
    <div>
      <Header component="Signup" />
      <Menubar />
      <CheckoutPage
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        address={address}
        setAddress={setAddress}
        phone={phone}
        setPhone={setPhone}
        amount={amount}
        onCheckout={onCheckout}
      />
      <Footer />
    </div>
  );
};

export default Checkout;
