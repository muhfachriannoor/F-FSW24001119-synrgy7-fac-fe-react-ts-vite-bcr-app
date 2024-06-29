import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ICars } from "@/interfaces/ICars";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const useFetchCarsById = () => {
  const params = useParams();
  const getCarsById = async (): Promise<ICars | undefined> => {
    const response: AxiosResponse = await axiosInstance.get(`/api/cars/${params.id}`);
    if (response !== undefined) {
      return response.data.data.cars;
    }
  };

  return useQuery({
    queryFn: getCarsById,
    queryKey: ["getCarsById"],
  });
};
