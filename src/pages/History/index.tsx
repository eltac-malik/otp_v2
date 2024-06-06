import { useEffect } from "react";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";

import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { Wrapper } from "@/components/Wrapper";
import { IMonitoring } from "@/shared/models/api";
import { NotFound } from "@/components/NotFound";
import { statusChip, tripodTextType, tripodType } from "@/shared/utils";
import { FilterBox } from "./components/FilterBox";

export const History = () => {
  const { t } = useTranslation();
  const { mutate, data, isLoading } = useMutation({
    mutationFn: (data: Record<string, any>) =>
      Https.get(ENDPOINTS.GET_HISTORY_MONITORING(data)),
  });

  useEffect(() => {
    mutate({});
  }, []);

  return (
    <Wrapper title={t("history")}>
      <FilterBox mutate={mutate} />
      {isLoading && (
        <div className="w-full flex items-start justify-center">
          <Spinner />
        </div>
      )}
      {(data as IMonitoring[])?.length <= 0 && <NotFound />}

      {!isLoading && (data as IMonitoring[])?.length > 0 && (
        <div className="w-full flex items-start justify-start">
          <Table>
            <TableHeader>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.user")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.room")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.date")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.device")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.detect")}
              </TableColumn>
              <TableColumn className="font-semibold text-base text-black">
                {t("tables.status")}
              </TableColumn>
            </TableHeader>
            <TableBody>
              {(data as IMonitoring[]).map((item: IMonitoring) => {
                return (
                  <TableRow key={item.time}>
                    <TableCell>{item?.person}</TableCell>
                    <TableCell>{item?.roomNumber}</TableCell>
                    <TableCell>{item?.time}</TableCell>
                    <TableCell>{tripodTextType(item?.device)}</TableCell>
                    <TableCell>{tripodType(item?.device)}</TableCell>
                    <TableCell>{statusChip(item?.type)}</TableCell>
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
