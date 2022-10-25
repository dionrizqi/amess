import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "../chart/BarChart";
import LineChart from "../chart/LineChart";
import PieChart from "../chart/PieChart";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    labels: [2018,2019,2020,2021,2022],
    datasets: [
      {
        label: "Users Gained",
        data: [50,100,150,200,250],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
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
                  {/* <h5 className="card-title">Card title</h5> */}
                  <h2>Welcome Back {user && user.name}</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique sunt nisi, numquam ea dolorem, nobis nesciunt illum, nam veniam quia. Voluptates repudiandae atque quis ut laborum vitae laboriosam soluta?
                <br></br>
                <br></br>
                <div className="row">
                  <div className="col-md-6">
                    <BarChart chartData={userData} />
                  </div>
                  <div className="col-md-6">
                    <LineChart chartData={userData} />
                  </div>
                  <br></br>
                  <div className="col-md-6">
                  <center>
                    <div style={{ width:350 }}>
                      <PieChart chartData={userData} />
                    </div>
                  </center>
                  </div>
                </div>
                
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
