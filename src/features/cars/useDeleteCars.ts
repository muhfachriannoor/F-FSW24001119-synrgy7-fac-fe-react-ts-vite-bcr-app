import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

export const useDeleteCars = ({ onSuccess }: any) => {
  const deleteCars = async (id: number) => {
    const response = await axiosInstance.delete(`/api/cars/${id}`);
    return response;
  };

  return useMutation({
    mutationFn: deleteCars,
    onSuccess,
  });
};
