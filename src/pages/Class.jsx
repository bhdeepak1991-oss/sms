import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/helpers/breadcrumb";
import { getAllClass } from "../services/classService";
import Datatable from "../components/helpers/Datatable";
import { classTableColumns } from "../DatatableColumns/classTableColumns";

const ClassMaster = () => {
  const [classData, setClassData] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getAllClass()
      .then((resp) => setClassData(resp.data.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteClass = async (row) => {
    console.log(row);
  };

  const editClass = async (row) => {
    console.log(row);
  };

  const filteredData = classData.filter(
    (item) =>
      item.className?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.classCode?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.classDescription?.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <div
                id="example2_wrapper"
                className="dataTables_wrapper form-inline"
                role="grid"
              >
                <div className="row">
                  <div className="col-xs-6" />
                  <div className="col-xs-6" />
                </div>
                <Datatable
                  responseData={filteredData}
                  columns={classTableColumns}
                  filterText={filterText}
                  onFilter={setFilterText}
                  handleDelete={deleteClass}
                  handleEdit={editClass}
                />
              </div>
            </div>
            {/* /.box-body */}
          </div>
        </div>
        {/* /.col */}
      </div>
    </section>
  );
};

export default ClassMaster;
