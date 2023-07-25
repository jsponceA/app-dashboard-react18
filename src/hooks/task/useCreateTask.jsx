import { useState } from "react";
import { saveTaskService } from "../../services/task";
import { getListCategoriesService } from "../../services/category";
import { getListUsersService } from "../../services/user";
import { getListTagsService } from "../../services/tag";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useTaskCreate = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    user_id: "",
    category_id: "",
    title: "",
    description: "",
    completed: false,
    tags: [],
  });
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [errorsTask, setErrorsTask] = useState([]);
  const [loadSubmitFormTask, setLoadSubmitFormTask] = useState(false);
  const [loadInitialData, setLoadInitialData] = useState(false);

  const fetchInitialData = async () => {
    try {
      setLoadInitialData(true);
      const resCategories = await getListCategoriesService();
      const resUsers = await getListUsersService();
      const resTags = await getListTagsService();
      setCategories(resCategories.data.categories.data);
      setUsers(resUsers.data.users.data);
      setTags(resTags.data.tags.data);
    } catch (error) {
      toast.error("Error al obtener el recurso");
      console.log(error);
    } finally {
      setLoadInitialData(false);
    }
  };

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
        toast.error("Error al crear el recurso");
        console.log(error);
      }
    } finally {
      setLoadSubmitFormTask(false);
    }
  };

  const handleChangeFormTask = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      setTask((prev) => ({ ...prev, [name]: checked }));
    } else {
      setTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
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
  };
};

export default useTaskCreate;
