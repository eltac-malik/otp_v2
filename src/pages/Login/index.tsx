import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { LoginSchama } from "@/shared/schemas";
import { instance } from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { useToken, useUserInfo } from "@/shared/store";
import { Toast } from "@/components/Toast";

export const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchama),
  });

  const { setToken } = useToken();
  const { setUserInfo } = useUserInfo();

  const { mutate, isLoading } = useMutation({
    mutationFn: (values: Record<string, string>) =>
      axios.post(ENDPOINTS.POST_LOGIN(), values),
    onSuccess: (res) => {
      setToken(res.data?.jwt);
      instance.defaults.headers.Authorization = "Bearer " + res.data?.jwt;
      const decoded = jwtDecode(res.data?.jwt);
      setUserInfo(decoded);
      navigate("/");
    },
    onError: () => {
      toast.error(t("tryAgain"));
    },
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#EFF8F8] sm:p-2">
      <Toast />
      <form
        onSubmit={handleSubmit((e) => mutate(e))}
        className="w-3/12 sm:w-11/12 h-screen flex items-center justify-center flex-col"
      >
        <h1 className="font-semibold text-2xl mb-1 ">Old Town Plaza</h1>
        <Input
          className="my-2 w-full"
          placeholder={t("placeholders.userCode")}
          {...register("userCode")}
          isInvalid={!!errors.userCode}
          errorMessage={errors?.userCode?.message as string}
          classNames={{
            inputWrapper: `h-12 bg-white dark:bg-black border-1 rounded-lg`,
          }}
        />
        <Input
          className="my-2 w-full"
          placeholder={t("placeholders.psw")}
          {...register("password")}
          type="password"
          isInvalid={!!errors.password}
          errorMessage={errors?.password?.message as string}
          classNames={{
            inputWrapper: `h-12 bg-white dark:bg-black border-1 rounded-lg`,
          }}
        />
        <Button
          type="submit"
          className="text-white rounded-lg w-full h-12 my-2 bg-base"
          isLoading={isLoading}
        >
          {t("log.in")}
        </Button>
      </form>
    </div>
  );
};
