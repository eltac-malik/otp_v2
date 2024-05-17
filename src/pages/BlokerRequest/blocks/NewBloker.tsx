import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import OtpInput from "react-otp-input";

import { FormInput } from "@/pages/Notification/components/FormInput";
import { AnimationLayout } from "@/layout/Animation";

type TNewBloker = {
  isOpen: boolean;
  onOpenChange: any;
};

export const NewBloker: React.FC<TNewBloker> = ({ isOpen, onOpenChange }) => {
  const {} = useForm();
  const [otpCode, setOtpCode] = useState("");
  return (
    <Modal
      isOpen={isOpen}
      className="flex items-center justify-center"
      placement="center"
      onOpenChange={onOpenChange}
      size="xl"
      isDismissable={false}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Yeni Makler Yarat
          </ModalHeader>
          <ModalBody>
            <FormInput className="w-96" placeholder="Ad" />
            <FormInput className="w-96" placeholder="Soyad" />
            <FormInput className="w-96" placeholder="E-mail" type="email" />
            <FormInput
              className="w-96"
              placeholder="Mobil nömrə"
              type="number"
            />
            <AnimationLayout>
              <div className="otp-input bloker-otp w-full flex items-center bg-[#f4f4f5] rounded-lg border-1 justify-center flex-col mb-5">
                <OtpInput
                  numInputs={4}
                  value={otpCode}
                  inputType={"number"}
                  placeholder="(+994) 00-000-00-00"
                  renderInput={(props) => <input {...props} />}
                  onChange={setOtpCode}
                />
              </div>
            </AnimationLayout>
          </ModalBody>
          <ModalFooter>
            <Button
              className="rounded-lg w-[190px]"
              color="danger"
              type="submit"
            >
              Bağla
            </Button>
            <Button className="rounded-lg bg-base text-white w-[190px]">
              Təsdiqlə
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};
