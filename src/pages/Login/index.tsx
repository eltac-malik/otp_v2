import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-toastify";

import { LoginSchama } from "@/shared/schemas";
import { instance } from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { useToken } from "@/shared/store";
import { Toast } from "@/components/Toast";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchama),
  });

  const { setToken } = useToken();

  const { mutate, isLoading } = useMutation({
    mutationFn: (values: Record<string, string>) =>
      axios.post(ENDPOINTS.POST_LOGIN(), values),
    onSuccess: (res) => {
      setToken(res.data?.jwt);
      instance.defaults.headers.Authorization = "Bearer " + res.data?.jwt;
      navigate("/");
    },
    onError: () => {
      toast.error("Yenidən cəhd edin !");
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
          placeholder="İstifadəçi kodu"
          {...register("userCode")}
          isInvalid={!!errors.userCode}
          errorMessage={errors?.userCode?.message as string}
          classNames={{
            inputWrapper: `h-12 bg-white dark:bg-black border-1 rounded-lg`,
          }}
        />
        <Input
          className="my-2 w-full"
          placeholder="Şifrə"
          {...register("password")}
          isInvalid={!!errors.password}
          errorMessage={errors?.password?.message as string}
          classNames={{
            inputWrapper: `h-12 bg-white dark:bg-black border-1 rounded-lg`,
          }}
        />
        <Button
          color="success"
          type="submit"
          className="text-white rounded-lg w-full h-12 my-2"
          isLoading={isLoading}
        >
          Daxil ol
        </Button>
      </form>
    </div>
  );
};
