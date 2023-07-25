import { useState } from "react";
import { saveUserService } from "../../services/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useUserCreate = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorsUser, setErrorsUser] = useState([]);
  const [loadSubmitFormUser, setLoadSubmitFormUser] = useState(false);

  const saveUser = async () => {
    try {
      setLoadSubmitFormUser(true);
      setErrorsUser([]);
      const {
        data: { message },
      } = await saveUserService(user);
      toast.success(message);
      navigate("/users");
    } catch (error) {
      const { status, data } = error.response;
      if (status === 422) {
        setErrorsUser(data.errors);
        toast.error("Errores de validación");
      } else {
        toast.error("Error al crear el recurso");
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

  return {
    saveUser,
    user,
    handleChangeFormUser,
    loadSubmitFormUser,
    setErrorsUser,
    errorsUser,
  };
};

export default useUserCreate;
