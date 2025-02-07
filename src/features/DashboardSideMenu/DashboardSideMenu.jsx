import './DashboardSideMenu.css';

const DashboardSideMenu = () => {
    return (
        <aside className="dashboardSideMenuContainer">
            <h1 className="roboto-heading h2 grid grid-center">
                    <span className="material-symbols-outlined icon-lg">globe</span>
                    EarthSense
            </h1>
            <nav className="pad-1">
                <ul className="flex gap-2 flex-col list-style-none">
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">view_comfy_alt</span> 
                        <a href="#">Overview</a>
                    </li>
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">group</span> 
                        <a href="#">Users</a>
                    </li>
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">Devices</span>
                        <a href="#">Devices</a>
                    </li>
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">analytics</span>
                        <a href="#">Measurements</a>
                    </li>
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">stacked_bar_chart</span> 
                        <a href="#">Reports</a>
                    </li>
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">settings</span> 
                        <a href="#">Settings</a>
                    </li>
                </ul>
            </nav>
            <section className="pad-1 padb-2 flex flex-align-end">
                
                    <li className="flex flex-align-center gap-2">
                        <span className="material-symbols-outlined">logout</span> 
                        <a href="#">Logout</a>
                    </li>

            </section>
        </aside>
    )
};

export default DashboardSideMenu;