import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { onClose, onOpen } from "../../Redux/Reducers/useLoginModal";
import { RMonOpen } from "../../Redux/Reducers/useRegisterModal";
import { useNavigate } from "react-router-dom";
import Axios from "../../lib/Axios";
import { login } from "../../Redux/Reducers/currentUserSlice";

function LoginModal() {
  const IsOpen = useSelector((state) => state.LoginModalIsOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerModal = useRegisterModal();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(onOpen());
    navigate("/login");
  };

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(() => async (data) => {
    setIsLoading(true);

    try {
      const resp = await Axios.post("/api/auth/login", data);

      setIsLoading(false);

      if (resp?.data.status == "success") {
        toast.success("Logged in");
        dispatch(login(resp.data));
        dispatch(onClose());
        navigate("/");

        // if (data.email == "admin@voyagestay.com") {
        //   router.push("/admin");
        // }
      }
    } catch (error) {
      toast.error(error.message);
    }
  });

  const toggle = useCallback(() => {
    dispatch(onClose());
    dispatch(RMonOpen());
  }, [onClose, RMonOpen]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row item-center gap-2">
          <div>First time using VoyageStay?</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  if (!IsOpen) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <p className="text-lg mb-4">
            Looks like you are not logged in, please login.
          </p>
          <button
            className="bg-rose-500 hover:opacity-80 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={IsOpen}
      title="Login"
      actionLabel="Continue"
      onClose={() => {
        dispatch(onClose());
        navigate("/");
      }}
      onSubmit={handleSubmit(onSubmit())}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
