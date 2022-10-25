import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {DataGrid} from '@mui/x-data-grid';

const TemplateList = () => {

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Template List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Template</a>
                </li>
                {/* <li className="breadcrumb-item">
                  Planning List
                </li> */}
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
                  

                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
