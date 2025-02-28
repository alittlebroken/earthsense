import { useContext } from 'react';

import { SideMenuContext } from '../../contexts/SideMenuContext';
import { Collapsable } from '../../components/Collapsable/Collapsable';
import { Icon } from '../../components/Icon/Icon';
import {
    SideMenu,
    SideMenuBrand,
    SideMenuFooter,
    SideMenuList,
    SideMenuListItem,
    SideMenuTitle
} from '../../components/SideMenu/SideMenu';


import './DashboardSideMenu.css';

const DashboardSideMenu = (props) => {

    const { menuOpen, setMenuOpen } = useContext(SideMenuContext);

    const handleOnClick = (e) => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    }

    const {
        classes
    } = props;

    let styles = "dashboardSideMenuContainer ";

    classes ? styles += classes + " ": "";
    menuOpen ? styles += "dashSideMenuOpen " : "";

    return (

        <SideMenu classes={styles}>

            <SideMenuBrand>
                <SideMenuTitle classes="roboto-heading h2 grid grid-center">
                    <Icon name="globe" lg />
                    EarthSense
                </SideMenuTitle>
                <button onClick={handleOnClick}>
                    <Icon name="menu" classes="display-md-none display-lg-none" />
                </button>
            </SideMenuBrand>

            <SideMenuList>
                <SideMenuListItem>
                    <Icon name="view_comfy_alt" />
                    <Collapsable>Overview</Collapsable>
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="group" />
                    <Collapsable>Users</Collapsable>
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="devices" />
                    <Collapsable>Devices</Collapsable>
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="analytics" />
                    <Collapsable>Measurements</Collapsable>
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="stacked_bar_chart" />
                    <Collapsable>Reports</Collapsable>
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="settings" />
                    <Collapsable>Settings</Collapsable>
                </SideMenuListItem>
            </SideMenuList>

            <SideMenuFooter>
                <SideMenuList>
                    <SideMenuListItem>
                        <Icon name="logout" />
                        Logout
                    </SideMenuListItem>
                </SideMenuList>
            </SideMenuFooter>

        </SideMenu>

        
    )
};

export default DashboardSideMenu;