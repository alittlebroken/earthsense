

import { DataContext } from '../../contexts/DataContext';
import { SideMenuProvider } from '../../contexts/SideMenuContext';

import DashboardSideMenu from '../DashboardSideMenu/DashboardSideMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardMain from '../DashboardMain/DashboardMain';

import './Dashboard.css';
import { meteorlogicalData } from '../../mocks/mockedData';


const Dashboard = () => {

    const data = meteorlogicalData;

    return (
        <DataContext.Provider value={data}>
            <SideMenuProvider>
                <div className="dashboardContainer">

                    <DashboardSideMenu classes="gap-2 dashSideBar display-sm-none" />
                    <DashboardHeader classes="dashHeader" />
                    <DashboardMain classes="dashContent" />

                </div>
            </SideMenuProvider>
        </DataContext.Provider>
    )
};

export default Dashboard;