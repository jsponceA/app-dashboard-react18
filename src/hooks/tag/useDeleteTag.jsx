import { useState, useEffect } from "react";
import { deleteTagService } from "../../services/tag";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";

const useDeleteTag = (openModal, setOpenModal, id, getListTags) => {
  const [loadTagDelete, setLoadTagDelete] = useState(false);

  const deleteTag = async (id) => {
    try {
      setLoadTagDelete(true);
      const response = await deleteTagService(id);
      toast.success("Etiqueta eliminada satisfactoriamente");
    } catch (error) {
      toast.error("Error al eliminar");
      console.log(error);
    } finally {
      setLoadTagDelete(false);
    }
  };

  const onClickDeleteTag = async () => {
    await deleteTag(id);
    setOpenModal(false);
    await getListTags();
  };

  useEffect(() => {
    const modal = Modal.getOrCreateInstance("#modalDeleteTag");
    openModal ? modal.show() : modal.hide();
  }, [openModal]);

  useEffect(() => {
    const modal = document.getElementById("modalDeleteTag");
    modal.addEventListener("hidden.bs.modal", (e) => {
      setOpenModal(false);
    });
  }, []);

  return {
    loadTagDelete,
    onClickDeleteTag,
  };
};

export default useDeleteTag;
