import React, { useState } from "react";
import { Modal, Typography, Box, Button } from "@mui/material";
import { useHistory } from "react-router";
import GuestRegisterModal from "./GuestRegisterModal";

const GuestUserModal = ({ open, setOpen }) => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
            width: 450,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notice!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} gutterBottom>
            You either have to login as a user or as a guest to continue!
          </Typography>
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
                backgroundColor: "#A9A9A9",
                height: "35px",
                marginTop: "10px",
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 10,
              }}
              onClick={() => {
                setOpen(false);
                setModalOpen(true);
              }}
            >
              Guest
            </Button>
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
              onClick={() => history.push("/login")}
            >
              User
            </Button>
          </div>
        </Box>
      </Modal>
      <GuestRegisterModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};

export default GuestUserModal;
