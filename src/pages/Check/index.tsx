import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Wrapper } from "@/components/Wrapper";
import { useQuery } from "react-query";
import { IMonitoring } from "@/shared/models/api";
import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { statusChip, tripodTextType, tripodType } from "@/shared/utils";

export const Check = () => {
  const { data, isLoading, refetch } = useQuery<IMonitoring[]>(
    "MONITORING",
    () => Https.get(ENDPOINTS.GET_IN_PLACE()),
    {
      onSuccess: () => {
        setTimeout(() => {
          refetch();
        }, 3000);
      },
    }
  );
  console.log(data);

  return (
    <Wrapper title="Hal-hazırda plazada olanlar">
      <div className="w-full flex items-start justify-start">
        <Table>
          <TableHeader>
            <TableColumn className="font-semibold text-base">
              İstifadəçi
            </TableColumn>
            <TableColumn className="font-semibold text-base">Otaq</TableColumn>
            <TableColumn className="font-semibold text-base">Tarix</TableColumn>
            <TableColumn className="font-semibold text-base">Cihaz</TableColumn>
            <TableColumn className="font-semibold text-base">
              Giriş / Çıxış
            </TableColumn>
            <TableColumn className="font-semibold text-base">
              Status
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
    </Wrapper>
  );
};
