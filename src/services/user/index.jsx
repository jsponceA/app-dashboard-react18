import { axiosSecure } from "../../plugins/axios";
const getListUsersService = async (params) => {
  const response = await axiosSecure.get("tasks", { params });
  return response;
};
export { getListUsersService };
