import { useEffect, useState } from 'react'
import './Orders.css'

export default function Orders() {
    const [Active, SetActive] = useState(1);
    const [Orders, SetOrders] = useState([]);
    const [FirstOrder, SetFirstOrder] = useState(0);
    const [LastOrder, SetLastOrder] = useState(0);
    const [numbersPage, SetnumbersPage] = useState();

    const orders = [
        { id: "ORD-001", item: 2, createAt: "01 - 06 - 2025", recivetAt: "04 - 06 - 2025", status: "processing" },
        { id: "ORD-002", item: 1, createAt: "02 - 06 - 2025", recivetAt: "06 - 06 - 2025", status: "shipping" },
        { id: "ORD-003", item: 3, createAt: "05 - 06 - 2025", recivetAt: "10 - 06 - 2025", status: "delivered" },
        { id: "ORD-004", item: 4, createAt: "06 - 06 - 2025", recivetAt: "12 - 06 - 2025", status: "cancelled" },
        { id: "ORD-005", item: 2, createAt: "10 - 06 - 2025", recivetAt: "13 - 06 - 2025", status: "processing" },
        { id: "ORD-006", item: 1, createAt: "11 - 06 - 2025", recivetAt: "14 - 06 - 2025", status: "shipping" },
        { id: "ORD-007", item: 6, createAt: "12 - 06 - 2025", recivetAt: "17 - 06 - 2025", status: "delivered" },
        { id: "ORD-008", item: 5, createAt: "15 - 06 - 2025", recivetAt: "19 - 06 - 2025", status: "cancelled" },
        { id: "ORD-009", item: 3, createAt: "18 - 06 - 2025", recivetAt: "22 - 06 - 2025", status: "shipping" },
        { id: "ORD-010", item: 7, createAt: "20 - 06 - 2025", recivetAt: "25 - 06 - 2025", status: "delivered" },
        { id: "ORD-011", item: 2, createAt: "21 - 06 - 2025", recivetAt: "26 - 06 - 2025", status: "processing" },
        { id: "ORD-012", item: 1, createAt: "22 - 06 - 2025", recivetAt: "27 - 06 - 2025", status: "shipping" },
        { id: "ORD-013", item: 3, createAt: "23 - 06 - 2025", recivetAt: "28 - 06 - 2025", status: "delivered" },
        { id: "ORD-014", item: 4, createAt: "24 - 06 - 2025", recivetAt: "29 - 06 - 2025", status: "cancelled" },
        { id: "ORD-015", item: 2, createAt: "25 - 06 - 2025", recivetAt: "30 - 06 - 2025", status: "processing" },
        { id: "ORD-016", item: 5, createAt: "26 - 06 - 2025", recivetAt: "01 - 07 - 2025", status: "shipping" },
        { id: "ORD-017", item: 6, createAt: "27 - 06 - 2025", recivetAt: "02 - 07 - 2025", status: "delivered" },
        { id: "ORD-018", item: 7, createAt: "28 - 06 - 2025", recivetAt: "03 - 07 - 2025", status: "cancelled" },
        { id: "ORD-019", item: 1, createAt: "29 - 06 - 2025", recivetAt: "04 - 07 - 2025", status: "shipping" },
        { id: "ORD-020", item: 3, createAt: "30 - 06 - 2025", recivetAt: "05 - 07 - 2025", status: "delivered" },
        { id: "ORD-021", item: 4, createAt: "01 - 07 - 2025", recivetAt: "06 - 07 - 2025", status: "processing" },
        { id: "ORD-022", item: 2, createAt: "02 - 07 - 2025", recivetAt: "07 - 07 - 2025", status: "shipping" },
        { id: "ORD-023", item: 6, createAt: "03 - 07 - 2025", recivetAt: "08 - 07 - 2025", status: "delivered" },
        { id: "ORD-024", item: 5, createAt: "04 - 07 - 2025", recivetAt: "09 - 07 - 2025", status: "cancelled" },
        { id: "ORD-025", item: 2, createAt: "05 - 07 - 2025", recivetAt: "10 - 07 - 2025", status: "processing" },
        { id: "ORD-026", item: 3, createAt: "06 - 07 - 2025", recivetAt: "11 - 07 - 2025", status: "shipping" },
        { id: "ORD-027", item: 1, createAt: "07 - 07 - 2025", recivetAt: "12 - 07 - 2025", status: "delivered" },
        { id: "ORD-028", item: 4, createAt: "08 - 07 - 2025", recivetAt: "13 - 07 - 2025", status: "cancelled" },
        { id: "ORD-029", item: 5, createAt: "09 - 07 - 2025", recivetAt: "14 - 07 - 2025", status: "processing" },
        { id: "ORD-030", item: 2, createAt: "10 - 07 - 2025", recivetAt: "15 - 07 - 2025", status: "shipping" },
        { id: "ORD-031", item: 6, createAt: "11 - 07 - 2025", recivetAt: "16 - 07 - 2025", status: "delivered" },
        { id: "ORD-032", item: 7, createAt: "12 - 07 - 2025", recivetAt: "17 - 07 - 2025", status: "cancelled" },
        { id: "ORD-033", item: 1, createAt: "13 - 07 - 2025", recivetAt: "18 - 07 - 2025", status: "processing" },
        { id: "ORD-034", item: 3, createAt: "14 - 07 - 2025", recivetAt: "19 - 07 - 2025", status: "shipping" },
        { id: "ORD-035", item: 4, createAt: "15 - 07 - 2025", recivetAt: "20 - 07 - 2025", status: "delivered" },
        { id: "ORD-036", item: 2, createAt: "16 - 07 - 2025", recivetAt: "21 - 07 - 2025", status: "cancelled" },
        { id: "ORD-037", item: 3, createAt: "17 - 07 - 2025", recivetAt: "22 - 07 - 2025", status: "processing" },
        { id: "ORD-038", item: 6, createAt: "18 - 07 - 2025", recivetAt: "23 - 07 - 2025", status: "shipping" },
        { id: "ORD-039", item: 5, createAt: "19 - 07 - 2025", recivetAt: "24 - 07 - 2025", status: "delivered" },
        { id: "ORD-040", item: 1, createAt: "20 - 07 - 2025", recivetAt: "25 - 07 - 2025", status: "cancelled" },
        { id: "ORD-041", item: 4, createAt: "21 - 07 - 2025", recivetAt: "26 - 07 - 2025", status: "processing" },
        { id: "ORD-042", item: 2, createAt: "22 - 07 - 2025", recivetAt: "27 - 07 - 2025", status: "shipping" },
        { id: "ORD-043", item: 7, createAt: "23 - 07 - 2025", recivetAt: "28 - 07 - 2025", status: "delivered" },
        { id: "ORD-044", item: 3, createAt: "24 - 07 - 2025", recivetAt: "29 - 07 - 2025", status: "cancelled" },
        { id: "ORD-045", item: 1, createAt: "25 - 07 - 2025", recivetAt: "30 - 07 - 2025", status: "processing" },
        { id: "ORD-046", item: 5, createAt: "26 - 07 - 2025", recivetAt: "31 - 07 - 2025", status: "shipping" },
        { id: "ORD-047", item: 2, createAt: "27 - 07 - 2025", recivetAt: "01 - 08 - 2025", status: "delivered" },
        { id: "ORD-048", item: 6, createAt: "28 - 07 - 2025", recivetAt: "02 - 08 - 2025", status: "cancelled" },
        { id: "ORD-049", item: 4, createAt: "29 - 07 - 2025", recivetAt: "03 - 08 - 2025", status: "processing" },
        { id: "ORD-050", item: 3, createAt: "30 - 07 - 2025", recivetAt: "04 - 08 - 2025", status: "shipping" }
    ];

    const filter = (stat) => {
        const filtered = orders.filter(order => order.status === stat);
        SetOrders(filtered);
        SetFirstOrder(0);
        SetLastOrder(5);
        SetnumbersPage(Math.ceil(filtered.length / 5));
    }

    const CanceledOrde = (id) => {
        SetOrders(Orders.map((order) => (
            order.id === id ? { ...order, status: 'cancelled' } : order
        )));
    }
    useEffect(() => {
        SetOrders(orders);
        SetFirstOrder(0);
        SetLastOrder(5);
        SetnumbersPage(Math.ceil(orders.length / 5));
    }, []);
    return (
        <div className="orders-page">
            <div className="orders-heading">
                <h1>My Orders</h1>
                <div className="type-orders">
                    <button className={Active === 1 ? "active" : ""} onClick={() => {
                        SetActive(1);
                        SetOrders(orders);
                        SetFirstOrder(0);
                        SetLastOrder(5);
                        SetnumbersPage(Math.ceil(orders.length / 5));
                    }}>
                        All
                    </button>
                    <button className={Active === 2 ? "active" : ""} onClick={() => { SetActive(2); filter('processing') }}>
                        Processing
                    </button>
                    <button className={Active === 3 ? "active" : ""} onClick={() => { SetActive(3); filter('shipping') }}>
                        Shipping
                    </button>
                    <button className={Active === 4 ? "active" : ""} onClick={() => { SetActive(4); filter('delivered') }}>
                        Delivered
                    </button>
                    <button className={Active === 5 ? "active" : ""} onClick={() => { SetActive(5); filter('cancelled') }}>
                        Cancelled
                    </button>
                </div>
            </div>
            <div className="orders-list">
                <table>
                    <thead>
                        <tr>
                            <th>Order #Id</th>
                            <th>Order Items</th>
                            <th>Order Date Created</th>
                            <th>Order Date Delevered</th>
                            <th>Orders Details</th>
                            <th>Order Status</th>
                            <th>Order Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Orders.slice(FirstOrder, LastOrder).map((order) => (
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.item}</td>
                                <td>{order.createAt}</td>
                                <td>{order.recivetAt}</td>
                                <td>
                                    <button>View Details</button>
                                </td>
                                <td className="processing">{order.status}</td>
                                <td>
                                    <button onClick={() => CanceledOrde(order.id)}>Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="7">
                                <div className="buttons">
                                    {
                                        Orders.slice(0, numbersPage).map((order, index) => (
                                            <button className={index === (FirstOrder / 5) ? "active" : ""} onClick={() => { SetFirstOrder(index * 5); SetLastOrder((index * 5) + 5) }}>
                                                {index + 1}
                                            </button>
                                        ))
                                    }
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}