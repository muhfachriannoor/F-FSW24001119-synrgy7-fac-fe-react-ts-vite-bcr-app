import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { ICurrentUser } from "@/interfaces/IAuth";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const useFetchCurrentUser = () => {
  const getCurrentUser = async ({queryKey} : QueryFunctionContext): Promise<ICurrentUser | undefined> => {
    const response: AxiosResponse = await axiosInstance.get("/api/current-user");
    if (response !== undefined) {
      return response.data.data.users;
    }
  };

  const { data: row } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["currentUser"],
  });

  return {
    dataUsers: row,
  };
};
