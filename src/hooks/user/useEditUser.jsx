import { useState } from "react";
import { updateUserService, getOneUserService } from "../../services/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const useUserEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorsUser, setErrorsUser] = useState([]);
  const [loadSubmitFormUser, setLoadSubmitFormUser] = useState(false);
  const [loadInitialData, setLoadInitialData] = useState(false);

  const fetchInitialData = async () => {
    try {
      setLoadInitialData(true);
      const {
        data: { user: dataUser },
      } = await getOneUserService(id);

      Object.keys(user).forEach((key) => {
        setUser((prev) => ({ ...prev, [key]: dataUser[key] }));
      });
    } catch (error) {
      toast.error("Error al obtener el recurso");
      console.log(error);
    } finally {
      setLoadInitialData(false);
    }
  };

  const updateUser = async () => {
    try {
      setLoadSubmitFormUser(true);
      setErrorsUser([]);
      const {
        data: { message },
      } = await updateUserService(id, user);
      toast.success(message);
      navigate("/users");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsUser(data.errors);
        toast.error("Errores de validación");
      } else {
        toast.error("Error al modificar el recurso");
        console.log(error);
      }
    } finally {
      setLoadSubmitFormUser(false);
    }
  };

  const handleChangeFormUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    updateUser,
    user,
    handleChangeFormUser,
    loadSubmitFormUser,
    setErrorsUser,
    errorsUser,
    loadInitialData,
  };
};

export default useUserEdit;
