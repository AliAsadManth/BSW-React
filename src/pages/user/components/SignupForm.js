import React from "react";
import styled from "@emotion/styled";
import {
	Typography,
	FormControlLabel,
	Checkbox,
	Button,
	Divider,
} from "@mui/material";
import InputField from "./InputField";
import { display } from "@mui/system";

const Container = styled.div`
	width: 80vw;
	padding: 10px 7.5%;
	margin-left: 3.5rem;
	margin-bottom: 50px;
`;

const SignupForm = () => {
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
				onSubmit={() => console.log("welcome")}
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
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
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
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
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
						password
					</Typography>
					<InputField
						placeholder="Password"
						type="password"
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
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
						Consfirm Password
					</Typography>
					<InputField
						placeholder="Consfirm Password"
						type="password"
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
						style={{ width: "50%", height: "35px", marginTop: "20px" }}
					/>
				</div>
				<FormControlLabel
					control={<Checkbox defaultChecked style={{ color: "grey" }} />}
					label="Remember me"
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
						Phone Number
					</Typography>
					<InputField
						placeholder="Email"
						type="email"
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
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
