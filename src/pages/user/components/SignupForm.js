import React, { useState } from "react";
import styled from "@emotion/styled";
import {
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	Divider,
} from "@mui/material";
import InputField from "./InputField";

const Container = styled.div`
	width: 80vw;
	padding: 10px 7.5%;
	margin-left: 3.5rem;
	margin-bottom: 50px;
`;

const SignupForm = ({
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	showPassword,
	setShowPassword,
	address,
	setAddress,
	phone,
	setPhone,
	onSubmit,
}) => {
	return (
		<Container>
			<Typography style={{ fontSize: 32 }} noWrap>
				Register
			</Typography>
			<Typography style={{ fontSize: 14, color: "grey" }} noWrap>
				All fields are required!
			</Typography>
			<Divider
				flexItem
				style={{
					backgroundColor: "grey",
					width: 1045,
					marginTop: 20,
					opacity: 0.4,
				}}
			/>
			<form
				onSubmit={onSubmit}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "60%",
					}}
				>
					<Typography
						style={{ fontSize: 18, color: "grey", marginTop: 15 }}
						noWrap
					>
						Name
					</Typography>
					<InputField
						placeholder="Name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "60%",
					}}
				>
					<Typography
						style={{ fontSize: 18, color: "grey", marginTop: 15 }}
						noWrap
					>
						Email
					</Typography>
					<InputField
						placeholder="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "60%",
					}}
				>
					<Typography
						style={{ fontSize: 18, color: "grey", marginTop: 15 }}
						noWrap
					>
						Password
					</Typography>
					<InputField
						placeholder="Password"
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "60%",
					}}
				>
					<Typography
						style={{ fontSize: 18, color: "grey", marginTop: 15 }}
						noWrap
					>
						Confirm Password
					</Typography>
					<InputField
						placeholder="Consfirm Password"
						type={showPassword ? "text" : "password"}
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<FormControlLabel
					control={
						<Checkbox
							checked={showPassword}
							onChange={(e) => setShowPassword(e.target.checked)}
							style={{ color: "grey" }}
						/>
					}
					label="Show Password"
					style={{ color: "grey", marginLeft: "19.2%" }}
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "60%",
					}}
				>
					<Typography
						style={{ fontSize: 18, color: "grey", marginTop: 15 }}
						noWrap
					>
						Address
					</Typography>
					<InputField
						placeholder="Address"
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "60%",
					}}
				>
					<Typography
						style={{ fontSize: 18, color: "grey", marginTop: 15 }}
						noWrap
					>
						Phone Number
					</Typography>
					<InputField
						placeholder="Phone Number"
						type="Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<Divider
					flexItem
					style={{
						backgroundColor: "grey",
						width: 1045,
						marginTop: 20,
						opacity: 0.4,
					}}
				/>
				<Button
					variant="contained"
					type="submit"
					style={{
						backgroundColor: "red",
						width: "10%",
						height: "35px",
						marginTop: "20px",
					}}
				>
					Register
				</Button>
			</form>
		</Container>
	);
};

export default SignupForm;
