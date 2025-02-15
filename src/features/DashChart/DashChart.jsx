import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { Card, CardHeader, CardTitle } from '../../components/Card/Card';

import './DashChart.css';

const DashChart = (props) => {

    const data = useContext(DataContext);

    const {
        title,
        dataId,
        classes
    } = props;

    let styles = "grid grid-span-2 pad-1 ";
    classes ? styles += classes + " " : "";

    return (

        <Card classes={styles}>
                   
                   <CardHeader>
                       <CardTitle>{title}</CardTitle>
                   </CardHeader>

                       <ResponsiveContainer width="90%" height="90%">
                           <LineChart
                               
                               data={data[dataId]}
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

    )

};

export default DashChart;