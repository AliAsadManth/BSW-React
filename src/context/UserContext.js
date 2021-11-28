import React, { useState } from "react";
const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [searchProduct, setSearchProduct] = useState({
    query: "",
    products: [],
  });

  return (
    <UserContext.Provider
      value={{ user, setUser, searchProduct, setSearchProduct, cart, setCart }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
