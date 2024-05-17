import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import cn from "classnames";

import { ENDPOINTS } from "@/api/routing";

type TLoginForm = {
  loginObj: { phoneNumber: string };
  setLoginObj: any;
  setIsNextStep: any;
};

export const LoginForm: React.FC<TLoginForm> = ({
  loginObj,
  setLoginObj,
  setIsNextStep,
}) => {
  const { register, handleSubmit, setValue } = useForm();
  const [seenPhone, setSeenphone] = useState(false);

  const { mutate, isError, isLoading } = useMutation({
    mutationFn: (data: string) =>
      axios.post(ENDPOINTS.SEND_OTP_CODE(), {
        phoneNumber: data,
      }),
    onSuccess: () => setIsNextStep(true),
  });

  const onSubmit = (val: Record<string, string>) => {
    const purePhone = `0${val.phoneNumber
      .split(" - ")
      .join("")
      .trim()
      .split(" - ")
      .join("")}`;
    setValue("phoneNumber", purePhone);
    mutate(purePhone);
  };
  return (
    <div className="w-[500px] h-auto flex items-center justify-start flex-col bg-white rounded-lg overflow-hidden py-7 pb-4 modal-shadow">
      {seenPhone ? (
        <div className="w-10/12 flex items-center justify-start flex-col p-4">
          <a
            className="w-full h-12 bg-base rounded-lg text-white flex items-center justify-center my-7"
            href="tel:+994508257515"
          >
            Bizimlə əlaqə
          </a>
        </div>
      ) : (
        <div className="w-10/12 flex items-center justify-start flex-col p-4">
          <h1 className="text-[25px] text-black mb-6">Kabinetə giriş</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex items-center justify-start flex-col"
          >
            <div className="w-full flex items-start justify-start flex-col mb-5">
              <label
                htmlFor="name"
                className="font-medium text-def text-[#676F7D] text-sm mb-1"
              >
                Telefon nömrəsi
              </label>
              <div
                className={`w-full rounded-lg h-[48px] border-1 border-[#E4E4E4] text-[#939393] text-def p-3 ${cn(
                  { "border-red-500": isError }
                )}`}
              >
                <span className={`${cn({ "text-red-500": isError })}`}>
                  +994
                </span>
                <InputMask
                  type="text"
                  name="phoneNumber"
                  mask="99 - 999 - 99 - 99"
                  maskChar=" "
                  id="name"
                  placeholder="(000)-000-00-00"
                  className={`h-full outline-none p-1 sm:text-def ${cn({
                    "text-red-500": isError,
                  })}`}
                  {...register("phoneNumber")}
                  onKeyUp={(e: any) =>
                    setLoginObj({
                      ...loginObj,
                      phoneNumber: e.target.value.split(" - ").join("").trim(),
                    })
                  }
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-[50px] rounded-lg bg-secondary text-white font-medium"
              isDisabled={!(loginObj.phoneNumber.length === 9)}
              isLoading={isLoading}
            >
              SMS-kod göndərilsin
            </Button>
          </form>
        </div>
      )}
      <p
        onClick={() => setSeenphone(!seenPhone)}
        className="text-blue-500 text-center text-sm select-none cursor-pointer hover:underline"
      >
        {!seenPhone ? "Qeydiyyat" : "Daxil ol"}
      </p>
    </div>
  );
};
