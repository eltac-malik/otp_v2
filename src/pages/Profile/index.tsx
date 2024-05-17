import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Input,
  Button,
} from "@nextui-org/react";

import { Wrapper } from "@/components/Wrapper";
import { useUserInfo } from "@/shared/store";

import { CiEdit } from "react-icons/ci";

export const Profile = () => {
  const { userInfo } = useUserInfo();
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
    <Wrapper title="Profil">
      <div className="w-full flex items-center pb-20 justify-start flex-col border-1 box-sh bg-white rounded-2xl">
        <div className="w-full flex items-center justify-start border-b-1 p-5">
          <div className="w-1/12 mr-2 h-full flex items-center justify-start">
            <div className="w-28 h-28 border-1 rounded-full overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQGmKK5Xp7L2ZA/profile-displayphoto-shrink_400_400/0/1683724944945?e=1716422400&v=beta&t=fv7j1El4BjtdPo7ZY5TkNJ2ApAU6cEFv1ZqgaZfwfBk"
                alt=""
              />
            </div>
          </div>
          <div className="w-3/12 h-full ml-4 flex items-start justify-start flex-col">
            <Input
              isReadOnly
              placeholder="Ad"
              className="w-64 h-10"
              variant="underlined"
              classNames={{ innerWrapper: "h-10", inputWrapper: "h-10" }}
              defaultValue={userInfo.user.firstname}
            />
            <Input
              isReadOnly
              placeholder="Soyad"
              className="w-64 h-10 mt-1"
              variant="underlined"
              classNames={{ innerWrapper: "h-10", inputWrapper: "h-10" }}
              defaultValue={userInfo.user.lastname}
            />
            <Input
              isReadOnly
              placeholder="Email"
              className="w-64 h-10 mt-1"
              variant="underlined"
              classNames={{ innerWrapper: "h-10", inputWrapper: "h-10" }}
              defaultValue={userInfo.user.email}
            />
          </div>
          <Button className="text-white bg-base rounded-lg" startContent={<CiEdit size={17}/>}>
            Düzəliş et
          </Button>
        </div>

        <div className="w-full p-5 flex items-center justify-start flex-col">
          <p className="w-full font-semibold text-lg pt-5 flex items-center justify-start">
            Ödəniş tarixçəsi
          </p>
          <Table
            aria-label="Notification dynamic content"
            className="w-full rounded-2xl mt-3 border-1 flex items-center justify-start flex-col"
            disabledKeys={["1"]}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.key}
                  align={column.key === "action" ? "end" : "start"}
                  className={`${
                    column.key === "action" ? "text-center" : "text-center"
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
                    <TableCell className="text-center">
                      <Chip color="success">Success</Chip>
                    </TableCell>
                    <TableCell className="text-center">
                      {item?.status}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </Wrapper>
  );
};
