import { useState } from "react";
import { getListTasksService } from "../../services/task";
const useTaskIndex = () => {
  const [tasks, setTasks] = useState([]);
  const getListTasks = async () => {
    try {
      const response = await getListTasksService();
      setTasks(response.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  return { getListTasks, tasks };
};

export default useTaskIndex;
