import React, { memo } from "react";
import Otp from "./Otp";
import Loading from "../Login/Loading";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "./QrCode";
import Totp from "./Totp";

const Onboarding = () => {
  const { emailId, isLoading, isNewUser, isTotpEnabled } = useSelector(
    (state) => state.auth
  );

  console.log("isTotpEnabled", isTotpEnabled);

  return (
    <div>
      {isLoading && <Loading />}
      {isNewUser ? <QRCode /> : isTotpEnabled ? <Totp /> : <Otp />}
    </div>
  );
};

export default Onboarding;
