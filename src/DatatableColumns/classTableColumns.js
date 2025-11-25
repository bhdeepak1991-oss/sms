export const classTableColumns = (handleDelete, handleEdit) => [
  {
    name: "Class Code",
    selector: (row) => row.classCode,
    sortable: true,
  },
  {
    name: "Class Name",
    selector: (row) => row.className,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.classDescription,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div style={{ display: "flex", gap: "6px" }}>
        <button
          onClick={() => handleEdit(row)}
          className="btn btn-success btn-sm"
        >
          <i className="fa fa-pencil"></i>
        </button>
        <button
          onClick={() => handleDelete(row)}
          className="btn btn-danger btn-sm"
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    ),
  },
];
