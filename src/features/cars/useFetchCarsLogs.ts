import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";
import { ICarsLogs } from "@/interfaces/ICars";

export const useFetchCarsLogs = () => {
  const getCarsLogs = async () => {
    const response: AxiosResponse = await axiosInstance.get("/api/cars/logs");

    return response.data.data.cars;
  };

  return useQuery({
    queryFn: getCarsLogs,
    queryKey: ["getCarsLogs"],
  });
};
