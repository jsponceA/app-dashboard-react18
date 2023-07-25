import { useState } from "react";
import { saveCategoryService } from "../../services/category";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useCategoryCreate = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    name: "",
    description: "",
  });
  const [errorsCategory, setErrorsCategory] = useState([]);
  const [loadSubmitFormCategory, setLoadSubmitFormCategory] = useState(false);

  const saveCategory = async () => {
    try {
      setLoadSubmitFormCategory(true);
      setErrorsCategory([]);
      const {
        data: { message },
      } = await saveCategoryService(category);
      toast.success(message);
      navigate("/categories");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsCategory(data.errors);
        toast.error("Errores de validación");
      } else {
        toast.error("Error al crear el recurso");
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

  return {
    saveCategory,
    category,
    handleChangeFormCategory,
    loadSubmitFormCategory,
    setErrorsCategory,
    errorsCategory,
  };
};

export default useCategoryCreate;
