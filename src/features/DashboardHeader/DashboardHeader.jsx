import { SideMenuContext } from '../../contexts/SideMenuContext';
import { useContext } from 'react';

import { Icon } from '../../components/Icon/Icon';

import './DashboardHeader.css';

const DashboardHeader = () => {

    const { menuOpen, setMenuOpen } = useContext(SideMenuContext);

    const handleOnClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="dashboardHeaderContainer">
            <h2 className="roboto-heading h2">Dashboard</h2>
            <nav>
                
            </nav>
            <button onClick={handleOnClick}>
                <Icon name="menu" classes="display-md-none display-lg-none" />
            </button>
        </header>
    )
};

export default DashboardHeader;