import { useNavigate, NavigateFunction } from "react-router-dom";

let globalNavigate: NavigateFunction;

const GlobalHistory = (): null => {
  globalNavigate = useNavigate();

  return null;
};

const formatDateIND = (date: string | Date): string => {
  const dateTimeObject: Date = new Date(date);
  const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Makassar",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return formatter.format(dateTimeObject).replace(" pukul", ", jam");
};

const formatDateField = (date: string): any => {
  const dateTimeObject = new Date(date);
  const year = dateTimeObject.getFullYear().toString().padStart(4, "0");
  const month = String(dateTimeObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateTimeObject.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formatRupiah = (currency: number): string => {
  return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
    currency
  );
};

const checkRole = (role: string[]): boolean => {
  const getStorage: any = localStorage.getItem("auth_role");
  if(!role.includes(getStorage)) {
    return false;
  } else {
    return true;
  }
}

const roleCapitalize = (role: string): string => {
  const lowerCase: string = role.toLowerCase();
  if(lowerCase == "superadmin") {
    return "Super Admin";
  }else {
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  }
}

export {
  GlobalHistory,
  globalNavigate,
  formatDateIND,
  formatDateField,
  formatRupiah,
  checkRole,
  roleCapitalize,
};
