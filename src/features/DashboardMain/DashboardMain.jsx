import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

import { meteorlogicalData} from '../../mocks/mockedData';

import { Card, CardBody, CardHeader, CardTitle } from '../../components/Card/Card';

import LatestReadings from '../LatestReadings/LatestReadings';
import DashCharts from '../DashCharts/DashCharts';
import AirQuality from '../AirQuality/AirQuality';

import './DashboardMain.css';

const DashboardMain = ({children}) => {
    return (
        <main className="dashboardMainContainer grid gap-1">
            
            <LatestReadings data={meteorlogicalData} />

            <DashCharts />

            <AirQuality data={meteorlogicalData.airQualityData} />

        </main>
    )
};

export default DashboardMain;