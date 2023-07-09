import { Link } from "react-router-dom";
import useUserIndex from "../../hooks/user/useUserIndex";
import { useEffect } from "react";

const UserIndex = () => {
  const { getListUsers, users } = useUserIndex();

  const fetchIniatlData = async () => {
    await getListUsers();
  };

  useEffect(() => {
    fetchIniatlData();
  }, []);

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
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="GENERAR REPORTE EN PDF"
                      className="btn btn-danger mx-1"
                    >
                      <i className="bx bxs-file-pdf bx-sm"></i>
                    </button>
                    <button
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="GENERAR REPORTE EN EXCEL"
                      className="btn btn-success mx-1"
                    >
                      <i className="bx bxs-file-doc bx-sm"></i>
                    </button>
                  </div>
                  <button className="btn btn-primary d-flex align-items-center">
                    <i className="bx bx-plus bx-sm"></i> AGREGAR USUARIO
                  </button>
                </div>
                <div className="col-md-12 mb-2">
                  <div className="input-group">
                    <span className="input-group-text border-primary-subtle border-2">
                      <i className="bx bx-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-primary-subtle border-2"
                      placeholder="Buscar registro..."
                    />
                  </div>
                </div>
                <div className="col-md-1 mb-1">
                  <select className="form-select form-select-sm">
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
                          <th>#ID</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Completed</th>
                          <th>Created at</th>
                          <th>Updated at</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users &&
                          users.map((user) => (
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.id}</td>
                              <td>{user.id}</td>
                              <td>{user.id}</td>
                              <td>{user.id}</td>
                              <td>{user.id}</td>
                            </tr>
                          ))}
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
