import { ICars, ICarsLogs } from "@/interfaces/ICars";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useFetchCarsLogsById } from "@/features/cars/useFetchCarsLogsById";
import { formatDateIND } from "@/lib/utils"; 
import LayoutDashboard from "@/components/dashboard/Layout";
import SidebarSubMenu from "@/components/dashboard/SidebarSubMenu";
import Spinner from "react-bootstrap/Spinner";

export default function CarsLogsDetail(): ReactElement {
  const { data: dataCarsLogs, isLoading: isLoadingLogs } = useFetchCarsLogsById();
  const dataCars: ICars = dataCarsLogs;
  const dataLogs: ICarsLogs[] = dataCarsLogs?.carsLogs;

  const renderLogs = () => {
    return dataLogs?.map((row, key) => {
      return (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{row.action}</td>
          <td>{formatDateIND(row.time_log)}</td>
          <td>{row.users.email}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <LayoutDashboard menu="cars">
        {/*SIDEBAR SUB MENU*/}
        <div className="col-2 bg--white g-0 vh-100">
          <ul className="list-group justify-content-center mt-1 gap-2">
            <li className="list-group-item list-sub-menu">
              <a href="#" className="nav-link">
                CARS
              </a>
            </li>
            <SidebarSubMenu
              subMenu="Data Cars"
              isActive="false"
              url="/dashboard/cars"
            />
            <SidebarSubMenu
              subMenu="Data Logs Cars"
              isActive="true"
              url="/dashboard/cars/logs"
            />
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
                      <li className="breadcrumb-item">Cars</li>
                      <li className="breadcrumb-item">Data Logs Cars</li>
                      <li
                        className="breadcrumb-item fw-normal active"
                        aria-current="page"
                      >
                        Detail
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <h4>
                      Detail {dataCars?.manufacture} / {dataCars?.type}
                    </h4>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <Link to="/dashboard/cars/logs">
                      <button className="btn bg--dark-blue-04">
                        <span className="fa-solid fa-chevron-left"></span>
                        &nbsp;&nbsp;Go Back
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        {isLoadingLogs ? (
                          <div className="text-center">
                            <Spinner animation="border" role="status">
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </Spinner>
                          </div>
                        ) : null}
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Action</th>
                              <th scope="col">Time Log</th>
                              <th scope="col">User</th>
                            </tr>
                          </thead>
                          <tbody>{renderLogs()}</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
}
