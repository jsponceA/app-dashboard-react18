import { useState } from "react";
import { deleteTaskService } from "../../services/task";
import { toast } from "react-toastify";

const useTaskDelete = () => {
  const [loadTaskDelete, setLoadTaskDelete] = useState(false);

  const deleteTask = async (id) => {
    try {
      setLoadTaskDelete(true);
      const response = await deleteTaskService(id);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadTaskDelete(false);
    }
  };

  return {
    loadTaskDelete,
    deleteTask,
  };
};

export default useTaskDelete;
