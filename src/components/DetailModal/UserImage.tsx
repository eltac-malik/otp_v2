import { useRef } from "react";
import { Button, Image } from "@nextui-org/react";

import Default_img from "@/assets/img/default_img.png";
import { ENDPOINTS } from "@/api/routing";
import axios from "axios";
import { useMutation } from "react-query";

type TUserImage = {
  image?: string | null;
  readOnly?: boolean;
  userId: string;
  onClose: () => void;
};

export const UserImage: React.FC<TUserImage> = ({
  image,
  readOnly,
  userId,
  onClose,
}) => {
  const updloadImgRef = useRef<HTMLInputElement | null>(null);

  const uploadFile = async (file: File, userId: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", userId);

    const response = await axios.post(ENDPOINTS.POST_IMAGE_UPLOAD(), formData, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("token") ?? "")?.state?.token
        }`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  };

  const { mutate } = useMutation({
    mutationFn: (file: File) => uploadFile(file, userId),
    onSuccess: () => {
      onClose();
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      mutate(files[0]);
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col pt-2">
      {readOnly ? (
        <Image width={400} height={400} src={Default_img} />
      ) : image ? (
        <div className="h-[400px] w-full flex items-center justify-center flex-col">
          <input
            type="file"
            ref={updloadImgRef}
            className="hidden"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleFileUpload}
          />
          <Image width={300} height={300} src={image} />
          <Button
            className="mt-2 w-10/12 text-white rounded-lg"
            color="success"
            onClick={() => updloadImgRef.current?.click()}
          >
            Dəyiş
          </Button>
        </div>
      ) : (
        <>
          <input
            type="file"
            ref={updloadImgRef}
            className="hidden"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleFileUpload}
          />
          <Button
            className="mt-2 w-10/12 text-white rounded-lg"
            color="success"
            onClick={() => updloadImgRef.current?.click()}
          >
            Şəkil yüklə
          </Button>
        </>
      )}
    </div>
  );
};
