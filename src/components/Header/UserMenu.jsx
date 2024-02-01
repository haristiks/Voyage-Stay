import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
// import { signOut } from "next-auth/react";

import useRegisterModal from "../../hooks//useRegisterModal";
// import useRentModal from "@/app/hooks/useRentModal";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../../Redux/Reducers/useLoginModal";
import { RMonOpen } from "../../Redux/Reducers/useRegisterModal";
import { RTMonOpen } from "../../Redux/Reducers/useRentModal";
import { logout } from "../../Redux/Reducers/currentUserSlice";
import toast from "react-hot-toast";

function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const registerModal = useRegisterModal();
  //   const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(onOpen());
    toggleOpen();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    toast.success("logout successfull");
    toggleOpen();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(RMonOpen());
    toggleOpen();
  };

  //   const onRent = useCallback(() => {
  //     if (!currentUser) {
  //       return loginModal.onOpen();
  //     }
  //     rentModal.onOpen();
  //   }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 ">
        <div
          onClick={() => {
            dispatch(RTMonOpen());
          }}
          className="
             hidden
             md:block
             text-sm
             font-semibold
             py-3
             px-4
             rounded-full
             hover:bg-neutral-100
             transition
             cursor-pointer
            "
        >
          Host a Property
        </div>
        <div
          onClick={toggleOpen}
          className="
             p-4
             md:py-1
             md:px-2
             border-[1px]
             border-neutral-200
             flex
             flex-row
             items-center
             gap-3
             rounded-full
             cursor-pointer
             hover:shadow-md
             transition
            "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {currentUser ? <Avatar src={currentUser.image} /> : <Avatar />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    navigate("/trips");
                    toggleOpen();
                  }}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => {
                    navigate("/favorites");
                    toggleOpen();
                  }}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => {
                    navigate("/reservations");
                    toggleOpen();
                  }}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => {
                    navigate("/properties");
                    toggleOpen();
                  }}
                  label="My properties"
                />
                <MenuItem onClick={() => {}} label="VoyageStay Host" />
                <hr />
                <MenuItem onClick={handleLogout} label="Lgout" />
              </>
            ) : (
              <>
                <MenuItem onClick={handleLogin} label="Login" />
                <MenuItem onClick={handleRegister} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
