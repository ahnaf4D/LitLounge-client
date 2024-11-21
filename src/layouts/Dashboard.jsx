import { Outlet } from "react-router-dom";
import SideBar from "../components/DashboardSideBar/SideBar";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3">
                <SideBar></SideBar>
            </div>
            <div className="col-span-9">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;