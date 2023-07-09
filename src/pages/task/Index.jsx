import { Link } from "react-router-dom";
import useTaskIndex from "../../hooks/task/useTaskIndex";
import { useEffect, useState } from "react";
import TaskDelete from "./Delete";

const TaskIndex = () => {
  const { getListTasks, tasks } = useTaskIndex();
  const [modalDeleteTask, setModalDeleteTask] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const fetchIniatlData = async () => {
    await getListTasks();
  };

  useEffect(() => {
    fetchIniatlData();
  }, []);

  return (
    <div className="container-fluid">
      <TaskDelete
        openModal={modalDeleteTask}
        setOpenModal={setModalDeleteTask}
        getListTasks={getListTasks}
        id={idDelete}
      />
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tareas
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-task bx-sm"></i> MANTENIMIENTO DE TAREAS
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
                  <Link
                    to={"/tasks/create"}
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="bx bx-plus bx-sm"></i> AGREGAR TAREA
                  </Link>
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
                          <th>#</th>
                          <th>Titulo</th>
                          <th>Descripción</th>
                          <th>Estado</th>
                          <th>Fecha de creación</th>
                          <th>Fecha de actualización</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.map((task) => (
                          <tr key={task.id}>
                            <td>
                              <div className="dropdown open">
                                <button
                                  className="btn btn-secondary bg-gradient btn-sm dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-config='{"popperConfig":{"strategy":"fixed"}}'
                                >
                                  <i className="bx bx-list-ul"></i> Acciones
                                </button>
                                <div className="dropdown-menu">
                                  <Link
                                    to={`/tasks/edit/${task.id}`}
                                    className="dropdown-item"
                                  >
                                    <i className="bx bx-edit"></i> Editar
                                  </Link>
                                  <button
                                    onClick={() => {
                                      setModalDeleteTask(true);
                                      setIdDelete(task.id);
                                    }}
                                    type="button"
                                    className="dropdown-item"
                                  >
                                    <i className="bx bx-trash"></i> Eliminar
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                              <span
                                className={`badge text-bg-${
                                  task.completed ? "success" : "danger"
                                }`}
                              >
                                {task.completed
                                  ? "Completado"
                                  : "No Completado"}
                              </span>
                            </td>
                            <td>{task.created_at}</td>
                            <td>{task.updated_at}</td>
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

export default TaskIndex;
