import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { UseMutateFunction } from "react-query";

type TFilterBox = {
  mutate: UseMutateFunction<any, unknown, Record<string, any>, unknown>;
};

export const FilterBox: React.FC<TFilterBox> = ({ mutate }) => {
  const { register, handleSubmit, setValue } = useForm();
  return (
    <form
      onSubmit={handleSubmit((e: any) => mutate(e))}
      className="w-full flex items-center justify-start"
    >
      <Input
        className="my-2 mr-1 w-44"
        placeholder="İstifadəçi kodu"
        {...register("username")}
        classNames={{
          inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
      <Input
        className="my-2 mr-1 w-44"
        placeholder="otaq No"
        {...register("room_number")}
        classNames={{
          inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
      <Input
        className="my-2 mr-1 w-44"
        placeholder="Card No"
        {...register("card_id")}
        classNames={{
          inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
       <Input
        className="my-2 mr-1 w-44"
        type="datetime-local"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          if (value) {
            setValue("from", dayjs(value).format("YYYY-MM-DD HH:mm:ss"));
          } else {
            setValue("from", ""); // or set it to null if that makes more sense for your logic
          }
        }}
        classNames={{
          inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
      <Input
        className="my-2 mr-1 w-44"
        type="datetime-local"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          if (value) {
            setValue("to", dayjs(value).format("YYYY-MM-DD HH:mm:ss"));
          } else {
            setValue("to", ""); // or set it to null if that makes more sense for your logic
          }
        }}
        classNames={{
          inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
      <Button
        type="submit"
        className="ml-1 w-40 text-white rounded-lg"
        color="success"
      >
        Axtar
      </Button>
    </form>
  );
};
