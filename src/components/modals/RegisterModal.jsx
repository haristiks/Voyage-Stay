import Axios from "../../lib/Axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../../Redux/Reducers/useLoginModal";
import { RMonClose, RMonOpen } from "../../Redux/Reducers/useRegisterModal";
import { useNavigate } from "react-router-dom";

function RegisterModal() {
  const [isLoading, setIsLoading] = useState(false);
  const IsOpen = useSelector((state) => state.RegisterModalIsOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(RMonOpen());
    navigate("/register");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(() => async (data) => {
    setIsLoading(true);
    console.log(data);
    try {
      const response = await Axios.post(
        "/api/users/auth/signup",
        data
      );
      toast.success(response.data.message);
      dispatch(RMonClose());
      dispatch(onOpen());
      navigate('/login')
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(err);
    } finally {
      () => {
        setIsLoading(false);
      };
    }
  });

  const toggle = useCallback(() => {
    dispatch(RMonClose());
    dispatch(onOpen());
  }, [onOpen, RMonClose]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Voyage Stay" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row item-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <Modal
      disabled={isLoading}
      isOpen={IsOpen}
      title="Register"
      actionLabel="Continue"
      onClose={() => {
        dispatch(RMonClose());
        navigate("/");
      }}
      onSubmit={handleSubmit(onSubmit())}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
