import { useEffect, useState } from 'react';
import './Orders.css';
export default function Orders() {
    const [ActiveButtons, SetActiveButtons] = useState(1);
    const [FirstOrder, SetFirstOrder] = useState(0);
    const [LastOrder, SetLastOrder] = useState(5);
    const [CurrentPage, SetCurrentPage] = useState(0);
    const [NumberPage, SetNumberPage] = useState();
    const [Orders, SetOrders] = useState([]);
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
    function FilterByStatus(status) {
        if (status === '') {
            SetOrders(orders);
            SetFirstOrder(0);
            SetLastOrder(5);
            SetNumberPage(Math.ceil(orders.length / 5));
            SetCurrentPage(0);
        } else {
            let NewOrder = orders.filter((order) => order.status === status)
            SetOrders(NewOrder);
            SetFirstOrder(0);
            SetLastOrder(5);
            SetNumberPage(Math.ceil(NewOrder.length / 5));
            SetCurrentPage(0);
        }
    }
    useEffect(() => {
        SetOrders(orders);
        SetFirstOrder(0);
        SetLastOrder(5);
        SetNumberPage(Math.ceil(orders.length / 5));
        SetCurrentPage(0);
    }, []);

    return (
        <div className="orders-container">
            <div className="orders-heading">
                <h1>Orders</h1>
                <div className="buttons">
                    <button className={ActiveButtons === 1 ? "active" : ""} onClick={() => { SetActiveButtons(1); FilterByStatus('') }}>
                        All
                    </button>
                    <button className={ActiveButtons === 2 ? "active" : ""} onClick={() => { SetActiveButtons(2); FilterByStatus('processing') }}>
                        Processing
                    </button>
                    <button className={ActiveButtons === 3 ? "active" : ""} onClick={() => { SetActiveButtons(3); FilterByStatus('shipping') }}>
                        Shipping
                    </button>
                    <button className={ActiveButtons === 4 ? "active" : ""} onClick={() => { SetActiveButtons(4); FilterByStatus('delivered') }}>
                        Delivered
                    </button>
                    <button className={ActiveButtons === 5 ? "active" : ""} onClick={() => { SetActiveButtons(5); FilterByStatus('cancelled') }}>
                        Cancelled
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Order #Id</th>
                        <th>Order Items</th>
                        <th>Order Date Created</th>
                        <th>Order Date Delevered</th>
                        <th>Orders Details</th>
                        <th>Order Status</th>
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
                            <td><span className={order.status}>{order.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='pagination'>
                {
                    Array.from({ length: NumberPage }).map((_, index) => (
                        <button key={index} onClick={() => {
                            SetFirstOrder(index * 5);
                            SetLastOrder((index + 1) * 5);
                            SetCurrentPage(index);
                        }} className={index===CurrentPage ? "active" : ""}>
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}