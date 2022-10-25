import React, { useEffect } from "react";
import Layout from "../../Layout";
import WorkOrderList from "../../../components/work_report/work_order/WorkOrderList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const WorkOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <WorkOrderList />
    </Layout>
  );
};

export default WorkOrder;
