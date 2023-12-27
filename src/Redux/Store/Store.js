import { configureStore } from "@reduxjs/toolkit";
import LoginModal from "../Reducers/useLoginModal";
import useRegisterModal from "../Reducers/useRegisterModal";
import useRentModal from "../Reducers/useRentModal";

export default configureStore({
  reducer: {
    LoginModalIsOpen: LoginModal,
    RegisterModalIsOpen: useRegisterModal,
    RentModalIsOpen: useRentModal,
  },
});
