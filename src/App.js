import './App.css';
import React from "react";
import ContactForm from "./ContactForm";

function App() {
    return (
        <div className="App">
            <header>
                <img src="VenturusL.PNG" alt="Venturus Logo" className="logo" />
                <div className="header-text">
                    <h1>Digital Transformation Services</h1>
                    <p>Empowering businesses through innovative digital solutions</p>
                </div>
            </header>
            <main>
                {/* Image Collage Section */}
                <section id="image-collage">
                    <img src="image1.jpg" alt="Description of the" />
                    <img src="image2.jpg" alt="Description of the image" />
                    <img src="image3.jpg" alt="Description of the image" />
                    <img src="image4.jpg" alt="Description of the image" />
                </section>

                {/* Services Section */}
                <section id="services">
                    <h2>Our Core Services</h2>

                    <div className="service">
                        <h3>Digital Marketing</h3>
                        <p>Boost your online presence and reach your target audience with our tailored digital marketing strategies.</p>
                    </div>

                    <div className="service">
                        <h3>Data Processing & Visualization</h3>
                        <p>Transform your data into actionable insights with our advanced data processing and visualization tools.</p>
                    </div>

                    <div className="service">
                        <h3>Chatbot & Social Media Messenger Automation</h3>
                        <p>Engage your audience 24/7 with automated chatbots and social media messengers tailored to your business needs.</p>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <p>Have a project in mind? Let's make something great together! Fill out the form below, and we'll get back to you as soon as possible.</p>
                    <ContactForm />
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Venturus - Digital Transformation Services</p>
                <div className="social-icons">
                    <a href="https://twitter.com/yourprofile" target="_blank"><img src="twitter-icon.png" alt="Twitter" /></a>
                    <a href="https://www.instagram.com/venturus07/" target="_blank"><img src="instagram-icon.png" alt="Instagram" /></a>
                    <a href="https://discord.com/invite/yourinvitecode" target="_blank"><img src="discord-icon.png" alt="Discord" /></a>
                </div>
            </footer>
        </div>
    );
}

export default App;
