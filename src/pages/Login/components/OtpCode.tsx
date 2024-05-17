import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { useMutation } from "react-query";
import axios from "axios";

import { ENDPOINTS } from "@/api/routing";
import { PATH } from "@/shared/routes/path";
import { useUserInfo } from "@/shared/store";

type TOtpCode = {
  phoneNumber: string;
};

export const OtpCode: React.FC<TOtpCode> = ({ phoneNumber }) => {
  const navigate = useNavigate();

  const { setUserInfo } = useUserInfo();

  const [otpCode, setOtpCode] = useState("");
  const [count, setCount] = useState(30);

  const { mutate } = useMutation({
    mutationFn: () =>
      axios.post(ENDPOINTS.CHECK_OTP(), {
        phoneNumber: `0${phoneNumber}`,
        otp: `${otpCode}`,
      }),
    onSuccess: (res) => {
      setUserInfo(res.data?.data);
      navigate(PATH.EXPLORE);
    },
    onError: () => {},
  });

  useEffect(() => {
    if (otpCode.length >= 6) {
      mutate();
    }
  }, [otpCode]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="w-[500px] h-auto flex items-center justify-start flex-col bg-white rounded-sm overflow-hidden pb-4">
      <div className="w-10/12 flex items-center justify-start flex-col p-7">
        <h1 className="text-[25px] text-black mb-6">Nömrənin təstiqlənməsi</h1>
        <div className="w-full flex items-center justify-start flex-col">
          <div className="otp-input w-full flex items-center justify-start flex-col mb-5">
            <label
              htmlFor="name"
              className="font-medium text-def text-[#676F7D] text-sm mb-1 sm:text-center"
            >
              {phoneNumber} nömrəsinə SMS-kod göndərildi <br />
              <p className="w-full text-center">SMS-kod</p>
            </label>
            <OtpInput
              numInputs={6}
              value={otpCode}
              inputType={"number"}
              placeholder="(+994) 00-000-00-00"
              renderInput={(props) => <input {...props} />}
              onChange={setOtpCode}
            />
          </div>
        </div>
      </div>
      <p
        className={`w-full flex items-center text-sm justify-center underline text-[#00b07572] select-none cursor-pointer pointer-events-none ${cn(
          { ["send-again pointer-events-auto select-none"]: count === 0 }
        )}`}
      >
        {count === 0 ? "" : count} SMS-kod yenidən göndərilsin
      </p>
    </div>
  );
};
