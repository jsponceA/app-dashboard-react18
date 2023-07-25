import { useState } from "react";
import { saveTagService } from "../../services/tag";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useTagCreate = () => {
  const navigate = useNavigate();

  const [tag, setTag] = useState({
    name: "",
    description: "",
    bg_color: "",
  });
  const [errorsTag, setErrorsTag] = useState([]);
  const [loadSubmitFormTag, setLoadSubmitFormTag] = useState(false);

  const saveTag = async () => {
    try {
      setLoadSubmitFormTag(true);
      setErrorsTag([]);
      const {
        data: { message },
      } = await saveTagService(tag);
      toast.success(message);
      navigate("/tags");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsTag(data.errors);
        toast.error("Errores de validación");
      } else {
        toast.error("Error al crear el recurso");
        console.log(error);
      }
    } finally {
      setLoadSubmitFormTag(false);
    }
  };

  const handleChangeFormTag = (e) => {
    const { name, value } = e.target;
    setTag((prev) => ({ ...prev, [name]: value }));
  };

  return {
    saveTag,
    tag,
    handleChangeFormTag,
    loadSubmitFormTag,
    setErrorsTag,
    errorsTag,
  };
};

export default useTagCreate;
