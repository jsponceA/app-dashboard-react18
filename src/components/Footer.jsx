const Footer = () => {
  return (
    <footer className="mt-auto bg-secondary bg-opacity-25">
      <p className="text-center my-0">Desarrollado por JPonce</p>
      <hr className="border-secondary-subtle my-1" />
      <p className="text-secondary text-center my-0">
        Copyright © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}.
        Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
