import React from 'react';
import './Services.css'; // Import the CSS file for styling

const Services = () => {
    return (
        <div className="services-container">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Discover the range of services we offer to enhance your shopping experience.</p>
            </header>
            <main className="services-main">
                <section className="services-section">
                    <div className="service-card">
                        <h2>Personal Styling Consultation</h2>
                        <p>Our expert stylists offer personalized fashion consultations to help you create the perfect look for any occasion. From selecting the right outfits to accessorizing and fitting advice, we’ll ensure you leave looking and feeling your best.</p>
                        <p><strong>Features:</strong> One-on-one styling sessions, wardrobe analysis, personalized outfit planning.</p>
                        <p><a href="/contacts">Book a styling consultation</a></p>
                    </div>
                    <div className="service-card">
                        <h2>Custom Tailoring</h2>
                        <p>We offer custom tailoring services to ensure that every piece you purchase fits perfectly. Our skilled tailors provide alterations and adjustments to meet your unique measurements and preferences.</p>
                        <p><strong>Features:</strong> Alterations for all clothing types, custom fitting for special occasions, quick turnaround time.</p>
                        <p><a href="/contacts">Schedule an appointment</a></p>
                    </div>
                    <div className="service-card">
                        <h2>Exclusive Previews and Private Shopping</h2>
                        <p>Experience our latest collections before anyone else with our exclusive previews and private shopping events. Enjoy a personalized shopping experience with our team dedicated to providing you with a seamless and enjoyable visit.</p>
                        <p><strong>Features:</strong> Early access to new collections, private shopping sessions, dedicated stylist assistance.</p>
                        <p><a href="/contacts">Arrange a private shopping session</a></p>
                    </div>
                    <div className="service-card">
                        <h2>Gift Wrapping and Personalization</h2>
                        <p>Make your gifts extra special with our complimentary gift-wrapping and personalization services. Choose from a range of elegant wrapping options and add a personal touch to your presents.</p>
                        <p><strong>Features:</strong> Elegant gift wrapping, personalization options, available for in-store and online purchases.</p>
                        <p><a href="/contacts">Learn more about gift wrapping</a></p>
                    </div>
                    <div className="service-card">
                        <h2>Fashion Events and Workshops</h2>
                        <p>Join us for exclusive fashion events and workshops designed to inspire and educate. From fashion shows to styling workshops, we offer engaging experiences that connect you with the latest trends and industry insights.</p>
                        <p><strong>Features:</strong> Fashion shows and styling events, workshops on fashion trends and techniques, networking opportunities.</p>
                        <p><a href="/events">Check our events calendar</a></p>
                    </div>
                </section>
            </main>
            <footer className="services-footer">
                <p>For more details, <a href="/contacts">contact us</a> or visit us at The Prime Boutique Shop. We look forward to serving you!</p>
            </footer>
        </div>
    );
};

export default Services;
