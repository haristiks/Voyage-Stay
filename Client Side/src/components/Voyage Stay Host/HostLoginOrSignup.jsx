import * as React from "react";
import { useSelector } from "react-redux";
import HostSignUp from "./HostSignUp";
import HostLogin from "./HostLogin";

function HostLoginOrSignup() {
  const isAhost = useSelector((state) => state.isHost);

  return <div>{isAhost ? <HostLogin /> : <HostSignUp />}</div>;
}

export default HostLoginOrSignup;
