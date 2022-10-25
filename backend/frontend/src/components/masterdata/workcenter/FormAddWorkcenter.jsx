import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select";

const FormAddWorkcenter = () => {
  const [name, setName] = useState("");
  
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveWorkcenter = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/workcenter", {
        name: name,
      });
      navigate("/masterdata/workcenter");
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
              <h1 className="m-0">Add Workcenter</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Master Data</a>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/masterdata/workcenter">Workcenter</Link>
                </li>
                <li className="breadcrumb-item active">Add Workcenter</li>
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
                  <form onSubmit={saveWorkcenter}>
                    <p className="has-text-centered text-danger">{msg}</p>
                    <div className="form-group">
                      <label className="label">Workcenter Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                        &nbsp;
                        <Link to="/masterdata/workcenter" className="btn btn-secondary">
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

export default FormAddWorkcenter;
