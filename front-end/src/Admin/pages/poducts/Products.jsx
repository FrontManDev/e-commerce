import { useEffect, useState } from 'react';
import './Products.css';
import { IoAdd } from "react-icons/io5";

export default function Products() {
    const allProducts = [
        {
            id: 1,
            name: "iPhone 14 Pro",
            category: "Phone",
            price: 1099,
            image: "./background-img/ipad.jpg",
            description: 50
        },
        {
            id: 2,
            name: "Samsung Galaxy S22",
            category: "Phone",
            price: 899,
            image: "./background-img/ipad.jpg",
            description: 50
        },
        {
            id: 3,
            name: "Dell XPS 13",
            category: "Laptop",
            price: 1199,
            image: "./background-img/ipad.jpg",
            description: 30
        },
        {
            id: 4,
            name: "MacBook Pro 16",
            category: "MacBooks",
            price: 2499,
            image: "./background-img/ipad.jpg",
            description: 50
        },
        {
            id: 5,
            name: "Apple Watch Series 8",
            category: "Smart Watch",
            price: 399,
            image: "./background-img/ipad.jpg",
            description: 600
        },
        {
            id: 6,
            name: "Google Pixel 7",
            category: "Phone",
            price: 699,
            image: "./background-img/ipad.jpg",
            description: 500
        },
        {
            id: 7,
            name: "Lenovo Legion 5",
            category: "Laptop",
            price: 1099,
            image: "./background-img/ipad.jpg",
            description: 60
        },
        {
            id: 8,
            name: "MacBook Air M2",
            category: "MacBooks",
            price: 999,
            image: "./background-img/ipad.jpg",
            description: 30
        },
        {
            id: 9,
            name: "Samsung Galaxy Watch 5",
            category: "Smart Watch",
            price: 299,
            image: "./background-img/ipad.jpg",
            description: 100
        },
        {
            id: 10,
            name: "Asus ROG Phone 6",
            category: "Phone",
            price: 999,
            image: "./background-img/ipad.jpg",
            description: 50
        },
    ];

    const [products, setProducts] = useState([]);
    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(5);
    const [numberPage, setNumberPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setProducts(allProducts);
        setNumberPage(Math.ceil(allProducts.length / 5));
    }, []);

    return (
        <div className='products-container'>
            <div className="products-heading">
                <h1>Products</h1>
                <button><IoAdd />Add New</button>
            </div>
            <form>
                <select>
                    <option value="">Phone</option>
                    <option value="">Smart Watch</option>
                    <option value="">MacBooks</option>
                    <option value="">Laptop</option>
                </select>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.slice(firstIndex, lastIndex).map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td><img src={product.image} alt={product.name} width="50" /></td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>${product.price}</td>
                                <td>{product.description}</td>
                                <td><button>update</button><button>remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='button-pages'>
                {
                    Array.from({length:numberPage}).map((_,index)=>(
                        <button onClick={()=>{
                            setFirstIndex(index*5);
                            setLastIndex((index+1)*5);
                            setCurrentPage(index);
                        }} className={index===currentPage ? "active" : ""}>
                            {index+1}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}
