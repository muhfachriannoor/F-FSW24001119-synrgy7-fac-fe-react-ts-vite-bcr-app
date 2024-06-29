import { useMutation } from "@tanstack/react-query";
import { IFormCars } from "@/interfaces/ICars";
import { axiosInstance } from "@/lib/axios";

export const useCreateCars = ({ onSuccess, onError }: any) => {
  const createCars = async (requestDataCars: IFormCars) => {
    const response = await axiosInstance.post("/api/cars", requestDataCars, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  };

  return useMutation({
    mutationFn: createCars,
    onSuccess,
    onError,
  });
};