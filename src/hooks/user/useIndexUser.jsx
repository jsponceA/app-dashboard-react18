import { useState, useEffect } from "react";
import { getListUsersService } from "../../services/user";
const useUserIndex = () => {
  const [users, setUsers] = useState([]);
  const [filtersUser, setFiltersUser] = useState({
    search: "",
    perPage: 10,
    page: 1,
  });
  const [infoPaginationUsers, setInfoPaginationUsers] = useState({
    totalPages: 0,
  });
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [modalDeleteUser, setModalDeleteUser] = useState(false);
  const [idUserProp, setIdUserProp] = useState(null);

  const getListUsers = async () => {
    try {
      setIsLoadingUsers(true);
      const response = await getListUsersService(filtersUser);
      setUsers(response.data.users.data);
      setInfoPaginationUsers(response.data.users);
    } catch (error) {
      toast.error("Error al obtener el listado de recursos");
      console.log(error);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const handleChangeFiltersUser = async (e) => {
    const { type, name, value } = e.target;
    setFiltersUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalDelete = (id) => {
    setModalDeleteUser(true);
    setIdUserProp(id);
  };

  const handleKeyInputFilter = async (e) => {
    if (e.key === "Enter") {
      await getListUsers();
    }
  };

  const handlePageClick = async (value) => {
    const page = value.selected + 1;
    setFiltersUser({ ...filtersUser, page });
  };

  useEffect(() => {
    getListUsers();
  }, [filtersUser.page, filtersUser.perPage]);

  return {
    getListUsers,
    users,
    handleChangeFiltersUser,
    infoPaginationUsers,
    isLoadingUsers,
    modalDeleteUser,
    setModalDeleteUser,
    idUserProp,
    handleKeyInputFilter,
    handlePageClick,
    openModalDelete,
  };
};

export default useUserIndex;
