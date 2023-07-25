import { useState, useEffect } from "react";
import { getListCategoriesService } from "../../services/category";
const useCategoryIndex = () => {
  const [categories, setCategories] = useState([]);
  const [filtersCategory, setFiltersCategory] = useState({
    search: "",
    perPage: 10,
    page: 1,
  });
  const [infoPaginationCategories, setInfoPaginationCategories] = useState({
    totalPages: 0,
  });
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
  const [idCategoryProp, setIdCategoryProp] = useState(null);

  const getListCategories = async () => {
    try {
      setIsLoadingCategories(true);
      const response = await getListCategoriesService(filtersCategory);
      setCategories(response.data.categories.data);
      setInfoPaginationCategories(response.data.categories);
    } catch (error) {
      toast.error("Error al obtener el listado de recursos");
      console.log(error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  const handleChangeFiltersCategory = async (e) => {
    const { type, name, value } = e.target;
    setFiltersCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalDelete = (id) => {
    setModalDeleteCategory(true);
    setIdCategoryProp(id);
  };

  const handleKeyInputFilter = async (e) => {
    if (e.key === "Enter") {
      await getListCategories();
    }
  };

  const handlePageClick = async (value) => {
    const page = value.selected + 1;
    setFiltersCategory({ ...filtersCategory, page });
  };

  useEffect(() => {
    getListCategories();
  }, [filtersCategory.page, filtersCategory.perPage]);

  return {
    getListCategories,
    categories,
    handleChangeFiltersCategory,
    infoPaginationCategories,
    isLoadingCategories,
    modalDeleteCategory,
    setModalDeleteCategory,
    idCategoryProp,
    handleKeyInputFilter,
    handlePageClick,
    openModalDelete,
  };
};

export default useCategoryIndex;
