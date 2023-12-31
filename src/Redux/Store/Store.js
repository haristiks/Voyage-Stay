import { configureStore } from "@reduxjs/toolkit";
import LoginModal from "../Reducers/useLoginModal";
import useRegisterModal from "../Reducers/useRegisterModal";
import useRentModal from "../Reducers/useRentModal";
import currentUserSlice from "../Reducers/currentUserSlice";
import propertyListingsSlice from "../Reducers/propertyListingsSlice";

export default configureStore({
  reducer: {
    LoginModalIsOpen: LoginModal,
    RegisterModalIsOpen: useRegisterModal,
    RentModalIsOpen: useRentModal,
    currentUser:currentUserSlice,
    ListingState:propertyListingsSlice
  },
});
