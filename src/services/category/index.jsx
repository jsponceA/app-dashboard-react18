import { axiosSecure } from "../../plugins/axios";
const getListCategoriesService = async (params) => {
  const response = await axiosSecure.get("categories", { params });
  return response;
};
const getOneCategoryService = async (id) => {
  const response = await axiosSecure.get(`categories/${id}`);
  return response;
};
const saveCategoryService = async (data) => {
  const response = await axiosSecure.post("categories", data);
  return response;
};
const updateCategoryService = async (id, data) => {
  const response = await axiosSecure.put(`categories/${id}`, data);
  return response;
};
const deleteCategoryService = async (id) => {
  const response = await axiosSecure.delete(`categories/${id}`);
  return response;
};
export {
  getListCategoriesService,
  getOneCategoryService,
  saveCategoryService,
  updateCategoryService,
  deleteCategoryService,
};
