import { useEffect } from "react";
import { useMutation } from "react-query";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Button,
} from "@nextui-org/react";

import { Wrapper } from "@/components/Wrapper";
import { IMonitoring } from "@/shared/models/api";
import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { statusChip, tripodTextType, tripodType } from "@/shared/utils";

import { LuRefreshCcw } from "react-icons/lu";

export const Check = () => {
  const {
    data,
    isLoading,
    mutate: getInPlace,
  } = useMutation({
    mutationFn: () => Https.get(ENDPOINTS.GET_IN_PLACE()),
  });

  useEffect(() => {
    getInPlace();
  }, []);

  return (
    <Wrapper title="Hal-hazırda plazada olanlar">
      <div className="w-full h-12 bg-white rounded-lg mb-2 flex items-center justify-end px-2">
        <Button
          className="rounded-lg bg-base text-white"
          startContent={<LuRefreshCcw size={20} />}
          onClick={() => getInPlace()}
        >
          Cədvəli yenilə
        </Button>
      </div>
      {isLoading && (
        <div className="w-full flex items-start justify-center">
          <Spinner />
        </div>
      )}
      <div className="w-full flex items-start justify-start">
        {!isLoading && data && (
          <Table>
            <TableHeader>
              <TableColumn className="font-semibold text-base">
                İstifadəçi
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                Otaq
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                Tarix
              </TableColumn>
              <TableColumn className="font-semibold text-base">
                Cihaz
              </TableColumn>
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
        )}
      </div>
    </Wrapper>
  );
};
