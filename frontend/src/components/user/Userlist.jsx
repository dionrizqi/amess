import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {DataGrid} from '@mui/x-data-grid';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const column = useMemo(()=>[
    {
      field: 'number' , 
      headerName: 'No', 
      filterable: false,
      renderCell:(params) => params.api.getRowIndex(params.row.uuid) + 1, 
      headerAlign: 'center', align: 'center'
    },
    {field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'email', headerName: 'Email', flex: 1, minWidth: 200, headerAlign: 'center', align: 'center'},
    {field: 'role_name', headerName: 'Role', flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'phone', headerName: 'Phone', flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'uuid', headerName: 'ID', flex: 1, hide: true},
    {field: 'actions', headerName: 'Action', type:'actions', flex:1, headerAlign: 'center', align: 'center',
      renderCell: (params) => (
        <div>
        <Link
          to={`/users/edit/${params.id}`}
          className="button is-small is-info"
        >
          <i className="fas fa-edit"></i>
        </Link>
        &nbsp;
        <button onClick={() => {if(window.confirm('Delete the user?')){deleteUser(params.id)};}} className="button is-small is-danger">
          <i className="fas fa-trash"></i>
        </button>
        </div>
      )
    }
  ], [])

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">List Users</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Users</a>
                </li>
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
                  <Link to="/users/add" className="btn btn-primary mb-2">
                    Add New
                  </Link>
                  <DataGrid
                  sx={{
                    boxShadow: 1,
                    border: 1,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                    height: 500
                  }}
                    columns={column}
                    rows={users}
                    getRowId={row=>row.uuid}
                  />
                  

                {/* <table className="table is-striped is-fullwidth">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.uuid}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <Link
                            to={`/users/edit/${user.uuid}`}
                            className="button is-small is-info"
                          >
                            <i className="fas fa-edit"></i>
                          </Link>
                          &nbsp;
                          <button
                            onClick={() => {if(window.confirm('Delete the user?')){deleteUser(user.uuid)};}}
                            className="button is-small is-danger"
                          >
                          <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}

                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
