import { BrowserRouter as Router } from "react-router-dom";
import Admin from "../pages/adminPage/index.js";
import User from "../pages/user/index";

const Routes = () => {
  return (
    <Router>
      <User />
    </Router>
  );
};

export default Routes;
