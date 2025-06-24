import { useEffect, useState } from 'react';
import './Cart.css';
export default function Cart() {
    const [products, setProducts] = useState([]);
    const [shippingCost, setShippingCost] = useState(0);
    const productList = [
        {
            id: 1,
            src: "./background-img/ear-pod.jpg",
            price: 500,
            item: 2
        },
        {
            id: 3,
            src: "./background-img/ipad.jpg",
            price: 400,
            item: 5,
        },
        {
            id: 4,
            src: "./background-img/iphone.jpg",
            price: 800,
            item: 6
        },
        {
            id: 5,
            src: "./background-img/smartwatch-min.jpg",
            price: 300,
            item: 1
        },
    ];

    function deleteProduct(id) {
        setProducts(products.filter((product) => product.id !== id));
    }
    function decreaseItem(id) {
        setProducts(products.map((product) => (
            product.id === id ? { ...product, item: Math.max(1, product.item - 1) } : product
        )));
    }

    function increaseItem(id) {
        setProducts(products.map((product) => (
            product.id === id ? { ...product, item: product.item + 1 } : product
        )));
    }

    useEffect(() => {
        setProducts(productList);
    }, []);

    const subtotal = products.reduce((sum, product) => sum + (product.price * product.item), 0);
    const totalPrice = subtotal + shippingCost;
    const totalItems = products.reduce((sum, product) => sum + product.item, 0);

    return (
        <div className="cartContainer">
            <div className="productsSection">
                <div className="cartHeader">
                    <h1>Shopping Cart</h1>
                    <h2>{products.length} Items</h2>
                </div>
                <div className="productsList">
                    {
                        products.map((product) => (
                            <div className="productCard" key={product.id}>
                                <div className="productImage">
                                    <img src={product.src} alt={`Product ${product.id}`} />
                                </div>
                                <div className="quantityControls">
                                    <span onClick={() => decreaseItem(product.id)}>-</span>
                                    <input type="number" value={product.item} readOnly />
                                    <span onClick={() => increaseItem(product.id)}>+</span>
                                </div>
                                <div className="productTotalPrice">
                                    {product.price * product.item}$
                                </div>
                                <div className="removeProduct" onClick={() => deleteProduct(product.id)}>
                                    X
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="summarySection">
                <h1>Summary</h1>
                <div className="shippingOptions">
                    <form>
                        <div className="formGroup">
                            <label>Add Coupon Code</label>
                            <input type="text" />
                        </div>
                        <div className="formGroup">
                            <label>10 days - 0$ shipping cost</label>
                            <input type="radio" name='shipping' onChange={() => setShippingCost(0)} />
                        </div>
                        <div className="formGroup">
                            <label>5 days - 30$ shipping cost</label>
                            <input type="radio" name='shipping' onChange={() => setShippingCost(30)} />
                        </div>
                        <div className="formGroup">
                            <label>2 days - 40$ shipping cost</label>
                            <input type="radio" name='shipping' onChange={() => setShippingCost(40)} />
                        </div>
                    </form>
                </div>
                <h2>Total Items <span>{totalItems}$</span></h2>
                <h2>Shipping Cost <span>{shippingCost}$</span></h2>
                <h2>Total Price <span>{totalPrice}$</span></h2>
                <button className="checkoutButton">Checkout</button>
            </div>
        </div>
    )
}