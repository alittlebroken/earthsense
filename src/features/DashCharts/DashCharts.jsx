
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

            <DashChart title="Temperature & Humidity - Last 24 Hours" dataKey="historicalData" />
            <DashChart title="Wind Speed - Last 24 Hours" dataKey="historicalData" />

        </section>
    )
};

export default DashCharts;