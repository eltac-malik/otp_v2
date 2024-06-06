import { useQuery } from "react-query";
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
import { NotFound } from "@/components/NotFound";
import { IMonitoring } from "@/shared/models/api";
import { statusChip, tripodTextType, tripodType } from "@/shared/utils";

export const Monitoring = () => {
  const { t } = useTranslation();
  const { data, isLoading, refetch } = useQuery<IMonitoring[]>(
    "MONITORING",
    () => Https.get(ENDPOINTS.GET_LIVE_MONITORING()),
    {
      onSuccess: () => {
        setTimeout(() => {
          refetch();
        }, 3000);
      },
    }
  );

  return (
    <Wrapper title={t("monitoring")}>
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
              <TableColumn className="font-semibold text-base">
                {t("tables.user")}
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                {t("tables.room")}
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                {t("tables.date")}
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                {t("tables.device")}
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                {t("tables.detect")}
              </TableColumn>
              <TableColumn className="font-semibold text-base">
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
