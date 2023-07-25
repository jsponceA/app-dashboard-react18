import { Link } from "react-router-dom";
import useCreateTask from "../../hooks/task/useCreateTask";
import Select from "react-select";

const TaskCreate = () => {
  const {
    saveTask,
    task,
    handleChangeFormTask,
    loadSubmitFormTask,
    setErrorsTask,
    errorsTask,
    categories,
    users,
    tags,
    loadInitialData,
    setTask,
  } = useCreateTask();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/tasks"}>Tareas</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Crear Tarea
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-task bx-sm"></i> REGISTRAR NUEVA TAREA
              </p>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveTask();
                }}
              >
                <div className="row">
                  <div className="col-md-12 d-flex mb-3">
                    <Link
                      to={"/tasks"}
                      className="btn btn-outline-danger d-flex justify-content-center"
                    >
                      <i className="bx bx-arrow-back bx-sm"></i> CANCELAR
                    </Link>
                    {!loadSubmitFormTask ? (
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

                  {errorsTask.length > 0 && (
                    <div className="col-md-12">
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setErrorsTask([]);
                          }}
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                        ></button>
                        <ul className="my-0">
                          {errorsTask.map((error) => (
                            <li key={error.msg}>{error.msg}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="user_id">
                      Usuario: <span className="text-danger">(*)</span>
                    </label>

                    <Select
                      onChange={(value) =>
                        setTask({ ...task, user_id: value.id })
                      }
                      options={users}
                      getOptionLabel={(option) => `${option.username}`}
                      getOptionValue={(option) => `${option.id}`}
                      placeholder="[--Seleccione Usuario--]"
                      name="user_id"
                      id="user_id"
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? "border-secondary"
                            : "border-secondary",
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="category_id">
                      Categoria: <span className="text-danger">(*)</span>
                    </label>

                    <Select
                      onChange={(value) =>
                        setTask({ ...task, category_id: value.id })
                      }
                      options={categories}
                      getOptionLabel={(option) => `${option.name}`}
                      getOptionValue={(option) => `${option.id}`}
                      name="category_id"
                      id="category_id"
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? "border-secondary"
                            : "border-secondary",
                      }}
                      placeholder="[--Seleccione Categoria--]"
                    />
                  </div>
                  <div className="col-md-8">
                    <label htmlFor="title">
                      Titulo: <span className="text-danger">(*)</span>
                    </label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-text bx-sm"></i>
                      </span>
                      <input
                        onChange={handleChangeFormTask}
                        value={task.title}
                        type="text"
                        className="form-control border-secondary"
                        name="title"
                        id="title"
                        placeholder="Mi titulo de prueba"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="completed">
                      Estado: <span className="text-danger">(*)</span>
                    </label>
                    <div className="form-check form-switch">
                      <input
                        onChange={handleChangeFormTask}
                        className="form-check-input border-secondary "
                        type="checkbox"
                        role="switch"
                        id="completed"
                        name="completed"
                        checked={task.completed}
                        style={{ width: "3em", height: "1.5em" }}
                      />
                      <label
                        className={`form-check-label fw-bold mt-1 ${
                          task.completed
                            ? "text-success"
                            : "text-danger-emphasis"
                        }`}
                        htmlFor="completed"
                      >
                        {task.completed ? "COMPLETADO" : "NO COMPLETADO"}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="tags">Asociar etiquetas:</label>

                    <Select
                      onChange={(value) =>
                        setTask({ ...task, tags: value.map((item) => item.id) })
                      }
                      options={tags}
                      getOptionLabel={(option) => `${option.name}`}
                      getOptionValue={(option) => `${option.id}`}
                      isMulti
                      name="tags"
                      id="tags"
                      classNames={{
                        control: (state) =>
                          state.isFocused
                            ? "border-secondary"
                            : "border-secondary",
                      }}
                      placeholder="[--Seleccione Etiquetas--]"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="description">Descripción:</label>
                    <div className="input-group input-group-sm  mb-3">
                      <span className="input-group-text border-secondary">
                        <i className="bx bx-text bx-sm"></i>
                      </span>
                      <textarea
                        onChange={handleChangeFormTask}
                        className="form-control border-secondary"
                        name="description"
                        id="description"
                        placeholder="..."
                        rows="2"
                        value={task.description}
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

export default TaskCreate;
