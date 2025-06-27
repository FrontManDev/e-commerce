import './Dashboard.css';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {Visitures,ActiveUsers,MonthSales,CategorySales,Orders} from '../chart/Chart'
export default function Dashboard() {

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="chartJs">
                <div className="number-of-visitore">
                    <Line data={Visitures} />
                </div>
                <div className="status-of-users">
                    <Doughnut data={ActiveUsers} />
                </div>
                <div className="salse">
                    <Bar data={MonthSales} />
                </div>
                <div className="salse-category">
                    <Bar data={CategorySales} />
                </div>
                <div className="orders">
                     <Bar data={Orders} />
                </div>
            </div>
        </div>
    )
}