import React, { useEffect } from "react";
import Layout from "../../Layout";
import FormAddWorkcenter from "../../../components/masterdata/workcenter/FormAddWorkcenter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const AddWorkcenter = () => {
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
      <FormAddWorkcenter />
    </Layout>
  );
};

export default AddWorkcenter;
