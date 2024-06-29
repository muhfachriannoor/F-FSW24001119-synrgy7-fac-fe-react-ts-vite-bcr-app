import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IFormUsers } from "@/interfaces/IUsers";
import { axiosInstance } from "@/lib/axios";

export const useEditUsers = ({ onSuccess, onError }: any) => {
  const params = useParams();
  const editUsers = async (requestDataUsers: IFormUsers) => {
    const response = await axiosInstance.put(`/api/users/${params.id}`, requestDataUsers);
    return response;
  };

  return useMutation({
    mutationFn: editUsers,
    onSuccess,
    onError,
  });
};
