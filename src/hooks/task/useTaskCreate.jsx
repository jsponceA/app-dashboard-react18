import { useState } from "react";
import { saveTaskService } from "../../services/task";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useTaskCreate = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [errorsTask, setErrorsTask] = useState([]);
  const [loadSubmitFormTask, setLoadSubmitFormTask] = useState(false);

  const saveTask = async () => {
    try {
      setLoadSubmitFormTask(true);
      setErrorsTask([]);
      const {
        data: { message },
      } = await saveTaskService(task);
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
    saveTask,
    task,
    handleChangeFormTask,
    loadSubmitFormTask,
    setErrorsTask,
    errorsTask,
  };
};

export default useTaskCreate;
