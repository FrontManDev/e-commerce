import './Registration.css';
import { useEffect, useState } from 'react';

export default function Registration() {
    const [IsLogin, SetIsLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [Strong, SetStrong] = useState(false);
    const PasswordExpresionReguliare = /^[a-zA-Z0-9]{8,}$/;

    function PasswordStrong() {
        if (PasswordExpresionReguliare.test(password)) {
            SetStrong(true);
        } else {
            SetStrong(false);
        }
    }
    useEffect(() => {
        PasswordStrong();
    }, [password]);
    return (
        <div className='Registration-page'>
            {
                IsLogin ? <>
                    <div className="registration-form">
                        <form action="">
                            <h2>Login</h2>
                            <div className="input-form">
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div className="input-form">
                                <label htmlFor="">Password</label>
                                <input type="password" />
                            </div>
                            <div className="login-buttons">
                                <button>Login</button>
                                <p>
                                    You Don't Have account?,
                                    <span onClick={() => SetIsLogin(!IsLogin)}>Create One</span>
                                </p>
                            </div>
                        </form>
                    </div>
                </> :
                    <>
                        <div className="SigneIn-form">
                            <form action="">
                                <h2>Signe In</h2>
                                <div className="left-right-form">
                                    <div className="input-form">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-form">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="left-right-form">
                                    <div className="input-form">
                                        <label htmlFor="">Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className="input-form file-input">
                                        <input type="file" id='file' />
                                        <label htmlFor="file" className='file'>Profile Picture</label>
                                    </div>
                                </div>
                                <div className="left-right-form">
                                    <div className="input-form">
                                        <label htmlFor="" className={Strong ? "label-strong" : "label-wake"}>Create Password</label>
                                        <input type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={Strong ? "input-strong" : "input-wake"} />
                                        {
                                            Strong ?
                                                <p className='strong'>
                                                    password is strong
                                                </p>
                                                :
                                                <p className='wake'>
                                                    password is wake
                                                </p>
                                        }
                                    </div>
                                    <div className="input-form">
                                        <label htmlFor="">Confrime Password</label>
                                        <input type="Password" />
                                    </div>
                                </div>
                                <div className="sigin-buttons">
                                    <button>Login</button>
                                    <p>
                                        You Have an account?,
                                        <span onClick={() => SetIsLogin(!IsLogin)}>Login</span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </>
            }
        </div>
    )
}