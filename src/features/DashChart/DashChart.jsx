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
        dataKeys,
        classes
    } = props;

    let styles = "grid grid-span-2 pad-1 ";
    classes ? styles += classes + " " : "";

    return (

        <Card classes={styles}>
                   
                   <CardHeader>
                       <CardTitle>{title}</CardTitle>
                   </CardHeader>

                       <ResponsiveContainer>
                           <LineChart
                               margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                              }}
                               data={data[dataId]}
                           >
                           <CartesianGrid strokeDasharray="3 3" />   
                           <XAxis dataKey="time" />
                           <YAxis yAxisId="left" />
                           <YAxis yAxisId="right" orientation="right" />
                           <Tooltip />
                           <Legend />
                           {dataKeys && dataKeys.map(key => {
                            return (
                                <Line yAxisId={key.yAxisId} type="monotone" dataKey={key.name} stroke={key.colour} />
                            )
                           })}
                           </LineChart>
                       </ResponsiveContainer>
                   
            </Card>

    )

};

export default DashChart;