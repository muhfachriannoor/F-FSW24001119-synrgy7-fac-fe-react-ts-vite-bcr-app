import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IFormCars } from "@/interfaces/ICars";
import { axiosInstance } from "@/lib/axios";

export const useEditCars = ({ onSuccess, onError }: any) => {
  const params = useParams();
  const editCars = async (requestDataCars: IFormCars) => {
    const response = await axiosInstance.put(`/api/cars/${params.id}`, requestDataCars, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  };

  return useMutation({
    mutationFn: editCars,
    onSuccess,
    onError,
  });
};
