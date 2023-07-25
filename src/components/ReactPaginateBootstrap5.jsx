import ReactPaginate from "react-paginate";

const ReactPaginateBootstrap5 = ({ ...props }) => {
  return (
    <ReactPaginate
      nextLabel="Siguiente >>"
      previousLabel="<< Atras"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination pagination-sm"
      activeClassName="active"
      {...props}
    />
  );
};

export default ReactPaginateBootstrap5;
