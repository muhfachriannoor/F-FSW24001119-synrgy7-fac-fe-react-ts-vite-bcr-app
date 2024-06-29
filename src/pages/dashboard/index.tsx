import { ReactElement } from "react";
import LayoutDashboard from "@/components/dashboard/Layout";
import SidebarSubMenu from "@/components/dashboard/SidebarSubMenu";


export default function Dashboard(): ReactElement {
  return (
    <LayoutDashboard menu="dashboard">
      {/*SIDEBAR SUB MENU*/}
      <div className="col-2 bg--white g-0 vh-100">
        <ul className="list-group justify-content-center mt-1 gap-2">
          <li className="list-group-item list-sub-menu">
            <a href="#" className="nav-link">
              DASHBOARD
            </a>
          </li>
          <SidebarSubMenu subMenu="Dashboard" isActive="true" url="/dashboard" />
        </ul>
      </div>
      {/*CONTENT*/}
      <div className="col-10 bg--dashboard-white">
        <div className="row">
          <div className="col-12 bg--dashboard-white">
            <div className="container-fluid">
              <div className="row mt-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb fw-bold">
                    <li className="breadcrumb-item">Dashboard</li>
                  </ol>
                </nav>
              </div>
              <div className="row mt-5">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">Welcome to Dashboard</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}
