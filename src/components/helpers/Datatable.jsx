import { React } from "react";
import DataTable from "react-data-table-component";
import { FaSearch } from "react-icons/fa";

const customStyles = {
  table: {
    style: {
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
      border: "1px solid #e5e7eb",
    },
  },
  headCells: {
    style: {
      background:
        "linear-gradient(90deg, rgba(14,14,14,1) 0%, rgba(50,50,50,1) 100%)",
      color: "#fff",
      fontWeight: 600,
      fontSize: "13px",
      textTransform: "uppercase",
      paddingTop: "12px",
      paddingBottom: "12px",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      minHeight: "52px",
      borderBottom: "1px solid #f1f3f5",
      "&:hover": {
        backgroundColor: "#f8f9fa",
      },
    },
  },
  pagination: {
    style: {
      borderTop: "1px solid #e9ecef",
      padding: "16px",
      fontSize: "14px",
    },
  },
};

const Datatable = ({
  responseData,
  columns,
  filterText,
  onFilter,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 3px 12px rgba(0,0,0,0.06)",
        marginTop: "15px",
      }}
    >
      <DataTable
        columns={columns(handleDelete, handleEdit)}
        data={responseData}
        pagination
        highlightOnHover
        striped
        responsive
        subHeader
        subHeaderAlign="right"
        subHeaderComponent={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f8f9fa",
              padding: "8px 14px",
              borderRadius: "10px",
              width: "300px",
              border: "1px solid #dee2e6",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
            }}
          >
            <FaSearch style={{ marginRight: "10px", color: "#6c757d" }} />
            <input
              type="text"
              className="form-control border-0 shadow-none bg-transparent"
              placeholder="Search..."
              style={{ fontSize: "14px" }}
              value={filterText}
              onChange={(e) => onFilter(e.target.value)}
            />
          </div>
        }
        customStyles={customStyles}
      />
    </div>
  );
};

export default Datatable;
