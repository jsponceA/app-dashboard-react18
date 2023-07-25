import { useState } from "react";
import { updateTagService, getOneTagService } from "../../services/tag";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const useTagEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tag, setTag] = useState({
    name: "",
    description: "",
    bg_color: "",
  });
  const [errorsTag, setErrorsTag] = useState([]);
  const [loadSubmitFormTag, setLoadSubmitFormTag] = useState(false);
  const [loadInitialData, setLoadInitialData] = useState(false);

  const fetchInitialData = async () => {
    try {
      setLoadInitialData(true);
      const {
        data: { tag: dataTag },
      } = await getOneTagService(id);

      Object.keys(tag).forEach((key) => {
        setTag((prev) => ({ ...prev, [key]: dataTag[key] }));
      });
    } catch (error) {
      toast.error("Error al obtener el recurso");
      console.log(error);
    } finally {
      setLoadInitialData(false);
    }
  };

  const updateTag = async () => {
    try {
      setLoadSubmitFormTag(true);
      setErrorsTag([]);
      const {
        data: { message },
      } = await updateTagService(id, tag);
      toast.success(message);
      navigate("/tags");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsTag(data.errors);
        toast.error("Errores de validación");
      } else {
        toast.error("Error al modificar el recurso");
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

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    updateTag,
    tag,
    handleChangeFormTag,
    loadSubmitFormTag,
    setErrorsTag,
    errorsTag,
    loadInitialData,
  };
};

export default useTagEdit;
