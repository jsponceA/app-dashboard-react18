import { Link } from "react-router-dom";

const UserIndex = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Usuarios
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-group bx-sm"></i> MANTENIMIENTO DE USUARIOS
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 d-flex mb-3">
                  <div className="me-auto">
                    <button
                      className="btn btn-danger mx-1"
                      title="GENERAR REPORTE EN PDF"
                    >
                      <i className="bx bxs-file-pdf bx-sm"></i>
                    </button>
                    <button
                      className="btn btn-success mx-1"
                      title="GENERAR REPORTE EN EXCEL"
                    >
                      <i className="bx bxs-file-doc bx-sm"></i>
                    </button>
                  </div>
                  <button className="btn btn-primary d-flex align-items-center">
                    <i className="bx bx-plus bx-sm"></i> AGREGAR USUARIO
                  </button>
                </div>
                <div className="col-md-12 mb-2">
                  <div class="input-group">
                    <span class="input-group-text border-primary-subtle border-2">
                      <i className="bx bx-search"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control border-primary-subtle border-2"
                      placeholder="Buscar registro..."
                    />
                  </div>
                </div>
                <div className="col-md-1 mb-1">
                  <select class="form-select form-select-sm">
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-sm table-hover">
                      <caption>
                        Mostrando del registro 1 al 4 de un total de 4 filas
                      </caption>
                      <thead className="table-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIndex;
