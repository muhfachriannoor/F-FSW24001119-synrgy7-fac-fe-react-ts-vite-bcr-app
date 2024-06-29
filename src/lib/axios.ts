import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { globalNavigate } from "./utils";
import Swal from "sweetalert2";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string = localStorage.getItem("auth_token") || "";
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status == 200 || response.status == 201) {
      return response;
    } else {
      return Promise.reject({ message: "Error" });
    }
  },
  (error: AxiosError) => {
    if (error.response) {
      if ((error as any).response.data.error == "jwt must be provided") {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        localStorage.removeItem("auth_role");

        globalNavigate("/");
        Swal.fire({
          title: "Unauthorized",
          icon: "error",
          showCloseButton: true,
          //background: "#000",
          timer: 2000,
          timerProgressBar: true,
        })
      } else if((error as any).response.data.message == "Data not found") {
        Swal.fire({
          title: `Data not found`,
          icon: "info",
          showCloseButton: true,
          //background: "#000",
        });
     } else {
        throw new AxiosError(error as any);
     }
    } else {
      return Promise.reject(error);
    }
  }
);