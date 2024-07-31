import { z } from "zod";
// Article Schema
export const createZodSchema= z.object({
  title:z.string().min(2).max(200),
  description:z.string().min(5),
});

// Register User
export const createRegisterZodSchema= z.object({
  username:z.string().min(2).max(200),
  email:z.string().min(5).max(200).email(),
  password:z.string().min(6),
});
// Login User
export const LoginZodSchema= z.object({
 
  email:z.string().min(5).max(200).email(),
  password:z.string().min(6),
});