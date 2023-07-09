import { useState } from "react";
import { updateTaskService, getOneTaskService } from "../../services/task";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const useTaskEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [errorsTask, setErrorsTask] = useState([]);
  const [loadSubmitFormTask, setLoadSubmitFormTask] = useState(false);
  const [loadDataTask, setLoadDataTask] = useState(true);

  const getOneTask = async () => {
    try {
      setLoadDataTask(true);
      const {
        data: { task: responseTask },
      } = await getOneTaskService(id);

      delete responseTask.created_at;
      delete responseTask.updated_at;
      setTask(responseTask);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadDataTask(false);
    }
  };

  const updateTask = async () => {
    try {
      setLoadSubmitFormTask(true);
      setErrorsTask([]);
      const {
        data: { message },
      } = await updateTaskService(id, task);
      toast.success(message);
      navigate("/tasks");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsTask(data.errors);
        toast.error("Errores de validación");
      } else {
        console.log(error);
      }
    } finally {
      setLoadSubmitFormTask(false);
    }
  };

  const handleChangeFormTask = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      setTask((prev) => ({ ...prev, [name]: checked }));
    } else {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    getOneTask,
    updateTask,
    task,
    handleChangeFormTask,
    loadSubmitFormTask,
    setErrorsTask,
    errorsTask,
    loadDataTask,
  };
};

export default useTaskEdit;
