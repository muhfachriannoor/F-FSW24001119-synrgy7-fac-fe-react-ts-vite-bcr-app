import { ReactElement } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useFetchCurrentUser } from "@/features/auth/useFetchCurrentUser";
import Dropdown from "react-bootstrap/Dropdown";
import Avatar from "@/assets/images/testimonial-1.svg";
import Swal from "sweetalert2";

export default function LayoutDashboard(): ReactElement {
  const navigate: NavigateFunction = useNavigate();
  const { dataUsers } = useFetchCurrentUser();

  const onLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_name");
    localStorage.removeItem("auth_role");
    Swal.fire({
      title: "Logout",
      icon: "success",
      showCloseButton: true,
      //background: "#000",
    });
    navigate("/login");
  }
  
  return (
    <>
      <div className="row">
        <nav className="navbar navbar-expand-lg bg--white navbar-dashboard top-0 start-0 end-0 py-3">
          <div className="container-fluid">
            <div className="logo-dashboard-rectangle bg--dark-blue-01"></div>
            <div className="link-right">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                <li className="nav-item">
                  <div className="mt-1">
                    <form
                      className="d-flex flex-row align-items-center"
                      role="search"
                    >
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn bg-outline--dark-blue-04"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src={Avatar}
                      className="img-rounded img-thumbnail user-img"
                      alt=""
                    />
                    <Dropdown>
                      <Dropdown.Toggle
                        className="border-0"
                        variant="transparent"
                      >
                        {dataUsers?.email}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => onLogout()}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
