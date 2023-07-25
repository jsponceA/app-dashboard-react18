import useDeleteTask from "../../hooks/task/useDeleteTask";

const TaskDelete = ({ openModal, setOpenModal, id, getListTasks }) => {
  const { loadTaskDelete, onClickDeleteTask } = useDeleteTask(
    openModal,
    setOpenModal,
    id,
    getListTasks
  );

  return (
    <div
      className="modal fade"
      id="modalDeleteTask"
      tabIndex="-1"
      aria-labelledby="modalDeleteTaskLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalDeleteTaskLabel">
              Confirmación de eliminación
            </h1>
            <button
              onClick={() => setOpenModal(false)}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <p>
                  ¿Esta seguro que desea{" "}
                  <span className="text-danger fw-bold">eliminar</span> este
                  tarea?
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => setOpenModal(false)}
            >
              <i className="bx bx-x"></i> Cancelar
            </button>
            {!loadTaskDelete ? (
              <button
                onClick={onClickDeleteTask}
                type="button"
                className="btn bg-success bg-gradient text-white"
              >
                <i className="bx bx-check"></i> Confirmar
              </button>
            ) : (
              <button
                className="btn bg-success bg-gradient text-white"
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
        </div>
      </div>
    </div>
  );
};

export default TaskDelete;
