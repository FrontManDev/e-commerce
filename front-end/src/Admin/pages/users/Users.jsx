import { useEffect, useState } from 'react';
import './Users.css';
export default function Users() {
    const [Users, SetUsers] = useState([]);
    const [FirstIndex, SetFirstIndex] = useState(0);
    const [LastIndex, SetLasIndex] = useState(5);
    const [PageNumber, SetPageNumber] = useState(0);
    const [CurrentPage, SetCurrentPage] = useState(0);
    const users = [
        {
            id: 1,
            name: "User 1",
            email: "user1@example.com",
            phone: "+1234567001",
            role: "User",
            status: "Active",
            createdAt: "2025-01-01",
            lastLogin: "2025-06-01"
        },
        {
            id: 2,
            name: "User 2",
            email: "user2@example.com",
            phone: "+1234567002",
            role: "User",
            status: "Active",
            createdAt: "2025-01-02",
            lastLogin: "2025-06-02"
        },
        {
            id: 3,
            name: "User 3",
            email: "user3@example.com",
            phone: "+1234567003",
            role: "User",
            status: "Blocked",
            createdAt: "2025-01-03",
            lastLogin: "2025-06-03"
        },
        {
            id: 4,
            name: "User 4",
            email: "user4@example.com",
            phone: "+1234567004",
            role: "User",
            status: "Active",
            createdAt: "2025-01-04",
            lastLogin: "2025-06-04"
        },
        {
            id: 5,
            name: "User 5",
            email: "user5@example.com",
            phone: "+1234567005",
            role: "Admin",
            status: "Active",
            createdAt: "2025-01-05",
            lastLogin: "2025-06-05"
        },
        {
            id: 6,
            name: "User 6",
            email: "user6@example.com",
            phone: "+1234567006",
            role: "User",
            status: "Active",
            createdAt: "2025-01-06",
            lastLogin: "2025-06-06"
        },
        {
            id: 7,
            name: "User 7",
            email: "user7@example.com",
            phone: "+1234567007",
            role: "User",
            status: "Blocked",
            createdAt: "2025-01-07",
            lastLogin: "2025-06-07"
        },
        {
            id: 8,
            name: "User 8",
            email: "user8@example.com",
            phone: "+1234567008",
            role: "User",
            status: "Active",
            createdAt: "2025-01-08",
            lastLogin: "2025-06-08"
        },
        {
            id: 9,
            name: "User 9",
            email: "user9@example.com",
            phone: "+1234567009",
            role: "User",
            status: "Active",
            createdAt: "2025-01-09",
            lastLogin: "2025-06-09"
        },
        {
            id: 10,
            name: "User 10",
            email: "user10@example.com",
            phone: "+1234567010",
            role: "Admin",
            status: "Active",
            createdAt: "2025-01-10",
            lastLogin: "2025-06-10"
        },
        {
            id: 11,
            name: "User 11",
            email: "user11@example.com",
            phone: "+1234567005",
            role: "Admin",
            status: "Active",
            createdAt: "2025-01-05",
            lastLogin: "2025-06-05"
        },
        {
            id: 12,
            name: "User 12",
            email: "user12@example.com",
            phone: "+1234567006",
            role: "User",
            status: "Active",
            createdAt: "2025-01-06",
            lastLogin: "2025-06-06"
        },
        {
            id: 13,
            name: "User 13",
            email: "user13@example.com",
            phone: "+1234567007",
            role: "User",
            status: "Blocked",
            createdAt: "2025-01-07",
            lastLogin: "2025-06-07"
        },
        {
            id: 14,
            name: "User 14",
            email: "user14@example.com",
            phone: "+1234567008",
            role: "User",
            status: "Active",
            createdAt: "2025-01-08",
            lastLogin: "2025-06-08"
        },
        {
            id: 15,
            name: "User 15",
            email: "user15@example.com",
            phone: "+1234567009",
            role: "User",
            status: "Active",
            createdAt: "2025-01-09",
            lastLogin: "2025-06-09"
        },
        {
            id: 16,
            name: "User 16",
            email: "user16@example.com",
            phone: "+1234567010",
            role: "Admin",
            status: "Active",
            createdAt: "2025-01-10",
            lastLogin: "2025-06-10"
        },
    ];
    useEffect(() => {
        SetFirstIndex(0);
        SetLasIndex(5);
        SetPageNumber(Math.ceil(users.length / 5));
        SetUsers(users);
    }, []);
    return (
        <div className="users-container">
            <div className="user-heading">
                <h1>
                    Users
                </h1>
                <div className="users">
                    <div className="user">
                        <div className="user-info">
                            <h3>Total Users</h3>
                            <p>50</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <h3>Offline</h3>
                            <span>20</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-info">
                            <h3>Oneline</h3>
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.slice(FirstIndex, LastIndex).map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.status}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLogin}</td>
                                <td>
                                    <button>Block</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="button-pages">
                {
                    Array.from({ length: PageNumber }).map((_, index) => (
                        <button key={index}
                            onClick={() => {
                                SetCurrentPage(index);
                                SetFirstIndex((index) * 5);
                                SetLasIndex(((index + 1) * 5))
                            }}
                            className={index === CurrentPage ? "active" : ""}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}