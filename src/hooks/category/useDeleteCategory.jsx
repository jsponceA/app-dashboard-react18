import { useState, useEffect } from "react";
import { deleteCategoryService } from "../../services/category";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";

const useDeleteCategory = (openModal, setOpenModal, id, getListCategories) => {
  const [loadCategoryDelete, setLoadCategoryDelete] = useState(false);

  const deleteCategory = async (id) => {
    try {
      setLoadCategoryDelete(true);
      const response = await deleteCategoryService(id);
      toast.success("Categoria eliminada satisfactoriamente");
    } catch (error) {
      toast.error("Error al eliminar");
      console.log(error);
    } finally {
      setLoadCategoryDelete(false);
    }
  };

  const onClickDeleteCategory = async () => {
    await deleteCategory(id);
    setOpenModal(false);
    await getListCategories();
  };

  useEffect(() => {
    const modal = Modal.getOrCreateInstance("#modalDeleteCategory");
    openModal ? modal.show() : modal.hide();
  }, [openModal]);

  useEffect(() => {
    const modal = document.getElementById("modalDeleteCategory");
    modal.addEventListener("hidden.bs.modal", (e) => {
      setOpenModal(false);
    });
  }, []);

  return {
    loadCategoryDelete,
    onClickDeleteCategory,
  };
};

export default useDeleteCategory;
