import './Dashboard.css';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { TbUsersGroup } from "react-icons/tb";
import { FaBoxes, FaChartLine } from "react-icons/fa";
import { MdCategory, } from "react-icons/md";
import {
    Visitures,
    visituresOptions,
    MonthSales,
    monthSalesOptions,
    CategorySales,
    categorySalesOptions,
    Orders,
    ordersOptions
} from '../chart/Chart';
export default function Dashboard() {

    return (
        <div className="dashboard-container">
            <div className="dashboard-heading">
                <h2>Dashboard</h2>
                <div className="dashboard-infromations">
                    {/* Total Users */}
                    <div className="dashboard-information">
                        <div className="informations-title">
                            <h2>1054</h2>
                            <TbUsersGroup className='icon' />
                        </div>
                        <div className="informations-body">
                            <h3>Total Users</h3>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="dashboard-information">
                        <div className="informations-title">
                            <h2>7</h2>
                            <MdCategory className='icon' />
                        </div>
                        <div className="informations-body">
                            <h3>Categories</h3>
                        </div>
                    </div>

                    {/* Total Products */}
                    <div className="dashboard-information">
                        <div className="informations-title">
                            <h2>54</h2>
                            <FaBoxes className='icon' />
                        </div>
                        <div className="informations-body">
                            <h3>Total Products</h3>
                        </div>
                    </div>

                    {/* Conversation Rate */}
                    <div className="dashboard-information">
                        <div className="informations-title">
                            <h2>85%</h2>
                            <FaChartLine className='icon' />
                        </div>
                        <div className="informations-body">
                            <h3>Conversion Rate</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-body">
                <div className="line-visitures">
                    <Line data={Visitures} options={visituresOptions} />
                </div>
                <div className="line-visitures">
                    <Line data={Orders} options={ordersOptions} />
                </div>
                <div className="line-visitures">
                    <Bar data={MonthSales} options={monthSalesOptions} />
                </div>
                <div className="line-visitures">
                    <Bar data={CategorySales} options={categorySalesOptions} />
                </div>

            </div>
        </div>
    )
}