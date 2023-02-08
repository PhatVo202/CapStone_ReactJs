import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthGuard() {
  const userState = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userState.userInfo) {
      alert("Dang nhap de tiep tuc vao trang");
      navigate("/login");
    }
  }, []);

  return <Outlet />;
}
