const SpinnerLoader = ({
  color = "primary",
  width = "7rem",
  height = "7rem",
}) => {
  return (
    <div
      className={`spinner-border text-${color}`}
      role="status"
      style={{ width: width, height: height }}
    >
      <span className="visually-hidden">Cargando...</span>
    </div>
  );
};

export default SpinnerLoader;
