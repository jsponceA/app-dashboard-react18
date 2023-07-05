const Footer = () => {
  return (
    <footer className="mt-auto border-top bg-secondary-subtle">
      <p className="text-center my-0">
        Hecho con <i className="bx bx-heart-circle bx-xs"></i> por JPonce
      </p>
      <hr className="border-secondary-subtle my-1" />
      <p className="text-secondary text-center">
        Copyright © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}.
        Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
