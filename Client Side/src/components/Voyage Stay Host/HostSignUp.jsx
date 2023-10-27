import "./VoyageStayHost.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  border: "1px solid black",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: 5,
  borderRadius: "8px",
};

function HostSignUp() {
  const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRegistartion = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="" onSubmit={handleRegistartion}>
            <p>Host Registration</p>
            <label htmlFor="name">
              Name:
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Email:
              <input type="text" id="email" />
            </label>
            <label htmlFor="phone">
              Name:
              <input type="text" id="phone" />
            </label>
            <label htmlFor="password">
              Name:
              <input type="text" id="password" />
            </label>
            <button type="submit">Register</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default HostSignUp;
