import { axiosSecure } from "../../plugins/axios";
const getListTagsService = async (params) => {
  const response = await axiosSecure.get("tags", { params });
  return response;
};
const getOneTagService = async (id) => {
  const response = await axiosSecure.get(`tags/${id}`);
  return response;
};
const saveTagService = async (data) => {
  const response = await axiosSecure.post("tags", data);
  return response;
};
const updateTagService = async (id, data) => {
  const response = await axiosSecure.put(`tags/${id}`, data);
  return response;
};
const deleteTagService = async (id) => {
  const response = await axiosSecure.delete(`tags/${id}`);
  return response;
};
export {
  getListTagsService,
  getOneTagService,
  saveTagService,
  updateTagService,
  deleteTagService,
};
