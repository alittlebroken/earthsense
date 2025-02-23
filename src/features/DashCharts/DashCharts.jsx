
import DashChart from '../DashChart/DashChart';

import './DashCharts.css';

const DashCharts = (props) => {

    const {
        classes
    } = props;

    let styles = "grid grid-cols-4 gap-1 ";
    classes ? styles += classes + " " : "";

    return (
        <section className={styles}>

            <DashChart title="Temperature & Humidity - Last 24 Hours" dataId="historicalData" dataKeys={[{ name: "temp", yAxisId: "left", colour: "#75485E"}, { name: "humidity", yAxisId: "right", colour: "#95BF8F"}]} />
            <DashChart title="Wind Speed - Last 24 Hours" dataId="historicalData" dataKeys={[{ name: "windSpeed", yAxisId: "left", colour: "#16425B"}, { name: "windGusts", yAxisId: "right", colour: "#81C3D7"}]}/>

        </section>
    )
};

export default DashCharts;