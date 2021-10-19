import React, { useState } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import SignupForm from "./components/SignupForm";
import Footer from "./components/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
	const history = useHistory();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			!name ||
			!email ||
			!password ||
			!confirmPassword ||
			!address ||
			!phone
		) {
			alert("All fields are required!");
		} else if (password !== confirmPassword) {
			alert("Password and confirm password are not same!");
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
					if (res.data.error) {
						alert(res.data.error);
					} else {
						setName("");
						setEmail("");
						setPassword("");
						setConfirmPassword("");
						setAddress("");
						setPhone("");
						alert(`Verification email sent to ${email}`);
					}
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
			/>
			<Footer />
		</div>
	);
};

export default Signup;
