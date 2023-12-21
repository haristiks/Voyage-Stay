import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
// import { signOut } from "next-auth/react";

// import useRegisterModal from "@/app/hooks/useRegisterModal";
// import useLoginModal from "@/app/hooks/useLoginModal";
// import useRentModal from "@/app/hooks/useRentModal";


import { useNavigate } from "react-router-dom";

function UserMenu({ currentUser }) {
  const navigate = useNavigate();

//   const registerModal = useRegisterModal();
//   const loginModal = useLoginModal();
//   const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

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
          onClick={()=>navigate('/voyageStayHost')}
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
          VoyageStay Host
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
                  onClick={() => navigate("/trips")}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => navigate("/favorites")}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => navigate("/reservations")}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => navigate("/properties")}
                  label="My properties"
                />
                <MenuItem onClick={()=>{}} label="VoyageStay Host" />
                <hr />
                <MenuItem onClick={() => {}} label="Lgout" />
              </>
            ) : (
              <>
                <MenuItem onClick={()=>{}} label="Login" />
                <MenuItem onClick={()=>{}} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
