import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const [loadingLogout, setLoadingLogout] = useState(false);
  const [errorsLogout, setErrorsLogout] = useState([]);

  const handleLogout = async () => {
    try {
      setLoadingLogout(true);
      navigate("/login", { replace: true });
      toast.success("Sesión finalizada con exito.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingLogout(false);
    }
  };

  return {
    loadingLogout,
    errorsLogout,
    handleLogout,
  };
};

export default useLogout;
