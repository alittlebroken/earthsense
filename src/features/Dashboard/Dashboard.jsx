
import DashboardSideMenu from '../DashboardSideMenu/DashboardSideMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardMain from '../DashboardMain/DashboardMain';

import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className="dashboardContainer">

            <DashboardSideMenu />

            <div className="dashboardContentContainer">

                <DashboardHeader />

                <DashboardMain />

            </div>


        </div>
    )
};

export default Dashboard;