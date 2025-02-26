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

    const {
        classes
    } = props;

    let styles = "dashboardSideMenuContainer ";

    classes ? styles += classes + " ": "";

    return (

        <SideMenu classes={styles}>

            <SideMenuBrand>
                <SideMenuTitle classes="roboto-heading h2 grid grid-center">
                    <Icon name="globe" lg />
                    EarthSense
                </SideMenuTitle>
            </SideMenuBrand>

            <SideMenuList>
                <SideMenuListItem>
                    <Icon name="view_comfy_alt" />
                    Overview
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="group" />
                    Users
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="devices" />
                    Devices
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="analytics" />
                    Measurements
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="stacked_bar_chart" />
                    Reports
                </SideMenuListItem>

                <SideMenuListItem>
                    <Icon name="settings" />
                    Settings
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