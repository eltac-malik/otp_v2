import { Input } from "@nextui-org/react";

export const UserInfo = () => {
  return (
    <div className="w-full flex items-start justify-start flex-col">
      <Input
        isDisabled
        label='Ad'
        value={"sss"}
        classNames={{
          inputWrapper: `w-[400px] h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
    </div>
  );
};
