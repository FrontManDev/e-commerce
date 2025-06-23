import { useEffect, useState } from 'react';
import './Cart.css';
export default function Cart() {
    const [products, SetProducts] = useState([]);
    const [shippingCost,SetshippingCost] = useState(0);
    const Podcuts = [
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

    function DeleteProduct(id) {
        SetProducts(products.filter((product) => product.id !== id));
    }
    function MinusItem(id) {
        SetProducts(products.map((product) => (
            product.id === id ? { ...product, item: Math.max(1, product.item - 1) } : product
        )));
    }

    function AddItem(id) {
        SetProducts(products.map((product) => (
            product.id === id ? { ...product, item: product.item + 1 } : product
        )));
    }

    useEffect(() => {
        SetProducts(Podcuts);
    }, []);

    const subtotal = products.reduce((sum, product) => sum + (product.price * product.item), 0);
    const totalPrice = subtotal + shippingCost;
    const totalItems = products.reduce((sum, product) => sum + product.item, 0);

    return (
        <div className="Cart-page">
            <div className="cart-product-container">
                <div className="heading-cart">
                    <h1>Shooping Cart</h1>
                    <h2>{products.length} Items</h2>
                </div>
                <div className="cart-products">
                    {
                        products.map((product) => (
                            <div className="cart-product">
                                <div className="product">
                                    <img src={product.src} />
                                </div>
                                <div className="product-item">
                                    <span onClick={() => MinusItem(product.id)}>-</span>
                                    <input type="number" value={product.item} />
                                    <span onClick={() => AddItem(product.id)}>+</span>
                                </div>
                                <div className="product-price">
                                    {product.price * product.item}$
                                </div>
                                <div className="product-action" onClick={() => DeleteProduct(product.id)}>
                                    X
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="cart-product-shipping">
                <h1>Summry</h1>
                <div className="cart-shipping-offers">
                    <form action="">
                        <div className="input-form">
                            <label htmlFor="">Add Cuppon Code</label>
                            <input type="text" />
                        </div>
                        <div className="input-form">
                            <label htmlFor="">10days   0$ shipping cost</label>
                            <input type="radio" name='shipping'   onChange={()=>SetshippingCost(0)} />
                        </div>
                        <div className="input-form">
                            <label htmlFor="">5days  30$ shipping cost</label>
                            <input type="radio" name='shipping'  onChange={()=>SetshippingCost(30)} />
                        </div>
                        <div className="input-form">
                            <label htmlFor="">2days    40$ shipping cost</label>
                            <input type="radio" name='shipping' onChange={()=>SetshippingCost(40)} />
                        </div>
                    </form>
                </div>
                <h2>Total Items   {totalItems}$</h2>
                <h2>Shipping Cost {shippingCost}$</h2>
                <h2>Total Price   {totalPrice}$</h2>
                <button>Checkout</button>
            </div>
        </div>
    )
}