import { useState } from "react";
import {
  updateCategoryService,
  getOneCategoryService,
} from "../../services/category";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const useCategoryEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [errorsCategory, setErrorsCategory] = useState([]);
  const [loadSubmitFormCategory, setLoadSubmitFormCategory] = useState(false);
  const [loadInitialData, setLoadInitialData] = useState(false);

  const fetchInitialData = async () => {
    try {
      setLoadInitialData(true);
      const {
        data: { category: dataCategory },
      } = await getOneCategoryService(id);

      Object.keys(category).forEach((key) => {
        setCategory((prev) => ({ ...prev, [key]: dataCategory[key] }));
      });
    } catch (error) {
      toast.error("Error al obtener el recurso");
      console.log(error);
    } finally {
      setLoadInitialData(false);
    }
  };

  const updateCategory = async () => {
    try {
      setLoadSubmitFormCategory(true);
      setErrorsCategory([]);
      const {
        data: { message },
      } = await updateCategoryService(id, category);
      toast.success(message);
      navigate("/categories");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsCategory(data.errors);
        toast.error("Errores de validación");
      } else {
        toast.error("Error al modificar el recurso");
        console.log(error);
      }
    } finally {
      setLoadSubmitFormCategory(false);
    }
  };

  const handleChangeFormCategory = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    updateCategory,
    category,
    handleChangeFormCategory,
    loadSubmitFormCategory,
    setErrorsCategory,
    errorsCategory,
    loadInitialData,
  };
};

export default useCategoryEdit;
