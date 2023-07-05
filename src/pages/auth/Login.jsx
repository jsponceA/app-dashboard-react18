import useLogin from "../../hooks/auth/useLogin";

const Login = () => {
  const {
    login,
    setLogin,
    loadingLogin,
    errorsLogin,
    cleanErrorsLogin,
    handleSubmitFormLogin,
    handleChangeFormLogin,
  } = useLogin();

  return (
    <div className="container-fluid vh-100 bg-light-subtle">
      <div className="row d-flex justify-content-center align-content-center h-100">
        <div className="col-md-4">
          <div className="card border-light-subtle shadow-lg">
            <div className="card-header border-light-subtle">
              <p className="fs-5 fw-bold mb-0 text-center">
                <i className="bx bx-user"></i> INICIO DE SESIÓN
              </p>
              <div className="text-center">
                <img
                  style={{ width: "150px" }}
                  src="./vite.svg"
                  alt="logo_img.svg"
                />
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmitFormLogin}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="usernameAddon">
                        <i className="bx bx-user-circle bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormLogin}
                        value={login.username}
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="usernameAddon"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="passwordAddon">
                        <i className="bx bx-show bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormLogin}
                        value={login.password}
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="*******"
                        aria-label="Password"
                        aria-describedby="passwordAddon"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="form-check">
                      <input
                        onChange={handleChangeFormLogin}
                        className="form-check-input"
                        type="checkbox"
                        checked={login.remenber}
                        name="remenber"
                        id="chckRemenber"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="chckRemenber"
                      >
                        Recuerdame
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <a className="text-decoration-none" href="#">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <div className="col-md-12">
                    <hr className="border-1" />
                  </div>
                  <div className="col-md-12 d-grid">
                    <button
                      className="btn bg-success bg-gradient text-white d-flex justify-content-center"
                      type="submit"
                    >
                      <i className="bx bx-log-in bx-sm"></i> INGRESAR
                    </button>
                  </div>
                  <div className="col-md-12 mt-1">
                    <a className="text-decoration-none link-secondary" href="#">
                      ¿Eres nuevo? Registrate
                    </a>
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

export default Login;
