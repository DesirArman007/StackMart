import { Navigate } from "react-router-dom";
import MyAccount from "../../components/Account/MyAccount/MyAccount";
import ManageAccount from "../../components/Account/ManageAccount/ManageAccount";
import { TabTitle } from "../../../utils/General";

export const Profile = () => {
  TabTitle("My Account - Stackmart");

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/account/login" replace />;

  return <MyAccount />;
};

export const AccountManager = () => {
  TabTitle("My Account - Stackmart");

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/account/login" replace />;

  return <ManageAccount />;
};
