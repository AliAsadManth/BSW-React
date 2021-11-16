import React, { useContext, useEffect } from "react";
import Routes from "./utils/routes";
import UserContext from "./context/UserContext";
import axios from "axios";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  axios.defaults.withCredentials = true;
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    checkLogin();
    //eslint-disable-next-line
  }, []);

  const checkLogin = async () => {
    const result = await axios.patch(
      `${process.env.React_APP_BASE_URL}/user/loggedin`
    );
    if (!result.data.error) {
      setUser(result.data.user);
    }
  };
  return (
    <>
      {/* toastify Container for Notification */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        transition={Flip}
      />
      {/* Routes */}
      <Routes />
    </>
  );
}

export default App;
