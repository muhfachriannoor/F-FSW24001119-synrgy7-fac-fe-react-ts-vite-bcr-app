import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";
import { useFetchUsersAll } from "@/features/users/useFetchUsersAll";
import { useDeleteUsers } from "@/features/users/useDeleteUsers";
import { roleCapitalize } from "@/lib/utils";
import LayoutDashboard from "@/components/dashboard/Layout";
import SidebarSubMenu from "@/components/dashboard/SidebarSubMenu";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";

export default function UsersData(): ReactElement {
  const { data: dataUsers, isLoading: isLoadingUsers, refetch: refetchUsers } = useFetchUsersAll();
  const { mutate: deleteUsers } = useDeleteUsers({
    onSuccess: () => {
      Swal.fire({
        title: "Success delete data",
        icon: "success"
      });
      refetchUsers();
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
        deleteUsers(id);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.message);
      }
    }
  };

  const renderUsers = () => {          
    return dataUsers?.map((row, key) => {
      return (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{roleCapitalize(row.role)}</td>
          <td>
            <Link to={`/dashboard/users/edit/${row.id}`} className="btn bg--lime-green-04">
              <span className="fa-solid fa-pen-to-square"></span>&nbsp;Edit
            </Link>
          </td>
          <td>
            <button className="btn btn-outline-danger" onClick={() => confirmationDelete(row.id)}>
              <span className="fa-solid fa-trash"></span>&nbsp;Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <LayoutDashboard menu="users">
        {/*SIDEBAR SUB MENU*/}
        <div className="col-2 bg--white g-0 vh-100">
          <ul className="list-group justify-content-center mt-1 gap-2">
            <li className="list-group-item list-sub-menu">
              <a href="#" className="nav-link">
                USERS
              </a>
            </li>
            <SidebarSubMenu
              subMenu="Data Users"
              isActive="true"
              url="/dashboard/users"
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
                      <li className="breadcrumb-item">Users</li>
                      <li
                        className="breadcrumb-item fw-normal active"
                        aria-current="page"
                      >
                        List User
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <h4>List User</h4>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <Link to="/dashboard/users/create">
                      <button className="btn bg--dark-blue-04">
                        <span className="fa-solid fa-plus"></span>
                        &nbsp;&nbsp;Add New User
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        {isLoadingUsers ? (
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
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Role</th>
                              <th style={{ width: "16%" }} colSpan={2}>Action</th>
                            </tr>
                          </thead>
                          <tbody>{renderUsers()}</tbody>
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
