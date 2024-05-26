import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Edit } from "./modal/Edit";
import { Delete } from "./modal/Delete";
import { IUsers } from "@/shared/models/api";

type TOperation = {
  item: IUsers;
  mutate?: any;
};

export const Operation: React.FC<TOperation> = ({ item, mutate }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpenChange: onDeleteOpenChange } =
    useDisclosure();
  const [currentUser, setCurrentUser] = useState<IUsers | null>(null);
  return (
    <>
      <Modal
        placement="center"
        backdrop="blur"
        isDismissable={false}
        isOpen={!!isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {currentUser?.username}
          </ModalHeader>
          <ModalBody>
            <Edit
              currentUser={currentUser}
              onOpenChange={onOpenChange}
              mutate={mutate}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        placement="center"
        backdrop="blur"
        size="xs"
        isDismissable={false}
        isOpen={!!isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
        hideCloseButton
      >
        <ModalContent>
          <ModalBody>
            <Delete onOpenChange={onDeleteOpenChange} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="!min-w-8 p-0">
            <BsThreeDotsVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="edit"
            onClick={() => {
              setCurrentUser(item);
              onOpen();
            }}
          >
            Düzəliş et
          </DropdownItem>
          {/* <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            onClick={() => openDelete()}
          >
            Sil
          </DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
