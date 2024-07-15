import { useState } from "react";
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
  useDisclosure,
} from "@nextui-org/react";

import Https from "@/api/http";
import { ENDPOINTS } from "@/api/routing";
import { Wrapper } from "@/components/Wrapper";
import { NotFound } from "@/components/NotFound";
import { IMonitoring } from "@/shared/models/api";
import { statusChip, tripodTextType, tripodType } from "@/shared/utils";
import { DetailModal } from "@/components/DetailModal";

export const Monitoring = () => {
  const [t] = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [currentItem, setCurrentItem] = useState<IMonitoring | null>(null);

  const { data, isLoading } = useQuery(
    "getMonitoring",
    () => Https.get(ENDPOINTS.GET_LIVE_MONITORING()),
    {
      refetchInterval: 3000,
    }
  );

  if (!data || (data as IMonitoring[])?.length <= 0) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <div className="w-full flex items-start justify-center">
        <Spinner />
      </div>
    );
  }

  const handleDetail = (item: IMonitoring) => {
    setCurrentItem(item);
    onOpen();
  };

  const renderTableRows = (data: IMonitoring[]) => {
    return data.map((item, idx) => (
      <TableRow key={idx + 1}>
        <TableCell
          className="cursor-pointer hover:bg-base rounded-lg hover:text-white hover:font-semibold"
          onClick={() => handleDetail(item)}
        >
          {item?.person}
        </TableCell>
        <TableCell>{item?.roomNumber}</TableCell>
        <TableCell>{item?.time}</TableCell>
        <TableCell>{tripodTextType(item?.device)}</TableCell>
        <TableCell>{tripodType(item?.device, t)}</TableCell>
        <TableCell>{statusChip(item?.type, t)}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Wrapper title={t("monitoring")}>
      <DetailModal
        readOnly
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        name={currentItem?.person}
        image={currentItem?.image}
      />
      <div className="w-full flex items-start justify-start">
        {!!data && !isLoading && (
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
            <TableBody>{renderTableRows(data as IMonitoring[])}</TableBody>
          </Table>
        )}
      </div>
    </Wrapper>
  );
};
