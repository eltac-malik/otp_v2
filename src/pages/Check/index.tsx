import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Wrapper } from "@/components/Wrapper";

export const Check = () => {
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
            <TableRow>
              <TableCell>jhg</TableCell>
              <TableCell>ss</TableCell>
              <TableCell>sx</TableCell>
              <TableCell>ss</TableCell>
              <TableCell>sss</TableCell>
              <TableCell>sss</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Wrapper>
  );
};
