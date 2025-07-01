import './Category.css';
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
export default function Category() {

    const category = [
        {
            Id: 1,
            name: 'phone',
            Items: 30,
            Descriptions: 'in category you will finde the best products'
        },
        {
            Id: 2,
            name: 'Pc',
            Items: 30,
            Descriptions: 'in category you will finde the best products'
        },
        {
            Id: 3,
            name: 'Mac',
            Items: 30,
            Descriptions: 'in category you will finde the best products'
        },
        {
            Id: 4,
            name: 'Samsung',
            Items: 30,
            Descriptions: 'in category you will finde the best products'
        },
        {
            Id: 5,
            name: 'Smart Watch',
            Items: 30,
            Descriptions: 'in category you will finde the best products'
        },
        {
            Id: 6,
            name: 'ear pod',
            Items: 30,
            Descriptions: 'in category you will finde the best products'
        },
    ];

    const [Category, setCategory] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(5);
    const [numberPage, setNumberPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setCategory(category);
        setNumberPage(Math.ceil(category.length / 5));
    }, []);
    return (
        <div className="category-contiaer">
            <div className="category-heading">
                <h1>Category</h1>
                <button><IoAdd /><NavLink to='/NewCategory'>New Category</NavLink></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Items</th>
                        <th>Desciptions</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Category.slice(firstIndex, lastIndex).map((category) => (
                            <tr>
                                <td>{category.Id}</td>
                                <td>{category.name}</td>
                                <td>{category.Items}</td>
                                <td>{category.Descriptions}</td>
                                <td>
                                    <button>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='button-pages'>
                {
                    Array.from({ length: numberPage }).map((_, index) => (
                        <button onClick={() => {
                            setFirstIndex(index * 5);
                            setLastIndex((index + 1) * 5);
                            setCurrentPage(index);
                        }} className={index === currentPage ? "active" : ""}>
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}