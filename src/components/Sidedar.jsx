const Sidedar = () => {
  return (
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      tabIndex="-1"
      id="sideBarOffCanvas"
      aria-labelledby="sideBarOffCanvasLabel"
      style={{ width: "280px" }}
    >
      <div className="offcanvas-header py-1">
        <h5 className="offcanvas-title" id="sideBarOffCanvasLabel">
          {import.meta.env.VITE_APP_NAME}
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          data-bs-target="#sideBarOffCanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body py-0">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
          <img
            style={{ width: "80px" }}
            className="rounded-circle mx-auto"
            src="https://github.com/mdo.png"
            alt="mdo"
          />
          <p className="my-0 mx-auto">
            <i className="bx bxs-circle text-success"></i> Online
          </p>
          <p className="my-0 mx-auto">Jonny Ponce</p>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                <i className="bx bx-home "></i>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bx bx-group"></i>
                Users
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bx bxs-dashboard "></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bx bx-package "></i>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <i className="bx bxs-backpack"></i>
                Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidedar;
