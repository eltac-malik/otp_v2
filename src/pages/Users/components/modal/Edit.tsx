import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { IUsers } from "@/shared/models/api";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

type TEdit = {
  currentUser: IUsers | null;
  onOpenChange?: any;
  mutate?: any;
};

export const Edit: React.FC<TEdit> = ({
  currentUser,
  onOpenChange,
  mutate: refetch,
}) => {
  const { register, handleSubmit, setValue } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) =>
      Https.patch(ENDPOINTS.EDIT_USER(currentUser?.id), data),
    onSuccess: () => {
      onOpenChange?.();
      refetch?.();
    },
  });

  const onSubmit = (data: any) => {
    mutate({ ...currentUser, ...data });
  };

  return (
    <form
      className="w-full flex items-center justify-start flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="my-2 mr-1 w-full"
        placeholder="İstifadəçi adı"
        defaultValue={currentUser?.username}
        classNames={{
          inputWrapper: "h-10 bg-white dark:bg-black border-1 rounded-lg",
        }}
        {...register("username")}
      />
      <Input
        className="my-2 mr-1 w-full"
        placeholder="İstifadəçi soyadı"
        defaultValue={currentUser?.surname}
        classNames={{
          inputWrapper: "h-10 bg-white dark:bg-black border-1 rounded-lg",
        }}
        {...register("surname")}
      />
      <Input
        className="my-2 mr-1 w-full"
        placeholder="Otaq nömrəsi"
        defaultValue={currentUser?.roomNumber}
        classNames={{
          inputWrapper: "h-10 bg-white dark:bg-black border-1 rounded-lg",
        }}
        {...register("roomNumber")}
      />
      <Select
        classNames={{
          base: `mb-2 h-10 bg-white dark:bg-black border-1 rounded-lg`,
          mainWrapper: `h-10 bg-white dark:bg-black rounded-lg`,
          trigger: `min-h-10 h-10 bg-white dark:bg-black rounded-lg`,
        }}
        defaultSelectedKeys={currentUser?.userType}
        onChange={(e) => setValue("userType", e.target.value)}
      >
        {["Free", "Paid", "Tenant", "Guest"].map((item: string) => {
          return (
            <SelectItem value={item} key={item}>
              {item}
            </SelectItem>
          );
        })}
      </Select>
      <Button
        type="submit"
        className="w-full text-white rounded-lg"
        color="success"
        isLoading={isLoading}
      >
        Təsdiqlə
      </Button>
    </form>
  );
};
