import { useState, useEffect } from "react";
import { getListTasksService } from "../../services/task";
const useTaskIndex = () => {
  const [tasks, setTasks] = useState([]);
  const [filtersTask, setFiltersTask] = useState({
    search: "",
    perPage: 10,
    page: 1,
  });
  const [infoPaginationTasks, setInfoPaginationTasks] = useState({
    totalPages: 0,
  });
  const [isLoadingTasks, setIsLoadingTasks] = useState(false);
  const [modalDeleteTask, setModalDeleteTask] = useState(false);
  const [idTaskProp, setIdTaskProp] = useState(null);

  const getListTasks = async () => {
    try {
      setIsLoadingTasks(true);
      const response = await getListTasksService(filtersTask);
      setTasks(response.data.tasks.data);
      setInfoPaginationTasks(response.data.tasks);
    } catch (error) {
      toast.error("Error al obtener el listado de recursos");
      console.log(error);
    } finally {
      setIsLoadingTasks(false);
    }
  };

  const handleChangeFiltersTask = async (e) => {
    const { type, name, value } = e.target;
    setFiltersTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalDelete = (id) => {
    setModalDeleteTask(true);
    setIdTaskProp(id);
  };

  const handleKeyInputFilter = async (e) => {
    if (e.key === "Enter") {
      await getListTasks();
    }
  };

  const handlePageClick = async (value) => {
    const page = value.selected + 1;
    setFiltersTask({ ...filtersTask, page });
  };

  useEffect(() => {
    getListTasks();
  }, [filtersTask.page, filtersTask.perPage]);

  return {
    getListTasks,
    tasks,
    handleChangeFiltersTask,
    infoPaginationTasks,
    isLoadingTasks,
    modalDeleteTask,
    setModalDeleteTask,
    idTaskProp,
    handleKeyInputFilter,
    handlePageClick,
    openModalDelete,
  };
};

export default useTaskIndex;
