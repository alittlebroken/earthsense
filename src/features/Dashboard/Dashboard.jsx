

import { DataContext } from '../../contexts/DataContext';
import { toggleSideMenuContext } from '../../contexts/toggleSideMenuContex';
import useWindowResize from '../../hooks/useWindowresize';

import DashboardSideMenu from '../DashboardSideMenu/DashboardSideMenu';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardMain from '../DashboardMain/DashboardMain';

import './Dashboard.css';
import { meteorlogicalData } from '../../mocks/mockedData';


const Dashboard = () => {

    const data = meteorlogicalData;
    const sideMenuOpen = useWindowResize('375');

    return (
        <DataContext.Provider value={data}>
            <toggleSideMenuContext.Provider value={sideMenuOpen}>
                <div className="dashboardContainer">

                    <DashboardSideMenu classes="gap-2" />

                    <div className="dashboardContentContainer">

                        <DashboardHeader />

                        <DashboardMain />

                    </div>
                </div>
            </toggleSideMenuContext.Provider>
        </DataContext.Provider>
    )
};

export default Dashboard;