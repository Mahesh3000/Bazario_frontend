import React, { memo } from "react";
import Otp from "./Otp";
import Loading from "../Login/Loading";
import { useDispatch, useSelector } from "react-redux";

const Onboarding = () => {
  const { emailId, isLoading } = useSelector((state) => state.auth);

  return (
    <div>
      {isLoading && <Loading />}

      <Otp />
    </div>
  );
};

export default Onboarding;
