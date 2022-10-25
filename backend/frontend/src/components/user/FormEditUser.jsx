import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select";

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [role_name, setRoleName] = useState("");
  const [phone, setPhone] = useState("");
  
  //select option
  const [optionsRole, setOptionsRole] = useState([]);
  useEffect(() => {
    const getDataRole = async () => {
      const arr = [];
      await axios.get("http://localhost:5000/role").then((res) => {
        let result = res.data;
        result.map((roleOp) => {
          return arr.push({value: roleOp.id, label: roleOp.name});
        });
        setOptionsRole(arr);
      });
    };
    getDataRole();
  }, []);
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption)
  }
  //end of select option

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
        setRoleName(response.data.role_name);
        setPhone(response.data.phone);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
        phone: phone,
      });
      navigate("/users");
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
              <h1 className="m-0">Edit User</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/users/">Users</Link>
                </li>
                <li className="breadcrumb-item active">Edit User</li>
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
                  <form onSubmit={updateUser}>
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
                      <label className="label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                      <label className="label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="******"
                        />
                    </div>
                    <div className="form-group">
                      <label className="label">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={confPassword}
                          onChange={(e) => setConfPassword(e.target.value)}
                          placeholder="******"
                        />
                    </div>
                    <div className="form-group">
                      <label className="label">Role</label>
                      <Select
                          value={{label: role_name, value: role_name}}
                          onChange={handleChange => setRole(handleChange.value)}
                          isSearchable
                          options={optionsRole}
                          />
                    </div>
                    <div className="form-group">
                      <label className="label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                        &nbsp;
                        <Link to="/users/" className="btn btn-secondary">
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

export default FormEditUser;
