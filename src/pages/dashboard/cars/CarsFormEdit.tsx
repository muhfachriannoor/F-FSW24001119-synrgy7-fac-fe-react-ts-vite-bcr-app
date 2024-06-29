import { ReactElement, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormCars } from "@/interfaces/ICars";
import { useFetchCarsById } from "@/features/cars/useFetchCarsById";
import { useEditCars } from "@/features/cars/useEditCars";
import { formatDateField } from "@/lib/utils";
import LayoutDashboard from "@/components/dashboard/Layout";
import SidebarSubMenu from "@/components/dashboard/SidebarSubMenu";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";

export default function CarsFormEdit(): ReactElement {
  const { register, handleSubmit, setValue } = useForm<IFormCars>();
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorData, setErrorData] = useState<string[]>([]);
  const navigate = useNavigate();

  const { data: dataCarsId } = useFetchCarsById();
  const { mutate, isPending } = useEditCars({
    onSuccess: () => {
      Swal.fire({
        title: "Success Edit Car!",
        icon: "success",
      }).then(() => {
        navigate("/dashboard/cars");
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
          navigate("/dashboard/cars");
        });
      } else {
        setErrorMessage(error.message.response.data.message);
        setErrorData([]);
      }
    },
  });

  const onSubmit: SubmitHandler<IFormCars> = (data): void => {
    const dataInput: IFormCars = {
      typeDriver: data.typeDriver,
      plate: data.plate,
      manufacture: data.manufacture,
      model: data.model,
      image: data.image[0],
      rentPerDay: Number(data.rentPerDay),
      capacity: Number(data.capacity),
      description: data.description,
      transmission: data.transmission,
      available: data.available,
      type: data.type,
      year: Number(data.year),
      availableAt: data.availableAt,
      options: data.options,
      specs: data.specs,
    };

    mutate(dataInput);
  };

  const resetField = () => {
    setValue("typeDriver", "");
    setValue("plate", "");
    setValue("manufacture", "");
    setValue("type", "");
    setValue("model", "");
    setValue("year", 0);
    setValue("rentPerDay", 0);
    setValue("capacity", 0);
    setValue("transmission", "");
    setValue("available", "null");
    //setValue("availableAt", "dd-mm-yyyy");
    setValue("options", "");
    setValue("specs", "");
    setValue("description", "");
  }

  useEffect(() => {
    if (dataCarsId !== undefined) {
      setValue("typeDriver", dataCarsId.typeDriver);
      setValue("plate", dataCarsId.plate);
      setValue("manufacture", dataCarsId.manufacture);
      setValue("type", dataCarsId.type);
      setValue("model", dataCarsId.model);
      setValue("year", dataCarsId.year);
      setValue("rentPerDay", dataCarsId.rentPerDay);
      setValue("capacity", dataCarsId.capacity);
      setValue("transmission", dataCarsId.transmission);
      setValue("available", `${dataCarsId.available}`);
      setValue("availableAt", formatDateField(dataCarsId.availableAt));
      setValue("options", dataCarsId.options);
      setValue("specs", dataCarsId.specs);
      setValue("description", dataCarsId.description);
    }
  }, [dataCarsId]);

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
            <SidebarSubMenu
              subMenu="Data Logs Cars"
              isActive="false"
              url="/dashboard/cars/logs"
            />
          </ul>
        </div>
        {/*CONTENT*/}
        <div className="col-10 bg--dashboard-white">
          <div className="container-fluid">
            <div className="row mt-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb fw-bold">
                  <li className="breadcrumb-item">Cars</li>
                  <li className="breadcrumb-item">List Car</li>
                  <li
                    className="breadcrumb-item fw-normal active"
                    aria-current="page"
                  >
                    Edit Car
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <h4>Edit Car</h4>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Link to="/dashboard/cars">
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
                        <label className="col-sm-2 col-form-label">
                          Type Driver
                        </label>
                        <div className="col-6">
                          <select
                            defaultValue={""}
                            className="form-select"
                            {...register("typeDriver")}
                          >
                            <option value="" hidden>
                              Select Type Driver
                            </option>
                            <option value="With Driver">With Driver</option>
                            <option value="Without Driver">
                              Without Driver
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Plate</label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="plate"
                            {...register("plate")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Manufacture
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="manufacture"
                            {...register("manufacture")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Type</label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="type"
                            {...register("type")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Model</label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="model"
                            {...register("model")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Year</label>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="0000"
                            {...register("year")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Rent Per Day
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="000000"
                            {...register("rentPerDay")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Capacity
                        </label>
                        <div className="col-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="00"
                            {...register("capacity")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Transmission
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="transmission"
                            {...register("transmission")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Available
                        </label>
                        <div className="col-6">
                          <select
                            defaultValue={"null"}
                            className="form-select"
                            {...register("available")}
                          >
                            <option value="" hidden>
                              Select Available
                            </option>
                            <option value="true">Available</option>
                            <option value="false">Not Available</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Available At
                        </label>
                        <div className="col-6">
                          <input
                            type="date"
                            className="form-control"
                            {...register("availableAt", {
                              valueAsDate: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Options
                        </label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="options"
                            {...register("options")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Specs</label>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="specs"
                            {...register("specs")}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">
                          Description
                        </label>
                        <div className="col-6">
                          <textarea
                            className="form-control"
                            placeholder="description"
                            rows={5}
                            {...register("description")}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Image</label>
                        <div className="col-6">
                          <input
                            type="file"
                            className="form-control"
                            {...register("image")}
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
