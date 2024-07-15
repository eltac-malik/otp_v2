import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";

import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { Wrapper } from "@/components/Wrapper";
import { IUsers } from "@/shared/models/api";
import { NotFound } from "@/components/NotFound";
import { statusChip } from "@/shared/utils";
import { Headline } from "./components/Headline";
import { Operation } from "./components/Operation";
import { DetailModal } from "@/components/DetailModal";

export const Users = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [search, setSearch] = useState<string>("");
  const [currentItem, setCurrentItem] = useState<IUsers | null>(null);
  const { mutate, data, isLoading } = useMutation({
    mutationFn: () => Https.get(ENDPOINTS.GET_USERS()),
  });

  useEffect(() => {
    mutate();
  }, []);

  const handleDetail = (item: IUsers) => {
    setCurrentItem(item);
    onOpen();
  };

  return (
    <Wrapper title={t("users")}>
      <DetailModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        name={currentItem?.username}
        image={currentItem?.image}
        userId={currentItem?.id}
      />
      <Headline setSearch={setSearch} search={search} />
      {isLoading && (
        <div className="w-full flex items-start justify-center">
          <Spinner />
        </div>
      )}
      {(data as IUsers[])?.length <= 0 && <NotFound />}

      {!isLoading && (data as IUsers[])?.length > 0 && (
        <div className="w-full flex items-start justify-start">
          <Table isStriped>
            <TableHeader>
              <TableColumn className="font-semibold text-base text-black">
                Id kod
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.user")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.room")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.status")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.date")}
              </TableColumn>
              <TableColumn
                align="end"
                className="flex items-center justify-end"
              >
                {t("tables.operation")}
              </TableColumn>
            </TableHeader>
            <TableBody>
              {(data as IUsers[])
                .filter((e: IUsers) =>
                  `${e?.username.toLowerCase()} ${e.surname.toLowerCase()}`.includes(
                    search.toLowerCase()
                  )
                )
                .map((item: IUsers, idx: number) => {
                  return (
                    <TableRow key={idx + 1}>
                      <TableCell>{item?.personPin}</TableCell>
                      <TableCell
                        onClick={() => handleDetail(item)}
                        className="cursor-pointer hover:bg-base rounded-lg hover:text-white hover:font-semibold"
                      >{`${item?.username} ${item.surname}`}</TableCell>
                      <TableCell>{item?.roomNumber}</TableCell>
                      <TableCell>{statusChip(item?.userType, t)}</TableCell>
                      <TableCell>{item?.createdAt?.split(".")[0]}</TableCell>
                      <TableCell
                        align="left"
                        className="flex items-end justify-end"
                      >
                        <Operation item={item} mutate={mutate} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      )}
    </Wrapper>
  );
};
