import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ICars, ICarsLogs } from "@/interfaces/ICars";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const useFetchCarsLogsById = () => {
  const params = useParams();
  const getCarsLogsById = async () => {
    const response: AxiosResponse = await axiosInstance.get(`/api/cars/${params.id}/logs`);
    if (response !== undefined) {
      //return response.data.data.cars.carsLogs;
      return response.data.data.cars;
    }
  };

  return useQuery({
    queryFn: getCarsLogsById,
    queryKey: ["getCarsLogsById"],
  });
};
