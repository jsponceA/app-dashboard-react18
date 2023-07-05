import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "admin",
    password: "123456",
    remenber: true,
  });
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorsLogin, setErrorsLogin] = useState([]);

  const handleSubmitFormLogin = async (e) => {
    e.preventDefault();
    try {
      setLoadingLogin(true);
      if (login.username === "admin" && login.password === "123456") {
        toast.success("Bienvenido al sistema.");
        navigate("/home", { replace: true });
      } else {
        toast.error("Credenciales no validas, intentelo nuevamente.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingLogin(false);
    }
  };

  const cleanErrorsLogin = () => {
    setErrorsLogin([]);
  };

  const handleChangeFormLogin = (e) => {
    const { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      setLogin((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setLogin((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return {
    login,
    setLogin,
    loadingLogin,
    errorsLogin,
    cleanErrorsLogin,
    handleSubmitFormLogin,
    handleChangeFormLogin,
  };
};

export default useLogin;
