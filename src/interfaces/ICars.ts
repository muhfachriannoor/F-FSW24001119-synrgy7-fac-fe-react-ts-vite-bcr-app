export interface ICars {
  id: number;
  typeDriver: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  availableAt: string;
  options: string;
  specs: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface ICarsContextState {
  data: ICars[] | null | undefined;
  getCars: CallableFunction;
}

export interface ICarsFilter {
  typeDriver: string;
  dateCar: string;
  pickTime: string;
  totalPassenger?: number;
}

export interface IFormCars {
  typeDriver: string;
  plate: string;
  manufacture: string;
  model: string;
  image: any;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: string;
  type: string;
  year: number;
  availableAt: string;
  options: string;
  specs: string;
}

export interface ICarsLogs {
  action: string,
  time_log: string,
  users: {
    name: string,
    email: string,
    role: string,
  };
}