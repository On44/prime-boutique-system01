// src/pages/AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
    return (
        <div className="aboutus-container">
            <header className="aboutus-header">
                <h1>About Us</h1>
                <p>We started with a simple idea: to provide high-quality fashion and excellent customer service. 
                Our journey began with a small boutique and has grown into a well-known fashion destination.</p>
            </header>
            <main className="aboutus-main">
                <section className="aboutus-intro">
                    <h2>Our Mission</h2>
                    <p>
                    At The Prime Boutique System, our mission is to empower boutique owners by providing them with an all-in-one platform that streamlines their day-to-day operations. We believe in transforming the way boutiques operate, enabling them to focus more on delivering exceptional customer experiences rather than managing backend processes.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                    We envision a future where boutique owners can run their businesses with ease, leveraging technology to maximize efficiency and profitability. Our continuous innovation is driven by feedback from our users, ensuring that we evolve with your needs.
                    </p>
                    <h2>Get in Touch</h2>
                    <p>
                    We’re here to support you every step of the way. Whether you’re looking to streamline your operations, improve customer satisfaction, or simply learn more about what The Prime Boutique System can do for you, don’t hesitate to reach out.


                    </p>
                </section>
                <section className="aboutus-team">
                    <h2>Meet the Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="/images/Jack.jpeg" alt="Team Member 1" />
                            <h3>Jack Oluoch</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="team-member">
                            <img src="/images/Jerome.jpeg" alt="Team Member 2" />
                            <h3>Jerome Ngeno</h3>
                            <p>Creative Director</p>
                        </div>
                        <div className="team-member">
                            <img src="/images/leah.jpeg" alt="Team Member 3" />
                            <h3>Leah Johnson</h3>
                            <p>Marketing Specialist</p>
                        </div>
                    </div>
                </section>
                <section className="aboutus-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li>Quality: We believe in delivering the best products to our customers.</li>
                        <li>Customer Service: Our customers are at the heart of everything we do.</li>
                        <li>Innovation: We stay ahead of trends to offer the latest in fashion.</li>
                    </ul>
                </section>
            </main>
            <footer className="aboutus-footer">
                <p>© {new Date().getFullYear()} The Prime Boutique. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
