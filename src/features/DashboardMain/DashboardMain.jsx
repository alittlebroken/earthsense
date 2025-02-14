import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import { meteorlogicalData} from '../../mocks/mockedData';

import './DashboardMain.css';
import { Card, CardBody, CardHeader, CardTitle, CardImage, CardOverLay, CardFooter } from '../../components/Card/Card';
import { TableData, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableColumn } from '../../components/Table/Table';

const DashboardMain = ({children}) => {
    return (
        <main className="dashboardMainContainer grid gap-1">
            
            <section className="grid grid-cols-4 gap-1">
                
                <Card classes="pad-1">
                    <CardHeader>
                        <CardTitle>Temperature</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.temp}°C</span>
                    </CardBody>
                </Card>

                <Card primary classes="pad-1">
                    <CardHeader>
                        <CardTitle>Humidity</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.humidity}%</span>
                    </CardBody>
                </Card>

                <Card secondary classes="pad-1">
                    <CardHeader>
                        <CardTitle>Wind Speed</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.windSpeed} km/h</span>
                    </CardBody>
                </Card>

                <Card tertiary classes="pad-1">
                    <CardHeader>
                        <CardTitle>Wind Dir</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{meteorlogicalData.windDir}</span>
                    </CardBody>
                </Card>

            </section>

            <section className="grid grid-cols-4 gap-1">

                <Card classes="grid-span-2 pad-1">
                   
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

                <Card classes="grid-span-2 pad-1">
                   
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

                <Card classes="grid-span-4 pad-1">

                    <CardHeader>
                        <CardTitle>Air Quality - Last 24 Hours</CardTitle>
                    </CardHeader>

                    <CardBody>
                            <TableData>
                                <Table >
                                    <TableHeader>
                                        <TableRow>
                                            <TableHeaderColumn>Time</TableHeaderColumn>
                                            <TableHeaderColumn>Particulates PM<sub>10</sub></TableHeaderColumn>
                                            <TableHeaderColumn>Carbon Monoxide CO</TableHeaderColumn>
                                            <TableHeaderColumn>Carbon Dioxide CO2</TableHeaderColumn>
                                            <TableHeaderColumn>Nitrogen Dioxide NO2</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {meteorlogicalData.airQualityData.map((air) => {
                                            return (
                                                <TableRow>
                                                    <TableColumn>{air.time}</TableColumn>
                                                    <TableColumn>{air.particulates}</TableColumn>
                                                    <TableColumn>{air.co}</TableColumn>
                                                    <TableColumn>{air.co2}</TableColumn>
                                                    <TableColumn>{air.no2}</TableColumn>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableData>
                    </CardBody>

                </Card>

            </section>

        </main>
    )
};

export default DashboardMain;