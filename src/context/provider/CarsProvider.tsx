import { ReactElement, ReactNode, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { AxiosResponse } from "axios";
import { CarsContext } from "@/context/CarsContext";
import { ICars, ICarsFilter } from "@/interfaces/ICars";
import Swal from "sweetalert2";

type CarsContextProps = {
  children: ReactNode;
};

export function CarsProvider({ children }: CarsContextProps): ReactElement {
  const [carsState, setCarsState] = useState<ICars[] | null>(null);
  
  const getAll = async (dataFilter: ICarsFilter) => {
    let filterParams;
    const apiURL = `/api/cars/list-available`;
    if (dataFilter) {
      if(!dataFilter.totalPassenger) {
        // jika tidak ada total passenger
        filterParams = {
          typeDriver: dataFilter.typeDriver,
          date: dataFilter.dateCar,
          pickTime: dataFilter.pickTime,
        };
      } else {
        // jika ada total passenger
        filterParams = {
          typeDriver: dataFilter.typeDriver,
          date: dataFilter.dateCar,
          pickTime: dataFilter.pickTime,
          totalPassenger: dataFilter.totalPassenger,
        };
      }
    }
    
    try {
      await Swal.fire({
        title: "Loading Data",
        icon: "info",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
      })
      const carsResponse: AxiosResponse = await axiosInstance.get(apiURL, {params: filterParams});
      const carsData: ICars[] = carsResponse.data.data.cars;
      setCarsState(carsData);
    } catch (error) {
      setCarsState(null);
    }
  };

  return (
    <CarsContext.Provider value={{ data: carsState, getCars: getAll }}>
      {children}
    </CarsContext.Provider>
  );
}