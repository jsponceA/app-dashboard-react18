import { useState, useEffect } from "react";
import { getListTagsService } from "../../services/tag";
const useTagIndex = () => {
  const [tags, setTags] = useState([]);
  const [filtersTag, setFiltersTag] = useState({
    search: "",
    perPage: 10,
    page: 1,
  });
  const [infoPaginationTags, setInfoPaginationTags] = useState({
    totalPages: 0,
  });
  const [isLoadingTags, setIsLoadingTags] = useState(false);
  const [modalDeleteTag, setModalDeleteTag] = useState(false);
  const [idTagProp, setIdTagProp] = useState(null);

  const getListTags = async () => {
    try {
      setIsLoadingTags(true);
      const response = await getListTagsService(filtersTag);
      setTags(response.data.tags.data);
      setInfoPaginationTags(response.data.tags);
    } catch (error) {
      toast.error("Error al obtener el listado de recursos");
      console.log(error);
    } finally {
      setIsLoadingTags(false);
    }
  };

  const handleChangeFiltersTag = async (e) => {
    const { type, name, value } = e.target;
    setFiltersTag((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModalDelete = (id) => {
    setModalDeleteTag(true);
    setIdTagProp(id);
  };

  const handleKeyInputFilter = async (e) => {
    if (e.key === "Enter") {
      await getListTags();
    }
  };

  const handlePageClick = async (value) => {
    const page = value.selected + 1;
    setFiltersTag({ ...filtersTag, page });
  };

  useEffect(() => {
    getListTags();
  }, [filtersTag.page, filtersTag.perPage]);

  return {
    getListTags,
    tags,
    handleChangeFiltersTag,
    infoPaginationTags,
    isLoadingTags,
    modalDeleteTag,
    setModalDeleteTag,
    idTagProp,
    handleKeyInputFilter,
    handlePageClick,
    openModalDelete,
  };
};

export default useTagIndex;
