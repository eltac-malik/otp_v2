import { Input } from "@nextui-org/react";

type THeadline = {
  setSearch: (e: string) => void;
  search: string;
};

export const Headline: React.FC<THeadline> = ({ setSearch, search }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <Input
        className="my-2 mr-1 w-60"
        isClearable
        value={search}
        placeholder="axtar..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        onClear={() => setSearch("")}
        classNames={{
          inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
        }}
      />
    </div>
  );
};
