import { axiosSecure } from "../../plugins/axios";
const getListUsersService = async (params) => {
  const response = await axiosSecure.get("users", { params });
  return response;
};
const getOneUserService = async (id) => {
  const response = await axiosSecure.get(`users/${id}`);
  return response;
};
const saveUserService = async (data) => {
  const response = await axiosSecure.post("users", data);
  return response;
};
const updateUserService = async (id, data) => {
  const response = await axiosSecure.put(`users/${id}`, data);
  return response;
};
const deleteUserService = async (id) => {
  const response = await axiosSecure.delete(`users/${id}`);
  return response;
};
export {
  getListUsersService,
  getOneUserService,
  saveUserService,
  updateUserService,
  deleteUserService,
};
