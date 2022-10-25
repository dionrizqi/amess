import React, { useEffect } from "react";
import Layout from "../../Layout";
import FormEditWorkcenter from "../../../components/masterdata/workcenter/FormEditWorkcenter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const EditWorkcenter = () => {
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
      <FormEditWorkcenter />
    </Layout>
  );
};

export default EditWorkcenter;
