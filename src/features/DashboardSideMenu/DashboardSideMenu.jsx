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

            <SideMenuBrand classes="flex flex-center flex-sm-between ">
                <SideMenuTitle classes="roboto-heading h2 gap-2 flex flex-col flex-center flex-sm flex-sm-center flex-sm-row">
                    <Icon name="globe" lg />
                    EarthSense
                </SideMenuTitle>
                <button onClick={handleOnClick} className="btn-hamburger btn-hamburger-light display-md-none display-lg-none">
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