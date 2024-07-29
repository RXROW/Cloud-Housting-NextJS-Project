import { z } from "zod";

export const createZodSchema= z.object({
  title:z.string().min(2).max(200),
  body:z.string().min(5),
});