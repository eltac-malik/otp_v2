import { useQuery } from "react-query";
import dayjs from "dayjs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { Wrapper } from "@/components/Wrapper";
import { statusChip, tripodTextType, tripodType } from "@/shared/utils";
import { ENDPOINTS } from "@/api/routing";
import Https from "@/api/http";
import { IMonitoring } from "@/shared/models/api";
import { NotFound } from "@/components/NotFound";

export const Monitoring = () => {
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
    <Wrapper title="Monitoring">
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
              <TableColumn>İstifadəçi</TableColumn>
              <TableColumn>Tarix</TableColumn>
              <TableColumn>Cihaz</TableColumn>
              <TableColumn>Giriş / Çıxış</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              {(data as IMonitoring[]).map((item: IMonitoring) => {
                return (
                  <TableRow key={item.time}>
                    <TableCell>{item?.person}</TableCell>
                    <TableCell>
                      {dayjs(item?.time).format("YYYY/MM/DD hh:mm:ss")}
                    </TableCell>
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
