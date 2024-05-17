import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";

import { Wrapper } from "@/components/Wrapper";
import { NewAgency } from "./blocks/NewAgency";

import { IoSearchOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { RxResume } from "react-icons/rx";
import { CiPause1 } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

export const AgencyRequest = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const rows = [
    {
      key: "1",
      name: "Eltac Malik",
      role: "994508257515",
      status: "-",
      id: 1,
    },
    {
      key: "2",
      name: "Vitalik Adilov",
      role: "99444323259",
      status: "Green esstate",
      id: 1,
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
      id: 1,
    },
  ];

  const columns = [
    {
      key: "name",
      label: "Ad Soyad",
    },
    {
      key: "role",
      label: "Mobil nömrə",
    },
    {
      key: "status",
      label: "Agentlik",
    },
    {
      key: "action",
      label: "Əməliyyatlar",
    },
  ];

  return (
    <Wrapper title="Şirkət sorğusu">
      <>
        <NewAgency isOpen={isOpen} onOpenChange={onOpenChange} />
        <div className="w-full flex items-center justify-between">
          <div className="dash-input">
            <Input
              isClearable
              className="my-2 w-96"
              placeholder="Axtar"
              startContent={
                <IoSearchOutline size={20} className="mr-2 rounded-lg" />
              }
              classNames={{ mainWrapper: "box-sh border-1 rounded-lg" }}
            />
          </div>
          <Button
            className="bg-base rounded-lg text-white text-sm font-medium"
            endContent={<IoMdAddCircleOutline size={20} />}
            onClick={onOpen}
          >
            Yeni bildiriş yarat
          </Button>
        </div>

        <Table
          aria-label="Notification dynamic content"
          className="my-2"
          disabledKeys={["1"]}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                align={column.key === "action" ? "end" : "start"}
                className={`${
                  column.key === "action" ? "text-end" : "text-center"
                }`}
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent={"Sizin bildirişiniz yoxdur"}>
            {rows.map((item) => {
              return (
                <TableRow key={item.key}>
                  <TableCell className="text-center">{item?.name}</TableCell>
                  <TableCell className="text-center">{item?.role}</TableCell>
                  <TableCell className="text-center">{item?.status}</TableCell>
                  <TableCell className="text-center">
                    <div className="relative flex justify-end items-center gap-2">
                      <Dropdown>
                        <DropdownTrigger>
                          <Button isIconOnly size="sm" variant="light">
                            <BsThreeDotsVertical className="text-default-300" />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                          <DropdownItem className="admin-dropdown w-full flex items-center justify-start">
                            <FiEdit className="mr-1" size={18} />{" "}
                            <span>Düzəliş et</span>
                          </DropdownItem>
                          <DropdownItem className="admin-dropdown">
                            <CiPause1 className="mr-1" size={18} />{" "}
                            <span>Dondur</span>
                          </DropdownItem>
                          <DropdownItem className="admin-dropdown">
                            <RxResume className="mr-1" size={18} />{" "}
                            <span>Aktiv et</span>
                          </DropdownItem>
                          <DropdownItem
                            className="admin-dropdown text-danger-500"
                            color="danger"
                          >
                            <BsTrash className="mr-1" size={18} />{" "}
                            <span>Sil</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </>
    </Wrapper>
  );
};
