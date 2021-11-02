import React from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({ name, image, description, price, product }) => {
	return (
		<Card
			elevation="2"
			style={{
				margin: 20,
				width: 245,
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
		>
			<CardMedia component="img" height="160" image={image} alt="Paella dish" />
			<CardContent
				style={{
					textAlign: "left",
					marginLeft: -8,
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography style={{ fontSize: 18 }} noWrap>
						<b>{name}</b>
					</Typography>
					<Typography style={{ fontSize: 12 }} noWrap>
						<b>${price}</b>
					</Typography>
				</div>
				<Typography style={{ fontSize: 16 }} noWrap>
					{description}
				</Typography>
			</CardContent>
			<CardActions
				style={{
					borderTop: "1px solid grey",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Typography>
						<a
							style={{ textDecoration: "none" }}
							href={`/product/${product._id}`}
						>
							View Product
						</a>
					</Typography>
				</div>
			</CardActions>
		</Card>
	);
};

export default Cards;
