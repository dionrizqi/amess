import React, { useEffect } from "react";
import Layout from "../../Layout";
import AssetTransfer from "../../../components/assets/assets_transfer/AssetTransfer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";

const AssetsTransfer = () => {
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
      <AssetTransfer />
    </Layout>
  );
};

export default AssetsTransfer;
