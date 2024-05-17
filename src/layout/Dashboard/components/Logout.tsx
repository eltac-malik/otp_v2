import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Tooltip,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { When } from "@/components/When";
import { IoIosLogOut } from "react-icons/io";

type TLogout = {
  isFull: boolean;
};

export const Logout: React.FC<TLogout> = ({ isFull }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("userInfo");
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="flex items-center justify-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="w-full flex items-center justify-center font-medium text-lg p-8">
                  Çıxış etmək istədiyinizdən əminsinizmi?
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  className="text-white rounded-lg font-medium"
                  onPress={onClose}
                >
                  Geri
                </Button>
                <Button
                  className="bg-base text-white rounded-lg font-medium"
                  onPress={() => {
                    onClose();
                    handleLogout();
                  }}
                >
                  Çıxış et
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <When condition={isFull}>
        <Tooltip
          content=" Çıxış et"
          placement="right"
          showArrow
          classNames={{
            base: ["before:bg-white dark:before:bg-white"],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black bg-white from-white to-neutral-400",
            ],
          }}
        >
          <Button
            onClick={onOpen}
            className="w-12 min-w-12 bg-inherit hover:bg-red-400 text-white rounded-sm flex item"
            startContent={<IoIosLogOut size={17} />}
          />
        </Tooltip>
      </When>
      <When condition={!isFull}>
        <Button
          className="w-9/12 h-9 bg-inherit hover:bg-red-400 text-white rounded-sm flex item"
          onClick={onOpen}
          startContent={<IoIosLogOut size={17} />}
        >
          Çıxış et
        </Button>
      </When>
    </>
  );
};
