import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type THeadline = {
  setSearch: (e: string) => void;
  search: string;
};

export const Headline: React.FC<THeadline> = ({ setSearch, search }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex items-center justify-between">
      <Input
        className="my-2 mr-1 w-60"
        isClearable
        value={search}
        placeholder={`${t("search")}...`}
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
