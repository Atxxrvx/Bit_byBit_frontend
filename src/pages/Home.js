import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
import '../styles/App.css';
import '../styles/Home.css';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="home-container">
            <header className="hero">
                <div className="hero-overlay">
                    <h1 className="hero-title">Connect with Your Health</h1>
                    <p className="hero-subtitle">Your path to a healthier lifestyle starts here</p>
                    {!user && <Link to="/login" className="login-btn">Login</Link>}
                </div>
            </header>

            <section className="services">
                <div className="service-item">
                    <h2>Nutrition Analyzer</h2>
                    <p>Nutrients in the food that you have had.</p>
                    <Link to="/nutrisearch" className="service-link">Learn More</Link>
                </div>
                <div className="service-item">
                    <h2>Nearby Hospitals</h2>
                    <p>Discover Nearby Hospitals.</p>
                    <Link to="/genquery" className="service-link">Explore</Link>
                </div>
                <div className="service-item">
                    <h2>Appointment Booking</h2>
                    <p>Book online appointment with a Specialist Doctor</p>
                    <Link to="/bookappoint" className="service-link">Book Now</Link>
                </div>
                <div className="service-item">
                    <h2>Blogs</h2>
                    <p>Read blogs by renowned doctors and experts on health</p>
                    <Link to="/blogs" className="service-link">Read Now</Link>
                </div>
                <div className="service-item">
                    <h2>Symptom Checker</h2>
                    <p>Diagnose yourself just by filling a simple form</p>
                    <Link to="/symptom" className="service-link">Check Symptoms</Link>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>Looking Forward to see Healthier India....</p>
                    <Link to="/aboutus">Read More...</Link>
                </div>
                <div className="footer-services">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/bookappoint">Appointment Booking</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/genquery">Nearest Hospitals</Link></li>
                        <li><Link to="/nutrisearch">Nutrition Content</Link></li>
                        <li><Link to="/symptom">Symptom Checker</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Get in touch with us for any inquiries or feedback.</p>
                    <Link to="/">About Us</Link>
                </div>
                
            </footer>
        </div>
    );
}

export default Home;
