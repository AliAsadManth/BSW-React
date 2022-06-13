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
        boxShadow: "none",
        ["@media (max-width: 420px)"]: {
          width: 300,
        },
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Typography style={{ fontSize: 32 }} noWrap>
            Login
          </Typography> */}
          <Link to="/">
            <img
              src="/assets/bsw-logo-small.png"
              alt="BWS"
              style={{
                width: "9rem",
              }}
            />
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <InputField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "87%", height: "45px", marginTop: "30px" }}
          />
          <InputField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "87%", height: "45px", marginTop: "20px" }}
          />
          <Typography
            style={{ marginTop: "5px" }}
            onClick={() => setOpenModal(true)}
          >
            <Link
              to="#"
              style={{
                textDecoration: "none",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              Forget Passwrod?
            </Link>
          </Typography>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#ef4b51",
              width: "98%",
              height: "45px",
              marginTop: "30px",
            }}
          >
            Login
          </Button>
        </form>
      </CardContent>

      <CardActions>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 5,
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
