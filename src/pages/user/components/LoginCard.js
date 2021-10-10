import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  CardActions,
} from "@mui/material";
import InputField from "./InputField";
import { Link } from "react-router-dom";



const Cards = () => {
  return (
    <Card
      elevation="2"
      style={{
        width: 400,
        height: 480,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
        <Link to="/"><img src="/assets/bsw-logo-small.png" alt="BWS" style={{height:75}} /></Link>
        </div>
        <InputField placeholder="Email" style={{width:"87%",height:"35px",marginTop:"50px"}} />
        <InputField placeholder="Password" style={{width:"87%",height:"35px",marginTop:"25px"}} />
        <FormControlLabel control={<Checkbox defaultChecked style={{color:"grey"}} />} label="Remember me" style={{marginTop:"20px" ,color:"grey"}} />
        <Button variant="contained" style={{backgroundColor:"red",width:"98%",height:"35px",marginTop:"20px"}}>Login</Button>
      </CardContent>

      <CardActions
        style={{
          borderTop: "1px solid grey",
          position: "relative",
          marginTop:30,
          float:"bottom"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop:15
          }}
        >
          <Typography>
            <Link style={{ textDecoration: "none" }}>Sign up for a BWS account</Link>
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default Cards;
