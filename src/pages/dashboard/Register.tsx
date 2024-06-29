import { ReactElement, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterUser } from "@/features/auth/useRegisterUser";
import { IRegister } from "@/interfaces/IAuth";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/login.css"

export default function Register(): ReactElement {
  const { register, handleSubmit } = useForm<IRegister>();
  const [isError, setIsError] = useState<boolean>(false); 
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorData, setErrorData] = useState<string[]>([]);
  const navigate = useNavigate();
  
  const { mutate, isPending } = useRegisterUser({
    onSuccess: () => {
      Swal.fire({
        title: "Registration is successful, you can sign in",
        icon: "success",
        showCloseButton: true,
        //background: "#000",
      }).then(() => {
        navigate("/login");
      });
    },
    onError: (error: any) => {
      setIsError(true);
      if (error.message.response.data.message == "Validation Error") {
        setErrorMessage(error.message.response.data.message);
        setErrorData(error.message.response.data.data.validations);
      } else {
        setErrorMessage(error.message.response.data.message);
        setErrorData([]);
      }
    },
  });

  const onSubmit: SubmitHandler<IRegister> = (data): void => {
    const dataInput = {
      ...data
    }

    mutate(dataInput);
  }

  return (
    <>
      <section id="register">
        <div className="container-fluid">
          <div className="row vh-100">
            <div className="col-xxl-8 col-md-7 car-bg"></div>
            <div className="col-xxl-4 col-md-5 d-flex align-items-center justify-content-center">
              <div className="card card-login w-100 ps-3">
                <div className="card-header mb-4">
                  <div className="logo-login bg--dark-blue-01"></div>
                  <h3 className="fw-bold">Sign Up</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {isError ? (
                      <div className="mb-4">
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
                    ) : (
                      ""
                    )}
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        className="form-control"
                        placeholder="Your Name"
                        type="text"
                        {...register("name")}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        placeholder="youremail@mail.com"
                        type="text"
                        {...register("email")}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        className="form-control"
                        placeholder="******"
                        type="password"
                        {...register("password")}
                      />
                    </div>
                    {isPending ? (
                      <button
                        type="submit"
                        className="btn bg--dark-blue-04 w-100 mt-3"
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
                        className="btn bg--dark-blue-04 w-100 mt-3"
                      >
                        Sign Up
                      </button>
                    )}
                    <p className="mt-2 text-center">
                      Already have an account ?{" "}
                      <Link to="/login">Sign In Here</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}