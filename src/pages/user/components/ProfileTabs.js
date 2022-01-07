import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import InputField from "./InputField";
import { Button, FormControlLabel, Checkbox } from "@mui/material";

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  @media (max-width: 1230px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    display: block;
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  name,
  setName,
  email,
  setEmail,
  showPassword,
  setShowPassword,
  address,
  setAddress,
  phone,
  setPhone,
  onProfileSubmit,
  loading,
  oldPass,
  setOldPass,
  newPass,
  setNewPass,
  newPassConfirm,
  setNewPassConfirm,
  onPasswordSubmit,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Security" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <form
          onSubmit={onProfileSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <InnerContainer>
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
              style={{
                width: "55%",
                height: "35px",
                marginTop: "20px",
              }}
            />
          </InnerContainer>
          <InnerContainer>
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
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <InnerContainer>
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
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <InnerContainer>
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
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "red",
              width: 95,
              height: "35px",
              marginTop: "20px",
              color: "white",
            }}
            disabled={loading}
          >
            {loading ? <>Loading...</> : <>Update</>}
          </Button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form
          onSubmit={onPasswordSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <InnerContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Old Password
            </Typography>
            <InputField
              placeholder="Old Password"
              type={showPassword ? "text" : "password"}
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <InnerContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              New Password
            </Typography>
            <InputField
              placeholder="New Password"
              type={showPassword ? "text" : "password"}
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <InnerContainer>
            <Typography
              style={{ fontSize: 18, color: "grey", marginTop: 15 }}
              noWrap
            >
              Confirm New Password
            </Typography>
            <InputField
              placeholder="Consfirm New Password"
              type={showPassword ? "text" : "password"}
              value={newPassConfirm}
              onChange={(e) => setNewPassConfirm(e.target.value)}
              style={{ width: "55%", height: "35px", marginTop: "20px" }}
            />
          </InnerContainer>
          <InnerContainer>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  style={{ color: "grey", marginLeft: 8 }}
                />
              }
              label="Show Password"
              style={{ color: "grey", marginLeft: -20 }}
            />
          </InnerContainer>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "red",
              width: 95,
              height: "35px",
              marginTop: "20px",
              color: "white",
            }}
            disabled={loading}
          >
            {loading ? <>Loading...</> : <>Update</>}
          </Button>
        </form>
      </TabPanel>
    </Box>
  );
}
