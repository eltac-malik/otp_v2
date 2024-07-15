import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { UserImage } from "./UserImage";

type TDetailModal = {
  isOpen: boolean;
  onOpenChange: () => void;
  name?: string;
  image?: string | null;
  readOnly?: boolean;
  userId?: string;
};

export const DetailModal: React.FC<TDetailModal> = ({
  isOpen,
  onOpenChange,
  name,
  image,
  readOnly,
  userId,
}) => {
  const [t] = useTranslation();
  return (
    <>
      <Modal
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        hideCloseButton
        isDismissable={false}
        isKeyboardDismissDisabled={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody className="w-full flex items-center justify-center flex-row">
                <div className="w-12/12">
                  <UserImage
                    image={image}
                    readOnly={readOnly}
                    userId={userId!}
                    onClose={onClose}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  {t("back")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
