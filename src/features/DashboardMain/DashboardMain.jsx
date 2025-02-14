import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import { meteorlogicalData} from '../../mocks/mockedData';

import { Card, CardBody, CardHeader, CardTitle } from '../../components/Card/Card';

import LatestReadings from '../LatestReadings/LatestReadings';
import AirQuality from '../AirQuality/AirQuality';

import './DashboardMain.css';

const DashboardMain = ({children}) => {
    return (
        <main className="dashboardMainContainer grid gap-1">
            
            <LatestReadings data={meteorlogicalData} />

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

            <AirQuality data={meteorlogicalData.airQualityData} />

        </main>
    )
};

export default DashboardMain;