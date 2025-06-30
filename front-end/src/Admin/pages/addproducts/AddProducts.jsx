import './AddProducts.css';
import { NavLink } from 'react-router-dom';
export default function AddProducts() {
    return (
        <div className="add-products-container">
            <div className="add-products-heading">
                <h1>Add New Products</h1>
                <button><NavLink to='/adminproducts'>Back</NavLink></button>
            </div>
            <div className="add-products">
                <form action="">
                    <div className="left-right">
                        <div className="left">
                            <div className="input-form">
                                <label htmlFor="">Name </label>
                                <input type="text" />
                            </div>
                            <div className="input-form">
                                <label htmlFor="">Description </label>
                                <textarea></textarea>
                            </div>
                            <div className="input-form">
                                <label htmlFor="">Category</label>
                                <select>
                                    <option value="">
                                        Iphones
                                    </option>
                                    <option value="">
                                        TapLate
                                    </option>
                                    <option value="">
                                        MacBook
                                    </option>
                                    <option value="">
                                        Samsung
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="right">
                            <div className="input-form">
                                <label htmlFor="">Price </label>
                                <input type="number" />
                            </div>
                            <div className="input-form">
                                <label htmlFor="">Quantity </label>
                                <input type="number" />
                            </div>
                            <div className="input-form">
                                <input type="file" id='file' />
                                <label htmlFor="file">Upload Images</label>
                            </div>
                        </div>
                    </div>
                    <button>
                        Add Products
                    </button>
                </form>
            </div>
        </div>
    )
}