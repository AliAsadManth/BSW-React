import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import InputField from "./InputField";
import { Link } from "react-router-dom";

const Cards = ({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  setOpenModal,
}) => {
  return (
    <Card
      elevation="2"
      sx={{
        width: 400,
        height: 480,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        ["@media (max-width: 420px)"]: {
          width: 300,
        },
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontSize: 32 }} noWrap>
            Login
          </Typography>
          <Link to="/">
            <img
              src="/assets/bsw-logo-small.png"
              alt="BWS"
              style={{ height: 75 }}
            />
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <InputField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "87%", height: "35px", marginTop: "50px" }}
          />
          <InputField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "87%", height: "35px", marginTop: "25px" }}
          />
          <Typography onClick={() => setOpenModal(true)}>
            <Link to="#" style={{ textDecoration: "none" }}>
              Forget Passwrod?
            </Link>
          </Typography>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#ef4b51",
              width: "98%",
              height: "35px",
              marginTop: "50px",
            }}
          >
            Login
          </Button>
        </form>
      </CardContent>

      <CardActions
        style={{
          borderTop: "1px solid grey",
          position: "relative",
          marginTop: 30,
          float: "bottom",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 15,
          }}
        >
          <Typography>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign up for a BWS account
            </Link>
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default Cards;
