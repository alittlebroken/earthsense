
import { Card, CardBody, CardHeader, CardTitle } from '../../components/Card/Card';
import { TableData, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableColumn } from '../../components/Table/Table';


import './AirQuality.css';

const AirQuality = (props) => {

    const {
        data,
        classes
    } = props;

    let styles = "grid grid-cols-4 gap-1 ";
    classes ? styles += classes + " " : "";

    return (
        <section className={styles}>
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
                                {data.map((air) => {
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
    )

};

export default AirQuality;