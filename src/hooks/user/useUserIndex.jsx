import { useState } from "react";
import { getListUsersService } from "../../services/user";
const useUserIndex = () => {
  const [users, setUsers] = useState([]);
  const getListUsers = async () => {
    try {
      const response = await getListUsersService();
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return { getListUsers, users };
};

export default useUserIndex;
