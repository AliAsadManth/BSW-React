import React, { useContext, useEffect } from "react";
import Routes from "./utils/routes";
import UserContext from "./context/UserContext";
import axios from "axios";
function App() {
	axios.defaults.withCredentials = true;
	const { setUser } = useContext(UserContext);
	useEffect(() => {
		checkLogin();
		//eslint-disable-next-line
	}, []);

	const checkLogin = async () => {
		const result = await axios.patch(
			`${process.env.React_APP_BASE_URL}/user/loggedin`,
		);
		if (!result.data.error) {
			setUser(result.data.user);
		}
		console.log("result", result);
	};
	return <Routes />;
}

export default App;
