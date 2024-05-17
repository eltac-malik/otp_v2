import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { isEmpty } from "lodash";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { getChildListForKey } from "@/shared/utils";
import { FormInput } from "../components/FormInput";
import { FormSelect } from "@/components/Select";

import {
  distirctList,
  underGroundList,
  undergroundAroundList,
  distirctTownshipList,
  estateList,
  townShipAround,
  announceTypes,
  estateDocument,
  oldEstateProjectTypes,
  sellTypes,
  repairTypes,
} from "@/shared/constant/estate";

type TNewNotification = {
  isOpen: boolean;
  onOpenChange: any;
};

export const NewNotification: React.FC<TNewNotification> = ({
  isOpen,
  onOpenChange,
}) => {
  const methods = useForm();

  useEffect(() => {
    if (methods.watch("distirct") !== "bakı") {
      methods.setValue("town", "");
      methods.setValue("distirct", "");
      methods.setValue("underground", "");
      methods.setValue("townShipAround", "");
    }
  }, [methods.watch("distirct")]);

  const onSubmit = (values: any) => console.log(values);

  const hasSubArea = (array: any, key: string) =>
    !isEmpty(getChildListForKey(array, key));

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      size="full"
      className="w-full flex items-center justify-center"
    >
      <ModalContent>
        {(onClose) => (
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="h-screen w-full flex items-start justify-between flex-col"
            >
              <ModalBody className="w-full">
                <div className="w-full font-medium text-lg p-8 flex items-start justify-start flex-col">
                  <div className="w-full flex items-start justify-start flex-col py-4 border-b-1">
                    <h2>Başlıq</h2>
                    <div className="w-full grid grid-cols-5 gap-10">
                      <FormInput
                        label="Başlıq"
                        register={methods.register("title")}
                        className="w-80"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-start justify-start flex-col py-4 border-b-1">
                    <h2>Qiymət</h2>
                    <div className="w-full grid grid-cols-5 gap-10">
                      <FormInput
                        type="number"
                        register={methods.register("price_min")}
                        className="w-80"
                        label="Qiymət Minimum"
                      />
                      <FormInput
                        type="number"
                        register={methods.register("price_max")}
                        className="w-80"
                        label="Qiymət Maksimum"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-start justify-start flex-col py-4 border-b-1">
                    <h2>Elan Məlumatları</h2>
                    <div className="w-full grid grid-cols-5 gap-10 ">
                      <FormSelect
                        condition
                        options={announceTypes}
                        className="!w-80"
                        register={methods.register("announceType")}
                        placeholder="Elanın növü"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />
                      <FormSelect
                        condition
                        options={estateList}
                        className="!w-80"
                        register={methods.register("estateType")}
                        placeholder="Əmlakın növü"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />

                      <FormSelect
                        condition={
                          !!hasSubArea(
                            estateDocument,
                            methods.watch("estateType")
                          )
                        }
                        options={estateDocument.filter(
                          (e) => e.parentKey === methods.watch("estateType")
                        )}
                        className="!w-80"
                        register={methods.register("estateDocument")}
                        placeholder="Sənədin tipi"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />

                      <FormSelect
                        condition={
                          !!hasSubArea(sellTypes, methods.watch("estateType"))
                        }
                        options={sellTypes}
                        className="!w-80"
                        register={methods.register("sellType")}
                        placeholder="Satış tipi"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />
                      <FormSelect
                        condition={
                          !!hasSubArea(
                            oldEstateProjectTypes,
                            methods.watch("estateType")
                          )
                        }
                        options={oldEstateProjectTypes.filter(
                          (e) => e.parentKey === methods.watch("estateType")
                        )}
                        className="!w-80"
                        register={methods.register("oldEstateProjectType")}
                        placeholder="Evin tipi"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-start justify-start flex-col py-4 border-b-1">
                    <h2>Ərazi Məlumatları</h2>
                    <div className="w-full grid grid-cols-5 gap-10">
                      <FormSelect
                        condition
                        options={distirctList}
                        className="!w-80 mt-11"
                        register={methods.register("distirct")}
                        placeholder="Şəhəri seç"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />

                      <FormSelect
                        condition={
                          !!hasSubArea(
                            distirctTownshipList,
                            methods.watch("distirct")
                          )
                        }
                        options={distirctTownshipList}
                        className="!w-80"
                        register={methods.register("town")}
                        placeholder="Daxili rayonu seç"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />

                      <FormSelect
                        condition={
                          !!hasSubArea(
                            underGroundList,
                            methods.watch("distirct")
                          )
                        }
                        options={underGroundList}
                        className="!w-80"
                        register={methods.register("underground")}
                        placeholder="Metronu seç"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />
                      <FormSelect
                        condition={
                          !!hasSubArea(
                            undergroundAroundList,
                            methods.watch("underground")
                          )
                        }
                        options={undergroundAroundList.filter(
                          (e) => e.parentKey === methods.watch("underground")
                        )}
                        className="!w-80"
                        register={methods.register("undergroundAround")}
                        placeholder="Yaxınlıqdakı ərazini seç"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />

                      <FormSelect
                        condition={
                          !!hasSubArea(townShipAround, methods.watch("town"))
                        }
                        options={townShipAround.filter(
                          (e) => e.parentKey === methods.watch("town")
                        )}
                        className="!w-80"
                        register={methods.register("townShipAround")}
                        placeholder="Rayon daxili ərazini seç"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-start justify-start flex-col py-4 border-b-1">
                    <h2>Təmir tipi</h2>
                    <div className="w-full grid grid-cols-5 gap-10 ">
                      <FormSelect
                        condition
                        options={repairTypes}
                        className="!w-80"
                        register={methods.register("repairType")}
                        placeholder="Elanın növü"
                        triggerClass="mt-6 border-1 w-80 bg-white rounded-lg h-12 min-h-12 data-[hover=true]:bg-white data-[focus=true]:border-base data-[focus=true]:bg-white shadow-none"
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="w-full flex items-center justify-end">
                <Button
                  color="danger"
                  className="text-white rounded-lg font-medium"
                  onPress={onClose}
                >
                  Geri
                </Button>
                <Button
                  className="bg-base text-white rounded-lg font-medium"
                  type="submit"
                >
                  Yarat
                </Button>
              </ModalFooter>
            </form>
          </FormProvider>
        )}
      </ModalContent>
    </Modal>
  );
};
