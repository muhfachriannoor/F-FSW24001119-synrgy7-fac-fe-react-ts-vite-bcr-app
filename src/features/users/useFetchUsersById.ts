import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IUsers } from "@/interfaces/IUsers";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const useFetchUsersById = () => {
  const params = useParams();
  const getUsersById = async (): Promise<IUsers | undefined> => {
    const response: AxiosResponse = await axiosInstance.get(
      `/api/users/${params.id}`
    );
    if (response !== undefined) {
      return response.data.data.users;
    }
  };

  return useQuery({
    queryFn: getUsersById,
    queryKey: ["getUsersById"],
  });
};
