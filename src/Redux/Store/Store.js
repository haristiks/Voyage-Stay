import { configureStore } from "@reduxjs/toolkit";
import LoginModal from "../Reducers/useLoginModal";
import useRegisterModal from "../Reducers/useRegisterModal";

export default configureStore({
    reducer:{
        LoginModalIsOpen:LoginModal,
        RegisterModalIsOpen:useRegisterModal,
    }
})