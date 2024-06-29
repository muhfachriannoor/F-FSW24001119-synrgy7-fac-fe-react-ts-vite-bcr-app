import { ReactElement, ReactNode } from "react";
import { checkRole } from "@/lib/utils";
import SwalAlertProtected from "./swalAlertProtected";

type TAuthProcted = {
  children: ReactNode;
  role: string[]
}

export default function AuthProtected({ children, role }: TAuthProcted): ReactElement {

  return (
    <>
      {checkRole(role) ? (
        children
      ) : (
        <SwalAlertProtected />
      )}
    </>
  );
}