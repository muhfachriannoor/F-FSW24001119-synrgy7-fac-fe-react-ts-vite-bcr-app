import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useFetchCurrentUser } from "@/features/auth/useFetchCurrentUser";
import NavbarDashboard from "@/components/dashboard/NavbarDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/dashboard.css";

type TLayout = {
  menu: string;
  children: ReactNode;
};

export default function LayoutDashboard({ menu, children }: TLayout): ReactElement {
  const { dataUsers } = useFetchCurrentUser();

  return (
    <>
      <main>
        <div className="container-fluid g-0 overflow-hidden">
          <div className="row">
            <div className="col-1 bg--dark-blue-04 d-flex flex-column sidebar-menu g-0">
              {/*SIDEBAR MENU BLUE*/}
              <div className="d-flex justify-content-center py-4">
                <div className="logo-dashboard-square bg--dark-blue-01"></div>
              </div>
              <ul className="list-group mt-1 gap-2 text-center">
                <li className={menu == "dashboard" ? "list-group-item list-menu active": "list-group-item list-menu"}>
                  <Link to="/dashboard" className="nav-link text-white">
                    <div className="icon-menu">
                      <span className="fa-solid fa-house"></span>
                    </div>
                    <div className="text-link">Dashboard</div>
                  </Link>
                </li>
                <li className={menu == "cars" ? "list-group-item list-menu active" : "list-group-item list-menu"}>
                  <Link to="/dashboard/cars" className="nav-link text-white">
                    <div className="icon-menu">
                      <span className="fa-solid fa-truck"></span>
                    </div>
                    <div className="text-link">Cars</div>
                  </Link>
                </li>
                {dataUsers?.role == "SUPERADMIN" ? (
                  <li className={menu == "users" ? "list-group-item list-menu active" : "list-group-item list-menu"}>
                    <Link to="/dashboard/users" className="nav-link text-white">
                      <div className="icon-menu">
                        <span className="fa-solid fa-users"></span>
                      </div>
                      <div className="text-link">Users</div>
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <div className="col-11 bg--white">
              {/*NAVBAR*/}
              <NavbarDashboard />
              <div className="row">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
