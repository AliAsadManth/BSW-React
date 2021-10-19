import styled from "@emotion/styled";
import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginCard from "./components/LoginCard";
import UserContext from "../../context/UserContext";
import ForgetPasswordModal from "./components/ForgetPasswordModal";

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
	const [modalEmail, setmodalEmail] = useState("");
	const [openModal, setOpenModal] = useState(false);

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
					if (res.data === "Invalid email or password") {
						alert("Invalid email or password");
					} else {
						setUser(res.data);
						history.push("/");
						alert("Logged in Successfully!");
					}
				});
		}
	};

	const onModalSubmit = () => {
		if (!modalEmail) {
			alert("Email is required!");
		} else {
			const data = {
				email: modalEmail,
			};
			axios
				.put(`${process.env.React_APP_BASE_URL}/user/forgetpassword`, data)
				.then((res) => {
					alert(res.data.msg);
				})
				.catch((err) => {
					alert(err.response.data.err);
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
	);
};

export default LoginPage;
