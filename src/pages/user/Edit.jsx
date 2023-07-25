import { Link } from "react-router-dom";
import useEditUser from "../../hooks/user/useEditUser";

const UserEdit = () => {
  const {
    updateUser,
    user,
    handleChangeFormUser,
    loadSubmitFormUser,
    setErrorsUser,
    errorsUser,
  } = useEditUser();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/users"}>Usuarios</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Editar Usuario
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-user bx-sm"></i> EDITAR USUARIO
              </p>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateUser();
                }}
              >
                <div className="row">
                  <div className="col-md-12 d-flex mb-3">
                    <Link
                      to={"/users"}
                      className="btn btn-outline-danger d-flex justify-content-center"
                    >
                      <i className="bx bx-arrow-back bx-sm"></i> CANCELAR
                    </Link>
                    {!loadSubmitFormUser ? (
                      <button
                        type="submit"
                        className="btn bg-success bg-gradient text-white ms-auto d-flex justify-content-center"
                      >
                        <i className="bx bx-save bx-sm"></i> MODIFICAR
                      </button>
                    ) : (
                      <button
                        className="btn bg-success bg-gradient text-white ms-auto"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Procesando...
                      </button>
                    )}
                  </div>

                  {errorsUser.length > 0 && (
                    <div className="col-md-12">
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setErrorsUser([]);
                          }}
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                        ></button>
                        <ul className="my-0">
                          {errorsUser.map((error) => (
                            <li key={error.msg}>{error.msg}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="col-md-6">
                    <label htmlFor="username">
                      Usuario <span className="text-danger">(*)</span>
                    </label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-user bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormUser}
                        value={user.username}
                        type="text"
                        className="form-control border-secondary"
                        name="username"
                        id="username"
                        placeholder="Mi usuario"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="password">Contraseña</label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-lock bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormUser}
                        value={user.password}
                        type="password"
                        className="form-control border-secondary"
                        name="password"
                        id="password"
                        placeholder="Mi usuario"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email">
                      Correo <span className="text-danger">(*)</span>
                    </label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-envelope bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormUser}
                        value={user.email}
                        type="email"
                        className="form-control border-secondary"
                        name="email"
                        id="email"
                        placeholder="Ejemplo@tucorreo.com"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
