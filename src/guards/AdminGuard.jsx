import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { MaLoaiNguoiDung } from "../enums";

export default function AdminGuard() {
  const userState = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  useEffect(() => {
    //ng dung chua dang nhap
    if (!userState.userInfo) {
      notification.warning({
        message: "Chua dang nhap khong the truy cap",
      });

      navigate("/");
    } else {
      if (userState.userInfo.maLoaiNguoiDung === MaLoaiNguoiDung.KhachHang) {
        notification.warning({
          message: "Khach hang khong co quyen truy cap",
        });

        navigate("/");
      }
    }

    //ng dung da dang nhap nhung ma loai la khach hang
  }, []);
  return <Outlet />;
}
