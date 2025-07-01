import './NewCategory.css';
import {NavLink} from 'react-router-dom';
export default function NewCategory(){
    return(
        <div className="newcategory-container">
            <div className="new-category-heading">
                <h1>New Category</h1>
                <button><NavLink to='/admincategory'>Back</NavLink></button>
            </div>
            <div className="add-category">
                <form action="">
                    <div className="input-form">
                        <label htmlFor="">New Category</label>
                        <input type="text" />
                    </div>
                    <div className="input-form">
                        <textarea></textarea>
                    </div>
                    <button>Add Category</button>
                </form>
            </div>
        </div>
    )
}