import { ReactElement, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useLoginUser } from "@/features/auth/useLoginUser";
import { ILogin } from "@/interfaces/IAuth";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/login.css"

export default function Login(): ReactElement {
  const { register, handleSubmit } = useForm<ILogin>();
  const [isError, setIsError] = useState<boolean>(false); 
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorData, setErrorData] = useState<string[]>([]);
  const navigate = useNavigate();
  
  const { mutate, isPending } = useLoginUser({
    onSuccess: (data: any) => {
      localStorage.setItem("auth_token", data.data.data.users.token);
      localStorage.setItem("auth_name", data.data.data.users.name);
      localStorage.setItem("auth_role", data.data.data.users.role);

      navigate("/dashboard");
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

  const onSubmit: SubmitHandler<ILogin> = (data): void => {
    const dataLogin = {
      ...data
    }

    mutate(dataLogin);
  }

  return (
    <>
      <section id="login">
        <div className="container-fluid">
          <div className="row vh-100">
            <div className="col-xxl-8 col-md-7 car-bg"></div>
            <div className="col-xxl-4 col-md-5 d-flex align-items-center justify-content-center">
              <div className="card card-login w-100 ps-3">
                <div className="card-header mb-4">
                  <div className="logo-login bg--dark-blue-01"></div>
                  <h3 className="fw-bold">
                    Welcome to a world of possibilities! Please sign in
                  </h3>
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
                    {
                      isPending ?
                      <button type="submit" className="btn bg--dark-blue-04 w-100 mt-3" disabled>
                        <div className="spinner-border text-white" role="status"></div>
                      </button>
                      :
                      <button type="submit" className="btn bg--dark-blue-04 w-100 mt-3">
                        Sign In
                      </button>
                    }
                    <p className="mt-2 text-center">Don't have account ? <Link to="/register">Sign Up For Free</Link></p>
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