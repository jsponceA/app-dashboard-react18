import useLogout from "../hooks/auth/useLogout";

const Header = () => {
  const { loadingLogout, errorsLogout, handleLogout } = useLogout();

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
          <div className="flex-shrink-0  ms-auto dropdown">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
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
    </header>
  );
};

export default Header;
