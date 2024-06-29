import { useQuery } from "@tanstack/react-query";
import { ICars } from "@/interfaces/ICars";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";
import { useFetchCurrentUser } from "../auth/useFetchCurrentUser";

export const useFetchCarsAll = () => {
  const { dataUsers } = useFetchCurrentUser();

  const getCars = async (): Promise<ICars[]> => {
    let apiCarsURL;
    if(dataUsers?.role != "MEMBER") {
      apiCarsURL = "/api/cars";
    } else {
      apiCarsURL = "/api/cars/list-available"
    }

    const response: AxiosResponse = await axiosInstance.get(apiCarsURL);

    return response.data.data.cars;
  };

  return useQuery({
    queryFn: getCars,
    queryKey: ["getCars"],
  });
};
