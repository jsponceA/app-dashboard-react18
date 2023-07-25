import { useState, useEffect } from "react";
import { deleteTaskService } from "../../services/task";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";

const useDeleteTask = (openModal, setOpenModal, id, getListTasks) => {
  const [loadTaskDelete, setLoadTaskDelete] = useState(false);

  const deleteTask = async (id) => {
    try {
      setLoadTaskDelete(true);
      const response = await deleteTaskService(id);
      toast.success("Tarea eliminada satisfactoriamente");
    } catch (error) {
      toast.error("Error al eliminar");
      console.log(error);
    } finally {
      setLoadTaskDelete(false);
    }
  };

  const onClickDeleteTask = async () => {
    await deleteTask(id);
    setOpenModal(false);
    await getListTasks();
  };

  useEffect(() => {
    const modal = Modal.getOrCreateInstance("#modalDeleteTask");
    openModal ? modal.show() : modal.hide();
  }, [openModal]);

  useEffect(() => {
    const modal = document.getElementById("modalDeleteTask");
    modal.addEventListener("hidden.bs.modal", (e) => {
      setOpenModal(false);
    });
  }, []);

  return {
    loadTaskDelete,
    onClickDeleteTask,
  };
};

export default useDeleteTask;
