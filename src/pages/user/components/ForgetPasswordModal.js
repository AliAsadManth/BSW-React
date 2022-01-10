import React from "react";
import { Modal, Typography, Box, Button } from "@mui/material";
import InputField from "./InputField";

const ForgetPasswordModal = ({
  email,
  setEmail,
  open,
  setOpen,
  onModalSubmit,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          ["@media (max-width: 420px)"]: {
            width: 280,
          },
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Reset Your Password
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} gutterBottom>
          Enter your email to receive new password:
        </Typography>
        <InputField
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "87%", height: "35px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 10,
          }}
        >
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "red",
              height: "35px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "flex-end",
            }}
            onClick={() => onModalSubmit()}
          >
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ForgetPasswordModal;
