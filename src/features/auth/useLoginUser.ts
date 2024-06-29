import { useMutation } from "@tanstack/react-query";
import { ILogin } from "@/interfaces/IAuth";
import { axiosInstance } from "@/lib/axios";

export const useLoginUser = ({ onSuccess, onError }: any) => {
  const loginUsers = async (requestDataUsers: ILogin) => {
    const response = await axiosInstance.post("/api/login", requestDataUsers);
    return response;
  };

  return useMutation({
    mutationFn: loginUsers,
    onSuccess,
    onError,
  });
};
