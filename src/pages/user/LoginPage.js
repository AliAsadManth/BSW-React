import styled from "@emotion/styled";
import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import UserContext from "../../context/UserContext";

const Container = styled.nav`
	background-color: #e6e6e6;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
`;

const LoginPage = () => {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			alert("Both email and password are required!");
		} else {
			const data = {
				email,
				password,
			};
			axios
				.post(`${process.env.React_APP_BASE_URL}/user/login`, data)
				.then((res) => {
					if (res.data.error) {
						alert(res.data.error);
					} else {
						setUser(res.data);
						history.push("/");
					}
				});
		}
	};

	return (
		<Container>
			<LoginCard
				email={email}
				setEmail={setEmail}
				password={password}
				setPassword={setPassword}
				onSubmit={onSubmit}
			/>
		</Container>
	);
};

export default LoginPage;
