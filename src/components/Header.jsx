import useLogout from "../hooks/auth/useLogout";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../store/slices/systemSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { loadingLogout, errorsLogout, handleLogout } = useLogout();
  const darkMode = useSelector((state) => state.system.darkMode);
  const changeDarkMode = () => {
    const newValueDarkMode = !darkMode;
    dispatch(setDarkMode(newValueDarkMode));
  };

  return (
    <header className="py-2 mb-3 border-bottom bg-secondary bg-opacity-25">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-secondary me-3"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Abrir Menu"
            data-bs-toggle="offcanvas"
            data-bs-target="#sideBarOffCanvas"
            aria-controls="sideBarOffCanvas"
          >
            <i className="bx bx-menu" style={{ fontSize: "25px" }}></i>
          </button>
          <div className="content-logo text-center">
            <img style={{ width: "40px" }} src="/vite.svg" alt="vite.svg" />
            <span className="fw-bold">{import.meta.env.VITE_APP_NAME}</span>
          </div>
          <div className="ms-auto d-flex">
            {darkMode ? (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  changeDarkMode();
                }}
                href="#"
                className="link-warning fw-bold me-3"
              >
                <i className="bx bxs-sun bx-md"></i>
              </a>
            ) : (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  changeDarkMode();
                }}
                href="#"
                className="link-dark fw-bold me-3"
              >
                <i className="bx bxs-moon bx-md"></i>
              </a>
            )}

            <div className="flex-shrink-0  dropdown ">
              <a
                href="#"
                className="link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
                Jonny Ponce
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog"></i> Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user"></i> Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    <i className="bx bx-log-out"></i> Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
