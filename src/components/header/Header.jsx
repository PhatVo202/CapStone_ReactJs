import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInforAction } from "../../store/actions/userAction";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);

  const dispatcch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatcch(setUserInforAction(null));
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {" "}
          Movie{" "}
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">
                {" "}
                Home{" "}
              </a> */}
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
          <div className="ml-auto">
            {userState.userInfo ? (
              <>
                <span className="mr-3">
                  <Space size={16} wrap>
                    <Avatar icon={<UserOutlined />} />
                  </Space>
                  {userState.userInfo.hoTen}
                </span>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Dang Xuat
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-info my-2 my-sm-0 mr-2"
                  type="sumit"
                >
                  Register
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-outline-success my-2 my-sm-0"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
