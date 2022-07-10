import { RandomUUIDOptions } from "crypto";
import { networkInterfaces } from "os";
import { myDataSource } from "../../core/datasource";
import { User } from "./models"

interface UserReadProps {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
}[]

export const listUsers = async (): Promise<UserReadProps> => {
  const userRepository = await myDataSource.getRepository(User).find();
  return userRepository;
}

export const createUser = async (payload: any): Promise<User> => {
  const userRepository = myDataSource.getRepository(User);

  const user = new User();
  user.isActive = true
  user.createdAt = new Date()

  return userRepository.save({
    ...user,
    ...payload,
  });
};