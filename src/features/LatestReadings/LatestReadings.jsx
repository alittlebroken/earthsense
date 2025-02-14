import { Card, CardBody, CardHeader, CardTitle } from '../../components/Card/Card';

import './LatestReadings.css';

const LatestReadings = (props) => {

    const {
        data,
        classes
    } = props;

    let styles = "grid grid-cols-4 gap-1 ";
    classes ? styles += classes + " " : "";

    return (

        <section className={styles}>

            <Card classes="pad-1">
                    <CardHeader>
                        <CardTitle>Temperature</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{data.temp}°C</span>
                    </CardBody>
                </Card>

                <Card primary classes="pad-1">
                    <CardHeader>
                        <CardTitle>Humidity</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{data.humidity}%</span>
                    </CardBody>
                </Card>

                <Card secondary classes="pad-1">
                    <CardHeader>
                        <CardTitle>Wind Speed</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{data.windSpeed} km/h</span>
                    </CardBody>
                </Card>

                <Card tertiary classes="pad-1">
                    <CardHeader>
                        <CardTitle>Wind Dir</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <span className="text-lg text-700">{data.windDir}</span>
                </CardBody>
            </Card>

        </section>

    )
}

export default LatestReadings;