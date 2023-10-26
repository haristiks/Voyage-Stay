import logo from "../../assets/Logo/VoyageStaylogo.png";
import "./VoyageStayHost.css";
import * as React from "react";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid black",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "8px",
  borderRadius: "8px",
};
function HostHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mobile = e.target.phone.value;
    const response = await axios.get(`http://localhost:8000/api/isuser/${mobile}`
    );
    console.log(response.data);
  };

  return (
    <div className="host-nav">
      <img src={logo} alt="Voyage-Stay-logo" className="navbar-logo" />
      <div className="try-host">
        <p>Ready to Host ?</p>
        <button className="try-host-btn" onClick={handleOpen}>
          Try Voyage Stay Host
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}

        <form action="" style={style} onSubmit={handleSubmit}>
          <p>Welcome to Voyage Stay</p>
          <p>+91</p>
          <input type="text" placeholder="Phone number" id="phone" />
          <button type="submit">Continue</button>
          <div>
            <div></div>
            <div>or</div>
            <div></div>
          </div>
          <button>Continue with Google</button>
        </form>
        {/* </Box> */}
      </Modal>
    </div>
  );
}

export default HostHeader;
