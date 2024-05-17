import { z } from "zod";

export const LoginSchama = z.object({
  userCode: z.string().min(1, "Boş ola bilməz !"),
  password: z.string().min(1, "Boş ola bilməz !"),
});
