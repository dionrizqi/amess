import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {DataGrid} from '@mui/x-data-grid';

const RoleList = () => {
  const [role, setRole] = useState([]);
  const column = useMemo(()=>[
    {
      field: 'number' , 
      headerName: 'No', 
      filterable: false,
      renderCell:(params) => params.api.getRowIndex(params.row.uuid) + 1, 
      headerAlign: 'center', align: 'center'
    },
    {field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'uuid', headerName: 'ID', flex: 1, hide: true},
    {field: 'actions', headerName: 'Action', type:'actions', flex:1, headerAlign: 'center', align: 'center',
      renderCell: (params) => (
        <div>
        <Link
          to={`/masterdata/role/edit/${params.id}`}
          className="button is-small is-info"
        >
          <i className="fas fa-edit"></i>
        </Link>
        &nbsp;
        <button onClick={() => {if(window.confirm('Delete Role?')){deleteRole(params.id)};}} className="button is-small is-danger">
          <i className="fas fa-trash"></i>
        </button>
        </div>
      )
    }
  ], [])

  useEffect(() => {
    getRole();
  }, []);

  const getRole = async () => {
    const response = await axios.get("http://localhost:5000/role");
    setRole(response.data);
  };

  const deleteRole = async (roleId) => {
    await axios.delete(`http://localhost:5000/role/${roleId}`);
    getRole();
  };

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">List Role</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Master Data</a>
                </li>
                <li className="breadcrumb-item">
                  Role
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
                  <Link to={"/masterdata/role/add"} className="btn btn-primary mb-2">
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
                    rows={role}
                    getRowId={row=>row.uuid}
                  />
                  

                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleList;
