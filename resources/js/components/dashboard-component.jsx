import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { FaCommentDollar } from "react-icons/fa6";
import { barChartData, lineChartData } from '../assets/chartData';
import Card from './card';

ChartJS.register(
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
);

const ChartComponent = ({ label, chart }) => {
    return (
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-600">
            <h3 className="mb-4 text-lg font-semibold">{label}</h3>
            {chart}
        </div>
    );
};

const DashboardComponent = ({ activeRiders, inactiveRiders }) => {
    return (
        <div className="grow p-8">
            <h2 className="mb-4 text-2xl">Dashboard</h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card icon={<FaUsers />} title="Active Riders" value={activeRiders.length == 0 ? "0" : activeRiders} />
                <Card icon={<FaCommentDollar />} title="Inactive Riders" value={inactiveRiders.length == 0 ? "0" : inactiveRiders} />
                <Card icon={<FaUsers />} title="Users" value="45" />
                <Card icon={<FaCog />} title="Settings" value="11" />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ChartComponent label="Rides This Month" chart={<Line data={lineChartData} />} />
                <ChartComponent label="Riders Per Location" chart={<Bar data={barChartData} />} />
            </div>
        </div>
    );
};

export default DashboardComponent;
