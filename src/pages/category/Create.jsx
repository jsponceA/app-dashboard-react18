import { Link } from "react-router-dom";
import useCreateCategory from "../../hooks/category/useCreateCategory";

const CategoryCreate = () => {
  const {
    saveCategory,
    category,
    handleChangeFormCategory,
    loadSubmitFormCategory,
    setErrorsCategory,
    errorsCategory,
  } = useCreateCategory();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/categories"}>Categorias</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Crear Categoria
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-category bx-sm"></i> REGISTRAR NUEVA
                CATEGORIA
              </p>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveCategory();
                }}
              >
                <div className="row">
                  <div className="col-md-12 d-flex mb-3">
                    <Link
                      to={"/categories"}
                      className="btn btn-outline-danger d-flex justify-content-center"
                    >
                      <i className="bx bx-arrow-back bx-sm"></i> CANCELAR
                    </Link>
                    {!loadSubmitFormCategory ? (
                      <button
                        type="submit"
                        className="btn bg-success bg-gradient text-white ms-auto d-flex justify-content-center"
                      >
                        <i className="bx bx-save bx-sm"></i> GUARDAR
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

                  {errorsCategory.length > 0 && (
                    <div className="col-md-12">
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setErrorsCategory([]);
                          }}
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                        ></button>
                        <ul className="my-0">
                          {errorsCategory.map((error) => (
                            <li key={error.msg}>{error.msg}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="col-md-12">
                    <label htmlFor="name">
                      Categoria <span className="text-danger">(*)</span>
                    </label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-category bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormCategory}
                        value={category.name}
                        type="text"
                        className="form-control border-secondary"
                        name="name"
                        id="name"
                        placeholder="Nombre"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="description">Descripción</label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-text bx-sm"></i>
                      </span>
                      <textarea
                        rows={2}
                        onChange={handleChangeFormCategory}
                        value={category.description}
                        className="form-control border-secondary"
                        name="description"
                        id="description"
                        placeholder="....."
                      ></textarea>
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

export default CategoryCreate;
