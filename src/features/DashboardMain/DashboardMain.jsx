import './DashboardMain.css';

const DashboardMain = ({children}) => {
    return (
        <main className="dashboardMainContainer grid gap-1">
            
            <section className="grid grid-cols-4 gap-1">
                
                <div className="rounded bg-colour-white pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Total Users</span>
                    <span className="text-lg text-700">12</span>
                </div>
                <div className="rounded bg-colour-primary text-white pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Total Devices</span>
                    <span className="text-lg text-700">13</span>
                </div>
                <div className="rounded bg-colour-secondary text-white pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Active Devices</span>
                    <span className="text-lg text-700">10</span>
                </div>
                <div className="rounded bg-colour-tertiary pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Total Measurements</span>
                    <span className="text-lg text-700">4K</span>
                </div>
            </section>

            <section className="grid grid-cols-4 gap-1 ">

                <div className="grid-span-2 rounded bg-colour-white pad-1">
                    <span className="text-700">Trend</span>
                </div>

                <div className="rounded bg-colour-white pad-1">
                <span className="text-700">

                </span>
                </div>

                <div className="rounded bg-colour-white pad-1">
                    <span className="text-700">Network Traffic</span>
                </div>


            </section>

            <section className="grid grid-cols-4 gap-1">

                <div className="grid-span-2 rounded bg-colour-white pad-1">
                    <span className="text-700">Support Tickets</span>
                </div>

                <div className="grid-span-2 rounded bg-colour-white pad-1">
                    <span className="text-700">Device Demographic</span>
                </div>

            </section>

        </main>
    )
};

export default DashboardMain;