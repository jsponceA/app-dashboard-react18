import { axiosSecure } from "../../plugins/axios";
const getListTasksService = async (params) => {
  const response = await axiosSecure.get("tasks", { params });
  return response;
};
const getOneTaskService = async (id) => {
  const response = await axiosSecure.get(`tasks/${id}`);
  return response;
};
const saveTaskService = async (data) => {
  const response = await axiosSecure.post("tasks", data);
  return response;
};
const updateTaskService = async (id, data) => {
  const response = await axiosSecure.put(`tasks/${id}`, data);
  return response;
};
const deleteTaskService = async (id) => {
  const response = await axiosSecure.delete(`tasks/${id}`);
  return response;
};
export {
  getListTasksService,
  getOneTaskService,
  saveTaskService,
  updateTaskService,
  deleteTaskService,
};
