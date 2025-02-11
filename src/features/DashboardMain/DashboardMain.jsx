import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import { meteorlogicalData} from '../../mocks/mockedData';

import './DashboardMain.css';

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

const DashboardMain = ({children}) => {
    return (
        <main className="dashboardMainContainer grid gap-1">
            
            <section className="grid grid-cols-4 gap-1">
                
                <div className="rounded bg-colour-white pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Temperature</span>
                    <span className="text-lg text-700">{meteorlogicalData.temp}°C</span>
                </div>
                <div className="rounded bg-colour-primary text-white pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Humidity</span>
                    <span className="text-lg text-700">{meteorlogicalData.humidity}%</span>
                </div>
                <div className="rounded bg-colour-secondary text-white pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Wind Speed</span>
                    <span className="text-lg text-700">{meteorlogicalData.windSpeed} km/h</span>
                </div>
                <div className="rounded bg-colour-tertiary pad-1 flex flex-col flex-justify-between">
                    <span className="text-700">Wind Dir</span>
                    <span className="text-lg text-700">{meteorlogicalData.windDir}</span>
                </div>
            </section>

            <section className="grid grid-cols-4 gap-1 ">

                <div className="grid-span-2 rounded bg-colour-white pad-1 grid gap-1">
                    <span className="text-700">Temperature & Humidity - Last 24 Hours</span>
                    <ResponsiveContainer width="90%" height="90%">
                        <LineChart
                            width={500}
                            height={300}
                            data={meteorlogicalData.historicalData}
                        >
                         <CartesianGrid strokeDasharray="3 3" />   
                         <XAxis dataKey="time" />
                         <YAxis yAxisId="left" />
                         <YAxis yAxisId="right" orientation="right" />
                         <Tooltip />
                         <Legend />
                         <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#75485E" />
                         <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#95BF8F" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="grid-span-2 rounded bg-colour-white pad-1 grid gap-1">
                    <span className="text-700">Wind Speed - Last 24 Hours</span>
                    <ResponsiveContainer width="90%" height="90%">
                        <LineChart
                            width={500}
                            height={300}
                            data={meteorlogicalData.historicalData}
                        >
                         <CartesianGrid strokeDasharray="3 3" />   
                         <XAxis dataKey="time" />
                         <YAxis />
                         <Tooltip />
                         <Legend />
                         <Line type="monotone" dataKey="windSpeed" stroke="#FF7F11" />
                         <Line type="monotone" dataKey="windGusts" stroke="#FF1B1C" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>


            </section>

            <section className="grid grid-cols-4 gap-1">

                <div className="grid-span-4 rounded bg-colour-white pad-1 flex flex-col gap-1">
                    <span className="text-700">Air Quality - Last 24 Hours</span>
                    <div className="dataTableContainer">
                        <table className="dataTable">
                            <thead>
                            <tr>
                                <th>Time</th>
                                <th>Particulates PM<sub>10</sub></th>
                                <th>Carbon Monoxide CO</th>
                                <th>Carbon Dioxide CO2</th>
                                <th>Nitrogen Dioxide NO2</th>
                            </tr>
                            </thead>
                            <tbody>
                                {meteorlogicalData.airQualityData.map((air) => {
                                    return (
                                        <tr>
                                            <td>{air.time}</td>
                                            <td>{air.particulates}</td>
                                            <td>{air.co}</td>
                                            <td>{air.co2}</td>
                                            <td>{air.no2}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

        </main>
    )
};

export default DashboardMain;