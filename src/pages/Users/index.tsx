import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { Wrapper } from "@/components/Wrapper";
import { IUsers } from "@/shared/models/api";
import { NotFound } from "@/components/NotFound";
import { statusChip } from "@/shared/utils";
import { Headline } from "./components/Headline";

export const Users = () => {
  const [search, setSearch] = useState<string>("");
  const { mutate, data, isLoading } = useMutation({
    mutationFn: () => Https.get(ENDPOINTS.GET_USERS()),
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Wrapper title="İstifadəçilər">
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
              <TableColumn>İstifadəçi</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {(data as IUsers[])
                .filter((e: IUsers) =>
                  `${e?.username.toLowerCase()} ${e.surname.toLowerCase()}`.includes(
                    search.toLowerCase()
                  )
                )
                .map((item: IUsers) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{`${item?.username} ${item.surname}`}</TableCell>
                      <TableCell>{statusChip(item?.userType)}</TableCell>
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
