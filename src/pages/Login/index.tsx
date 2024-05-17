import React, { useState } from "react";

import { LoginForm } from "./components/LoginForm";
import { OtpCode } from "./components/OtpCode";

export const Login = () => {
  const [loginObj, setLoginObj] = useState({ phoneNumber: "" });
  const [isNextStep, setIsNextStep] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#EFF8F8] sm:p-2">
      <div className="w-full h-screen flex items-center justify-center">
        {!isNextStep ? (
          <LoginForm
            loginObj={loginObj}
            setLoginObj={setLoginObj}
            setIsNextStep={setIsNextStep}
          />
        ) : (
          <OtpCode phoneNumber={loginObj.phoneNumber} />
        )}
      </div>
    </div>
  );
};
