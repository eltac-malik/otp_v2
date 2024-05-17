import { Button } from "@nextui-org/react";

type TDelete = {
  onOpenChange: any;
};

export const Delete: React.FC<TDelete> = ({ onOpenChange }) => {
  return (
    <div className="w-full flex items-center justify-start flex-col py-3">
      <p className="py-5">Silinsin?</p>
      <div className="w-full grid grid-cols-2 gap-1">
        <Button
          className="w-full rounded-lg"
          color="danger"
          onClick={onOpenChange}
        >
          Geri
        </Button>
        <Button className="w-full rounded-lg bg-base text-white">Sil</Button>
      </div>
    </div>
  );
};
