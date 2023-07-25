import { Link } from "react-router-dom";
import useIndexCategory from "../../hooks/category/useIndexCategory";
import CategoryDelete from "./Delete";
import SpinnerLoader from "../../components/SpinnerLoader";
import ReactPaginateBootstrap5 from "../../components/ReactPaginateBootstrap5";
import dayjs from "dayjs";

const CategoryIndex = () => {
  const {
    getListCategories,
    categories,
    handleChangeFiltersCategory,
    infoPaginationCategories,
    isLoadingCategories,
    modalDeleteCategory,
    setModalDeleteCategory,
    idCategoryProp,
    handleKeyInputFilter,
    handlePageClick,
    openModalDelete,
  } = useIndexCategory();

  return (
    <div className="container-fluid">
      <CategoryDelete
        openModal={modalDeleteCategory}
        setOpenModal={setModalDeleteCategory}
        getListCategories={getListCategories}
        id={idCategoryProp}
      />
      <div className="row">
        <div className="col-md-12">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/home"}>Inicio</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Categorias
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-lg ">
            <div className="card-header bg-primary bg-opacity-75 text-white">
              <p className="my-0 text-center fw-bold fs-5">
                <i className="bx bx-category bx-sm"></i> CATEGORIAS
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 d-flex mb-3">
                  <div className="me-auto">
                    <button
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="GENERAR REPORTE EN PDF"
                      className="btn btn-danger mx-1"
                    >
                      <i className="bx bxs-file-pdf bx-sm"></i>
                    </button>
                    <button
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="GENERAR REPORTE EN EXCEL"
                      className="btn btn-success mx-1"
                    >
                      <i className="bx bxs-file-doc bx-sm"></i>
                    </button>
                  </div>
                  <Link
                    to={"/categories/create"}
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="bx bx-plus bx-sm"></i> AGREGAR CATEGORIA
                  </Link>
                </div>
                <div className="col-md-12 mb-2">
                  <div className="input-group">
                    <span
                      onClick={() => getListCategories()}
                      className="input-group-text border-primary-subtle border-2"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="bx bx-search"></i>
                    </span>
                    <input
                      onChange={handleChangeFiltersCategory}
                      onKeyDown={handleKeyInputFilter}
                      type="text"
                      name="search"
                      className="form-control border-primary-subtle border-2"
                      placeholder="Buscar registro..."
                    />
                  </div>
                </div>
                <div className="col-md-1 mb-1">
                  <select
                    onChange={handleChangeFiltersCategory}
                    name="perPage"
                    className="form-select form-select-sm border-secondary"
                  >
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                  </select>
                </div>

                <div className="col-md-12">
                  <div className="table-responsive position-relative">
                    {isLoadingCategories && (
                      <div
                        className="position-absolute"
                        style={{ top: "30%", left: "45%" }}
                      >
                        <SpinnerLoader />
                      </div>
                    )}
                    <table className="table table-sm table-hover table-bordered custom-table ">
                      <thead>
                        <tr className="text-nowrap">
                          <td className="text-center">ACCIONES</td>
                          <td>CATEGORIA</td>
                          <td>DESCRIPCIÓN</td>
                          <td>FECHA CREACIÓN</td>
                          <td>FECHA MODIFICACIÓN</td>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category) => (
                          <tr key={category.id}>
                            <td className="text-center">
                              <div className="dropdown open">
                                <button
                                  className="btn btn-secondary bg-gradient btn-sm dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-bs-config='{"popperConfig":{"strategy":"fixed"}}'
                                >
                                  <i className="bx bx-list-ul"></i> Seleccione
                                </button>
                                <div className="dropdown-menu">
                                  <Link
                                    to={`/categories/edit/${category.id}`}
                                    className="dropdown-item"
                                  >
                                    <i className="bx bx-edit"></i> Editar
                                  </Link>
                                  <button
                                    onClick={() => openModalDelete(category.id)}
                                    type="button"
                                    className="dropdown-item"
                                  >
                                    <i className="bx bx-trash"></i> Eliminar
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                              {category.created_at &&
                                dayjs(category.created_at).format("DD/MM/YYYY")}
                            </td>
                            <td>
                              {category.updated_at &&
                                dayjs(category.updated_at).format("DD/MM/YYYY")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="text-nowrap">
                          <td className="text-center">ACCIONES</td>
                          <td>CATEGORIA</td>
                          <td>CORREO</td>
                          <td>FECHA CREACIÓN</td>
                          <td>FECHA MODIFICACIÓN</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="d-flex flex-md-row flex-column">
                    <p className="my-0">
                      {`Mostrando del registro
                        ${infoPaginationCategories.firstRegister} al
                        ${infoPaginationCategories.lastRegister} de un total de
                        ${infoPaginationCategories.totalRegisters} filas`}
                    </p>
                    <div className="ms-auto">
                      <ReactPaginateBootstrap5
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={infoPaginationCategories.totalPages}
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryIndex;
