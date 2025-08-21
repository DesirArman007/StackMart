import { Navigate } from "react-router-dom";
import { TabTitle } from "../../utils/General";
import MyAccount from "../Account/MyAccount/MyAccount"; 

const Dashboard = () => {
  TabTitle("Dashboard - Stackmart");

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/account/login" replace />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to your Dashboard</h1>
      <MyAccount /> 
      {/* You can add more sections here later like Orders, Settings, etc. */}
    </div>
  );
};

export default Dashboard;
