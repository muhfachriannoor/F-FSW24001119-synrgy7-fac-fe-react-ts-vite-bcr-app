import { useMutation } from "@tanstack/react-query";
import { IFormUsers } from "@/interfaces/IUsers";
import { axiosInstance } from "@/lib/axios";

export const useCreateUsers = ({ onSuccess, onError }: any) => {
  const createUsers = async (requestDataUsers: IFormUsers) => {
    const response = await axiosInstance.post("/api/users", requestDataUsers);
    return response;
  };

  return useMutation({
    mutationFn: createUsers,
    onSuccess,
    onError,
  });
};