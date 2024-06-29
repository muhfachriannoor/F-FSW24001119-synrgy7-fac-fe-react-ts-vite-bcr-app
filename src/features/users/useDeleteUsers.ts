import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

export const useDeleteUsers = ({ onSuccess }: any) => {
  const deleteUsers = async (id: number) => {
    const response = await axiosInstance.delete(`/api/users/${id}`);
    return response;
  };

  return useMutation({
    mutationFn: deleteUsers,
    onSuccess,
  });
};