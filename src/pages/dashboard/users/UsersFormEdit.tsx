import { ReactElement, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { IFormUsers } from "@/interfaces/IUsers";
import { useFetchUsersById } from "@/features/users/useFetchUsersById";
import { useEditUsers } from "@/features/users/useEditUsers";
import LayoutDashboard from "@/components/dashboard/Layout";
import SidebarSubMenu from "@/components/dashboard/SidebarSubMenu";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";

export default function CarsFormEdit(): ReactElement {
  const { register, handleSubmit, setValue } = useForm<IFormUsers>();
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorData, setErrorData] = useState<string[]>([]);
  const navigate = useNavigate();

  const { data: dataUsersId } = useFetchUsersById();
  const { mutate, isPending } = useEditUsers({
    onSuccess: () => {
      Swal.fire({
        title: "Success Edit User!",
        icon: "success",
      }).then(() => {
        navigate("/dashboard/users");
      });
    },
    onError: (error: any) => {
      setIsError(true);
      if (error.message.response.data.message == "Validation Error") {
        setErrorMessage(error.message.response.data.message);
        setErrorData(error.message.response.data.data.validations);
      } else if (
        error.message.response.data.message == "You cannot access this feature!"
      ) {
        Swal.fire({
          title: "You cannot access this feature!",
          icon: "warning",
        }).then(() => {
          navigate("/dashboard/users");
        });
      } else {
        setErrorMessage(error.message.response.data.message);
        setErrorData([]);
      }
    },
  });

  const onSubmit: SubmitHandler<IFormUsers> = (data): void => {
    let dataInput: IFormUsers;
    if(data.password) {
      dataInput = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
    }else{
      dataInput = {
        name: data.name,
        email: data.email,
      };
    }
    mutate(dataInput);
  };

  const resetField = () => {
    setValue("name", "");
    setValue("email", "");
  };

  useEffect(() => {
    if (dataUsersId !== undefined) {
      setValue("name", dataUsersId.name);
      setValue("email", dataUsersId.email);
    }
  }, [dataUsersId]);

  return (
    <>
      <LayoutDashboard menu="cars">
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
          <div className="container-fluid">
            <div className="row mt-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb fw-bold">
                  <li className="breadcrumb-item">Users</li>
                  <li className="breadcrumb-item">List User</li>
                  <li
                    className="breadcrumb-item fw-normal active"
                    aria-current="page"
                  >
                    Edit User
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <h4>Edit User</h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Link to="/dashboard/users">
                  <button className="btn bg--dark-blue-04">
                    <span className="fa-solid fa-chevron-left"></span>
                    &nbsp;&nbsp;Go Back
                  </button>
                </Link>
              </div>
            </div>
            {isError ? (
              <div className="row mt-3">
                <div className="col-12">
                  <Alert
                    variant="danger"
                    onClose={() => setIsError(false)}
                    dismissible
                  >
                    <p>{errorMessage}</p>
                    <ul>
                      {errorData.map((error, key) => (
                        <li key={key}>{error}</li>
                      ))}
                    </ul>
                  </Alert>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="row mt-3">
              <div className="col-12">
                <div className="card filter-car-content">
                  <div className="card-body">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      encType="multipart/form-data"
                    >
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            {...register("name")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="youremail@mail.com"
                            {...register("email")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Password
                        </label>
                        <div className="col-6">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="******"
                            {...register("password")}
                          />
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="d-flex gap-3">
                          <button
                            type="reset"
                            className="btn btn bg-outline--dark-blue-04"
                            onClick={() => resetField()}
                          >
                            Reset
                          </button>
                          {isPending ? (
                            <button
                              type="submit"
                              className="btn bg--dark-blue-04"
                              disabled
                            >
                              <div
                                className="spinner-border text-white"
                                role="status"
                              ></div>
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="btn btn bg--dark-blue-04"
                            >
                              Save
                            </button>
                          )}
                        </div>
                      </div>
                    </form>
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
