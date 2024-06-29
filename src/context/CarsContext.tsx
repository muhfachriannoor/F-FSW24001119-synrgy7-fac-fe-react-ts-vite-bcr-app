import { createContext } from "react";
import { ICarsContextState } from "@/interfaces/ICars";

export const CarsContext = createContext<ICarsContextState>({
  data: [],
  getCars: () => null,
});