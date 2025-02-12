import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import { meteorlogicalData} from '../../mocks/mockedData';

import './DashboardMain.css';
import { Card, CardBody, CardHeader, CardTitle } from '../../components/Card/Card';

const DashboardMain = ({children}) => {
    return (
        <main className="dashboardMainContainer grid gap-1">
            
            <section className="grid grid-cols-4 gap-1">
                
                <Card>
                    <CardHeader>
                        <CardTitle>Temperature</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.temp}°C</span>
                    </CardBody>
                </Card>

                <Card primary>
                    <CardHeader>
                        <CardTitle>Humidity</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.humidity}%</span>
                    </CardBody>
                </Card>

                <Card secondary>
                    <CardHeader>
                        <CardTitle>Wind Speed</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.windSpeed} km/h</span>
                    </CardBody>
                </Card>

                <Card tertiary>
                    <CardHeader>
                        <CardTitle>Wind Dir</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.windDir}</span>
                    </CardBody>
                </Card>

            </section>

            <section className="grid grid-cols-4 gap-1 ">

                <Card classes="grid-span-2">
                   
                    <CardHeader>
                        <CardTitle>Temperature & Humidity - Last 24 Hours</CardTitle>
                    </CardHeader>

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
                    
                </Card>

                <Card classes="grid-span-2 grid gap-1 pad-1">
                   
                    <CardHeader>
                        <CardTitle>Wind Speed - Last 24 Hours</CardTitle>
                    </CardHeader>

                    <span className="text-700"></span>
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
                    
                </Card>

            </section>

            <section className="grid grid-cols-4 gap-1">

                <Card classes="grid-span-4 gap-1">

                    <CardHeader>
                        <CardTitle>Air Quality - Last 24 Hours</CardTitle>
                    </CardHeader>

                    <CardBody>

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

                    </CardBody>

                </Card>

            </section>

        </main>
    )
};

export default DashboardMain;