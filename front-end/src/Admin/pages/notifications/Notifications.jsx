import './Notifications.css';
import { useEffect, useState } from 'react';

export default function Notifications() {
    const notifications = [
        {
            id: 2,
            email: 'john.doe@example.com',
            Full_Name: 'John Doe',
            message: 'Your account has been successfully created. Welcome to our platform!'
        },
        {
            id: 3,
            email: 'alice.smith@company.org',
            Full_Name: 'Alice Smith',
            message: 'Your subscription will renew in 7 days. Click here to manage your plan.'
        },
        {
            id: 4,
            email: 'support@service.com',
            Full_Name: 'Support Team',
            message: 'We have received your ticket #45678 and will respond within 24 hours.'
        },
        {
            id: 5,
            email: 'notifications@socialapp.io',
            Full_Name: 'SocialApp',
            message: 'You have 3 new connection requests waiting for your approval.'
        },
        {
            id: 6,
            email: 'bob.johnson@mail.net',
            Full_Name: 'Bob Johnson',
            message: 'Reminder: Your meeting starts in 15 minutes. Join via the link in your calendar.'
        },
        {
            id: 7,
            email: 'no-reply@ecommerce.site',
            Full_Name: 'Ecommerce Store',
            message: 'Your order #12345 has been shipped. Expected delivery: June 15.'
        },
        {
            id: 8,
            email: 'security@accounts.com',
            Full_Name: 'Security Alert',
            message: 'New login detected from a device in New York at 10:30 AM.'
        },
        {
            id: 9,
            email: 'newsletter@tech.news',
            Full_Name: 'Tech News Daily',
            message: 'This week in tech: 5 exciting new product launches you should know about.'
        }
    ];

    const [Show, SetShow] = useState([]);
    const [Response, SetResponse] = useState([]);
    const [Notifications, SetNotifications] = useState([]);
    const [FirstIndex, SetFirstIndex] = useState(0);
    const [LastIndex, SetLastIndex] = useState(5);
    const [PageNumber, SetPageNumber] = useState(0);
    const [CurrentPage, SetCurrentPage] = useState(0);

    useEffect(() => {
        SetFirstIndex(0);
        SetLastIndex(5);
        SetPageNumber(Math.ceil(notifications.length / 5));
        SetNotifications(notifications);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! (Simulated)");
    };

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>

            <div className="notifications">
                {
                    Notifications.slice(FirstIndex, LastIndex).map((notification, index) => (
                        <div className="notification" key={notification.id}>
                            <div className="notifications-heading">
                                <h3>{notification.Full_Name}</h3>
                                <h3>{notification.email}</h3>
                                <p className={Show.includes(index) ? 'message active' : 'message'}>
                                    {notification.message}
                                </p>
                            </div>

                            <div className="notifications-actions">
                                <span onClick={() => SetShow((prev) =>
                                    prev.includes(index)
                                        ? prev.filter((i) => i !== index)
                                        : [...prev, index]
                                )}>
                                    {Show.includes(index) ? 'Show Less' : 'Show more'}
                                </span>

                                <span onClick={() => SetResponse((prev) =>
                                    prev.includes(index)
                                        ? prev.filter((i) => i !== index)
                                        : [...prev, index]
                                )}>
                                    Response
                                </span>

                                <span>Delete Notification</span>
                            </div>

                            <div className={Response.includes(index) ? "notifications-form active" : "notifications-form"}>
                                <form onSubmit={handleSubmit}>
                                    <textarea placeholder='Write a message...'></textarea>
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="button-pages">
                {
                    Array.from({ length: PageNumber }).map((_, index) => (
                        <button key={index}
                            onClick={() => {
                                SetCurrentPage(index);
                                SetFirstIndex(index * 5);
                                SetLastIndex((index + 1) * 5);
                                SetShow([]);
                                SetResponse([]);
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
