import React, { useState } from "react";
const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState();
  const [amount, setAmount] = useState();
  const [searchProduct, setSearchProduct] = useState({
    query: "",
    mpn: false,
    products: [],
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        searchProduct,
        setSearchProduct,
        cart,
        setCart,
        amount,
        setAmount,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
