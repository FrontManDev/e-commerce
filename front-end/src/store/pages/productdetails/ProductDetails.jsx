import { useEffect, useState } from "react"
import { IoEyeSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import "./ProductDetails.css";
export default function ProductDetails() {
    const [Images, SetImages] = useState([]);
    const [MainImage, SetMainImage] = useState();
    const [Number, SetNumber] = useState(1);
    const Imgs = [
        {
            id: 1,
            url: "./background-img/ear-pod.jpg",
            title: "Wireless Earbuds",
            price: 500
        },
        {
            id: 2,
            url: "./background-img/ipad.jpg",
            title: "Wireless Earbuds",
            price: 500
        },
        {
            id: 3,
            url: "./background-img/iphone.jpg",
            title: "Wireless Earbuds",
            price: 500
        },
        {
            id: 4,
            url: "./background-img/smartwatch-min.jpg",
            title: "Wireless Earbuds",
            price: 500
        },
    ]
    useEffect(() => {
        SetImages(Imgs);
        SetMainImage(Imgs[0]);
    }, []);
    return (
        <div className="product-page">
            <div className="product-details">
                <div className="details-images">
                    <div className="image-principale">
                        <img src={MainImage?.url} alt="" />
                    </div>
                    <div className="imgs-small">
                        {
                            Images.map((image, index) => (
                                <img src={image.url} onClick={() => SetMainImage(image)} />
                            ))
                        }
                    </div>
                </div>
                <div className="details-info">
                    <h1>IPhone 16</h1>
                    <h2>100$</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Ad, repudiandae.
                    </p>
                    <div className="quantity">
                        <span className="minus" onClick={() => SetNumber(Number === 1 ? 1 : Number - 1)}>-</span>
                        <input type="number" value={Number} />
                        <span className="plus" onClick={() => SetNumber(Number + 1)}>+</span>
                    </div>
                    <button>Add To Cart <FaCartPlus /></button>
                </div>
            </div>
            <div className="related-products">
                <h2 className="related-products__title">
                    Related Products
                </h2>
                <div className="related-products__grid">
                    {
                        Images.map((product) => (
                            <article className="product-card" key={product.id}>
                                <div className="product-card__image-container">
                                    <img
                                        src={product.url}
                                        className="product-card__image"
                                    />
                                    <div className="product-card__action-buttons">
                                        <button
                                            className="product-card__action-button product-card__action-button--cart"
                                            aria-label="Add to cart"
                                        >
                                            <FaCartPlus />
                                        </button>
                                        <button
                                            className="product-card__action-button product-card__action-button--view"
                                            aria-label="View details"
                                        >
                                            <IoEyeSharp />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-card__info">
                                    <h3 className="product-card__title">{product.title}</h3>
                                    <p className="product-card__price">${product.price}</p>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}