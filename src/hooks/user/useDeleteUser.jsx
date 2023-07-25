import { useState, useEffect } from "react";
import { deleteUserService } from "../../services/user";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";

const useDeleteUser = (openModal, setOpenModal, id, getListUsers) => {
  const [loadUserDelete, setLoadUserDelete] = useState(false);

  const deleteUser = async (id) => {
    try {
      setLoadUserDelete(true);
      const response = await deleteUserService(id);
      toast.success("Usuario eliminado satisfactoriamente");
    } catch (error) {
      toast.error("Error al eliminar");
      console.log(error);
    } finally {
      setLoadUserDelete(false);
    }
  };

  const onClickDeleteUser = async () => {
    await deleteUser(id);
    setOpenModal(false);
    await getListUsers();
  };

  useEffect(() => {
    const modal = Modal.getOrCreateInstance("#modalDeleteUser");
    openModal ? modal.show() : modal.hide();
  }, [openModal]);

  useEffect(() => {
    const modal = document.getElementById("modalDeleteUser");
    modal.addEventListener("hidden.bs.modal", (e) => {
      setOpenModal(false);
    });
  }, []);

  return {
    loadUserDelete,
    onClickDeleteUser,
  };
};

export default useDeleteUser;
