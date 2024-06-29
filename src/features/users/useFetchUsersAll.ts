import { useQuery } from "@tanstack/react-query";
import { IUsers } from "@/interfaces/IUsers";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const useFetchUsersAll = () => {

  const getUsers = async (): Promise<IUsers[]> => {
    const response: AxiosResponse = await axiosInstance.get("/api/users");

    return response.data.data.users;
  };

  return useQuery({
    queryFn: getUsers,
    queryKey: ["getUsers"],
  });
};
