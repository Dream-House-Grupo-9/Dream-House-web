import React from "react";
import '../css/dashboard.css';
import SimpleNav from "../components/SimpleNav";
import ChartBox from "../components/ChartBox";
import SideNav from "../components/SideNav";
import NavBarCompacta from "../components/NavBarCompacta";

function Dashboard() {
    return (
        <>
            <NavBarCompacta />
            <div className="dashboard-content">
                <SideNav />
                <div className="chart-position">
                    <ChartBox />
                </div>
            </div>
        </>
    );
}

export default Dashboard;