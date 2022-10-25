import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select";

const FormEditCondition = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getConditionById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/condition/${id}`);
        setName(response.data.name);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getConditionById();
  }, [id]);

  const updateCondition = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/condition/${id}`, {
        name: name,
      });
      navigate("/masterdata/condition");
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
              <h1 className="m-0">Edit Condition</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Master Data</a>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/masterdata/condition">Condition</Link>
                </li>
                <li className="breadcrumb-item active">Edit Condition</li>
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
                  <form onSubmit={updateCondition}>
                    <p className="has-text-centered text-danger">{msg}</p>
                    <div className="form-group">
                      <label className="label">Name</label>
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
                          Update
                        </button>
                        &nbsp;
                        <Link to="/masterdata/condition" className="btn btn-secondary">
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

export default FormEditCondition;
