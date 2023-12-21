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

function HostLogin() {
  const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogin = (e) => {
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
          <form action="" onSubmit={handleLogin}>
            <p>Please Login</p>
            <label htmlFor="email">
              Email-id:
              <input type="text" id="email" />
            </label>
            <label htmlFor="password">
              Password:
              <input type="text" id="password" />
            </label>
            <button type="submit">Login</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default HostLogin;
