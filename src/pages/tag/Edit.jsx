import { Link } from "react-router-dom";
import useEditTag from "../../hooks/tag/useEditTag";

const TagEdit = () => {
  const {
    updateTag,
    tag,
    handleChangeFormTag,
    loadSubmitFormTag,
    setErrorsTag,
    errorsTag,
  } = useEditTag();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/tags"}>Etiquetas</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Editar Etiqueta
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-tag bx-sm"></i> EDITAR ETIQUETA
              </p>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateTag();
                }}
              >
                <div className="row">
                  <div className="col-md-12 d-flex mb-3">
                    <Link
                      to={"/tags"}
                      className="btn btn-outline-danger d-flex justify-content-center"
                    >
                      <i className="bx bx-arrow-back bx-sm"></i> CANCELAR
                    </Link>
                    {!loadSubmitFormTag ? (
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

                  {errorsTag.length > 0 && (
                    <div className="col-md-12">
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setErrorsTag([]);
                          }}
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                        ></button>
                        <ul className="my-0">
                          {errorsTag.map((error) => (
                            <li key={error.msg}>{error.msg}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="col-md-6">
                    <label htmlFor="name">
                      Etiqueta <span className="text-danger">(*)</span>
                    </label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-tag bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormTag}
                        value={tag.name}
                        type="text"
                        className="form-control border-secondary"
                        name="name"
                        id="name"
                        placeholder="Mi etiqueta"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="bg_color">
                      Color <span className="text-danger">(*)</span>
                    </label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-color bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormTag}
                        value={tag.bg_color}
                        type="color"
                        className="form-control form-control-color border-secondary"
                        name="bg_color"
                        id="bg_color"
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
                        onChange={handleChangeFormTag}
                        value={tag.description}
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

export default TagEdit;
