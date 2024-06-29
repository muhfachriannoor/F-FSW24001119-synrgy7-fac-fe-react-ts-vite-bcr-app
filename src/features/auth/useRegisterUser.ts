import { useMutation } from "@tanstack/react-query";
import { IRegister } from "@/interfaces/IAuth";
import { axiosInstance } from "@/lib/axios";

export const useRegisterUser = ({ onSuccess, onError }: any) => {
  const registerUser = async (requestDataUser: IRegister) => {
    const response = await axiosInstance.post("/api/register", requestDataUser);
    return response;
  };

  return useMutation({
    mutationFn: registerUser,
    onSuccess,
    onError,
  });
};