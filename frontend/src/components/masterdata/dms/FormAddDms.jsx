import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FormAddDms = () => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState("");
  const { isLoading } = useSelector(
    (state) => state.auth
  );
  
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  
  const loadFile = (e) => {
    const dokumen = e.target.files[0];
    setFile(dokumen);
  }

  const saveDms = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("notes", notes);
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/dms", formData, {
        headers: { "Content-type": "multipart/form-data" }
      });
      navigate("/masterdata/dms");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Add DMS</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Master Data</a>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/masterdata/dms">DMS</Link>
                </li>
                <li className="breadcrumb-item active">Add DMS</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={saveDms}>
                    <p className="has-text-centered text-danger">{msg}</p>
                    <div className="form-group">
                      <label className="label">Doc Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Doc Name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Notes</label>
                        <textarea className="form-control" value={notes} 
                          onChange={(e) => setNotes(e.target.value)} placeholder="Notes"></textarea>
                    </div>
                    <div className="form-group">
                        <label className="label">File</label>
                        <input
                          type="file"
                          onChange={loadFile}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          {isLoading ? "Please Wait..." : "Save"}
                        </button>
                        &nbsp;
                        <Link to="/masterdata/dms" className="btn btn-secondary">
                          Back
                        </Link>
                    </div>
                  </form>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDms;
