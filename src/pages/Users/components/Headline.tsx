import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

type THeadline = {
  setSearch: (e: string) => void;
  search: string;
};

export const Headline: React.FC<THeadline> = ({ setSearch, search }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Modal
        placement="center"
        backdrop="blur"
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Yeni İstifadəçi
              </ModalHeader>
              <ModalBody>salam</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Bağla
                </Button>
                <Button color="primary" onPress={onClose}>
                  Təsdiqlə
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="w-full flex items-center justify-between">
        <Input
          className="my-2 mr-1 w-60"
          isClearable
          value={search}
          placeholder="axtar..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          onClear={() => setSearch("")}
          classNames={{
            inputWrapper: `h-10 bg-white dark:bg-black border-1 rounded-lg`,
          }}
        />
        <Button
          type="submit"
          className="ml-1 w-36 text-white rounded-lg bg-base"
          onClick={onOpen}
        >
          Yeni İstifadəçi
        </Button>
      </div>
    </>
  );
};
