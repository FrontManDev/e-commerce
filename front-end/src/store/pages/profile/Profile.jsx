import { useEffect, useState } from 'react';
import './Profile.css';
export default function Profile() {
    const [ShowInputs, SetShowInputs] = useState([]);
    function AddShowInputs(id) {
        if (ShowInputs.includes(id)) {
            SetShowInputs(ShowInputs.filter((idshos)=>idshos!==id));
        } else {
            SetShowInputs([...ShowInputs, id]);
        }
    }
    return (
        <div className="profile-page">
            <div className="profile-container">
                <form action="">
                    <div className="profile-image">
                        <img src="./background-img/profile-image.jpg" alt="" onClick={() => AddShowInputs(1)}/>
                        <div className="input-update ">
                            <label htmlFor="file" className={ShowInputs.includes(1) ? "active-input file" : "file"}>update Image</label>
                            <input type="file" id="file" />
                        </div>
                    </div>
                    <div className="profile-information">
                        <div className="input-update">
                            <label htmlFor=""  onClick={() => AddShowInputs(2)}>First Name : Hamida</label>
                            <input type="text" className={ShowInputs.includes(2) ? "active-input" : ""} />
                        </div>
                        <div className="input-update">
                            <label htmlFor=""  onClick={() => AddShowInputs(3)}>Last Name : Abdelakrim</label>
                            <input type="text" className={ShowInputs.includes(3) ? "active-input" : ""} />
                        </div>
                        <div className="input-update">
                            <label htmlFor="" onClick={() => AddShowInputs(4)}>passwod : karim1222</label>
                            <input type="password" className={ShowInputs.includes(4) ? "active-input" : ""} />
                        </div>
                    </div>
                    <div className="profile-update-button">
                        <button>Update Information</button>
                    </div>
                </form>
            </div>
        </div>
    )
}