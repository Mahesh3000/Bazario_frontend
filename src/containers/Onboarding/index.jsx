import React, { memo } from "react";
import Otp from "./Otp";
import Loading from "../Login/Loading";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "./QrCode";
import Totp from "./Totp";

const Onboarding = () => {
  const { emailId, isLoading, isNewUser } = useSelector((state) => state.auth);

  return (
    <div>
      {isLoading && <Loading />}
      {isNewUser ? <QRCode /> : <Totp />}
    </div>
  );
};

export default Onboarding;
