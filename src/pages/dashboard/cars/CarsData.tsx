import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";
import { formatRupiah } from "@/lib/utils";
import { useFetchCurrentUser } from "@/features/auth/useFetchCurrentUser";
import { useFetchCarsAll } from "@/features/cars/useFetchCarsAll";
import { useDeleteCars } from "@/features/cars/useDeleteCars";
import LayoutDashboard from "@/components/dashboard/Layout";
import SidebarSubMenu from "@/components/dashboard/SidebarSubMenu";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";

export default function CarsData(): ReactElement {
  const { dataUsers } = useFetchCurrentUser();
  const { data: dataCars, isLoading: isLoadingCars, refetch: refetchCars } = useFetchCarsAll();
  const { mutate: deleteCars } = useDeleteCars({
    onSuccess: () => {
      Swal.fire({
        title: "Success delete data",
        icon: "success"
      });
      refetchCars();
    }
  });

  const confirmationDelete = async (id: number): Promise<void> => {
    try {
      const swalAlert = await Swal.fire({
        title: "Delete Data ?",
        icon: "question",
        confirmButtonText: "Yes",
        showDenyButton: true,
        denyButtonText: "No",
      });
      if (swalAlert.isConfirmed) {
        deleteCars(id);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.message);
      }
    }
  };

  const renderCars = () => {          
    return dataCars?.map((row, key) => {
      return (
        <div className="col-4" key={key}>
          <div className="card filter-car-content">
            <img
              src={row.image}
              className="card-img-top car-img"
              alt={row.manufacture}
            />
            <div className="card-body">
              <h6 className="card-text">
                {row.manufacture} / {row.type}
              </h6>
              <h5 className="card-title">Rp. {formatRupiah(row.rentPerDay)} / hari</h5>
              <p className="card-text">{row.description}</p>
              <p className="card-text">
                <span className="fa-solid fa-users"></span> {row.capacity} Orang
              </p>
              <p className="card-text">
                <span className="fa-solid fa-gear"></span> {row.transmission}
              </p>
              <p className="card-text">
                <span className="fa-regular fa-calendar"></span> Tahun{" "}
                {row.year}
              </p>
              { dataUsers?.role == "SUPERADMIN" || dataUsers?.role == "ADMIN" ? (
              <div className="button d-flex align-items-end gap-2">
                <button
                  className="btn filter-car-btn btn-outline-danger"
                  onClick={() => confirmationDelete(row.id)}
                >
                  <span className="fa-solid fa-trash"></span>&nbsp;Delete
                </button>
                <Link to={`/dashboard/cars/edit/${row.id}`} className="btn filter-car-btn bg--lime-green-04">
                  <span className="fa-solid fa-pen-to-square"></span>&nbsp;Edit
                </Link>
              </div>
              ) : ( "" )}
            </div>
          </div>
        </div>
      );
    });
  }

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
              isActive="true"
              url="/dashboard/cars"
            />
            { dataUsers?.role == "SUPERADMIN" || dataUsers?.role == "ADMIN" ? (
            <SidebarSubMenu
              subMenu="Data Logs Cars"
              isActive="false"
              url="/dashboard/cars/logs"
            />
            ) : ( "" )}
          </ul>
        </div>
        {/*CONTENT*/}
        <div className="col-10 bg--dashboard-white">
          <div className="container-fluid">
            <div className="row mt-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb fw-bold">
                  <li className="breadcrumb-item">Cars</li>
                  <li
                    className="breadcrumb-item fw-normal active"
                    aria-current="page"
                  >
                    List Car
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <h4>List Car</h4>
              </div>
              { dataUsers?.role == "SUPERADMIN" || dataUsers?.role == "ADMIN" ? (
              <div className="col-6 d-flex justify-content-end">
                <Link to="/dashboard/cars/create">
                  <button className="btn bg--dark-blue-04">
                    <span className="fa-solid fa-plus"></span>&nbsp;&nbsp;Add
                    New Car
                  </button>
                </Link>
              </div>
              ) : ( "" )}
            </div>
            <div className="row mt-5">
              {renderCars()}
              {isLoadingCars ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
}
