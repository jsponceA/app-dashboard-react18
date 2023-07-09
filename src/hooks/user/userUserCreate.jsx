import { useState } from "react";
import { saveTaskService } from "../../services/user";
const useUserCreate = () => {
  const [user, setUser] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const getListUsers = async () => {
    try {
      const response = await saveTaskService(user);
    } catch (error) {
      console.log(error);
    }
  };

  return { getListUsers, user };
};

export default useUserCreate;
