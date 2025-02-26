import { DataContext } from '../../contexts/DataContext';

import DashboardSideMenu from '../DashboardSideMenu/DashboardSideMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardMain from '../DashboardMain/DashboardMain';

import './Dashboard.css';
import { meteorlogicalData } from '../../mocks/mockedData';

const Dashboard = () => {

    const data = meteorlogicalData;

    return (
        <DataContext.Provider value={data}>
            <div className="dashboardContainer">

                <DashboardSideMenu classes="gap-2" />

                <div className="dashboardContentContainer">

                    <DashboardHeader />

                    <DashboardMain />

                </div>
            </div>
        </DataContext.Provider>
    )
};

export default Dashboard;