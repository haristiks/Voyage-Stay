import logo from "../../assets/Logo/VoyageStaylogo.png";
import "./VoyageStayHost.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { notHost, yesHost } from "../../Redux/Reducers/VoyageReducer";
import { useNavigate } from "react-router-dom";

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
function HostHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mobile = e.target.phone.value;
    const response = await axios.get(
      `http://localhost:8000/api/ishost/${mobile}`
    );
    console.log(response.data);
    if (response.data.message == "User not found") {
      dispatch(notHost());
    } else if (response.data.message == "host user") {
      dispatch(yesHost());
    }
    navigate('/hostLoginOrSignUp')
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
        <Box sx={style}>
          <form action="" onSubmit={handleSubmit}>
            <p>Welcome to Voyage Stay</p>
            <p>+91</p>
            <input type="text" placeholder="Phone number" id="phone" />
            <button type="submit">Continue</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default HostHeader;
