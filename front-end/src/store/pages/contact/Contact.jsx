import './Contact.css';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
export default function Contact() {
    return (
        <div className="contact-page">
            <p>We're here to help and answer any questions you might have</p>
            <div className="contact-infos">
                <div className="contact-info">
                    <MdEmail className="contact-icon" />
                    <p className="contact-title">Email</p>
                    <p className="contact-detail">support@phonestore.com</p>
                    <p className="contact-detail">sales@phonestore.com</p>
                </div>
                <div className="contact-info">
                    <MdPhone className="contact-icon" />
                    <p className="contact-title">Phone</p>
                    <p className="contact-detail">+1 (555) 123-4567</p>
                    <p className="contact-detail">Mon-Fri: 9am-6pm EST</p>
                </div>
                <div className="contact-info">
                    <MdLocationOn className="contact-icon" />
                    <p className="contact-title">Address</p>
                    <p className="contact-detail">123 Tech Street</p>
                    <p className="contact-detail">San Francisco, CA 94107</p>
                </div>
                <div className="contact-info">
                    <MdAccessTime className="contact-icon" />
                    <p className="contact-title">Hours</p>
                    <p className="contact-detail">Monday-Friday: 9am-6pm</p>
                    <p className="contact-detail">Saturday: 10am-4pm</p>
                </div>
            </div>
            <div className="contact-form">
                <form action="">
                    <h1>Contact Us</h1>
                    <div className="input-form">
                        <label htmlFor="">Email</label>
                        <input type="Email" />
                    </div>
                    <div className="input-form">
                        <label htmlFor="">Full Name</label>
                        <input type="text" />
                    </div>
                    <div className="input-form">
                        <label htmlFor="">Message</label>
                        <textarea name="" id=""></textarea>
                    </div>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}