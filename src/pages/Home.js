import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <center>
                        <h1>Welcome to The Prime Boutique</h1>
                        <p>With meticulous tailoring and premium fabrics, the collection offers sophisticated suits, versatile casual wear, and modern accessories, designed for the confident, discerning wearer.</p>
                        {/* Correct usage of Link */}
                        <Link to="/products">
                            <button className="cta-button">Shop Now</button>
                        </Link>
                    </center>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2>Our Featured Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="/images/car.jpg" alt="Airmax" />
                        <h3>Airmax</h3>
                        <p>Discover our collections of Airmax. Shop Airmax Camel, Airmax Black, Airmax Green, and Airmax Orange at The Prime Boutique Shop</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/jack shoe.jpg" alt="Elegant shoe" />
                        <h3>Elegant Shoe</h3>
                        <p>The new collection of Elegant Shoes from Germany focuses entirely on high-quality fabrics and relaxed luxury.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/HikeUp shoes.jpg" alt="Elegant shoe" />
                        <h3>HikeUp Shoe</h3>
                        <p>Many HikeUp shoes are equipped with advanced cushioning technologies such as the IGNITE foam, which provide comfort and support.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Puma shoes.jpg" alt="Puma Shoes" />
                        <h3>Puma Shoes</h3>
                        <p>They come in various styles, including running shoes, sneakers, and casual shoes, each with distinct design elements and total comfort.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Panam Air shoe.jpg" alt="Puma Shoes" />
                        <h3>Panam Shoe</h3>
                        <p>Some models incorporate sustainable materials, reflecting Panam’s commitment to environmental responsibility.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Polabeer Shoes.jpg" alt="Puma Shoes" />
                        <h3>Polabeer Shoe</h3>
                        <p>Known for its retro-inspired design and chunky silhouette, this model offers comfort and style.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Brown Coat side.jpg" alt="Puma Shoes" />
                        <h3>Trench Coat</h3>
                        <p>Features a double-breasted front with a row of buttons on each side, often with a belt for a tailored fit.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Backpack bag.jpg" alt="Puma Shoes" />
                        <h3>Backpack bag</h3>
                        <p>Features several external pockets for smaller items like keys, phones, or water bottles.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Feng Boot shoes.jpg" alt="Puma Shoes" />
                        <h3>Feng Boot</h3>
                        <p>Designed for durability and safety, often with reinforced toes, slip-resistant soles, and protective features.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/TJK shoe.jpg" alt="Puma Shoes" />
                        <h3>TJK Boot</h3>
                        <p>TJK Boot design often includes subtle detailing, like contrast stitching or embossed logos, adding a touch of sophistication to the overall look.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Curvysleeved.jpeg" alt="Curvysleeved" />
                        <h3>Curvy sleeved</h3>
                        <p> Sleeves that flare out at the bottom, creating a gentle curve from the shoulder to the wrist.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Denim.jpeg" alt="Denim" />
                        <h3>Denim</h3>
                        <p>It's resistant to wear and tear, making it a popular choice for workwear, jeans, jackets, and other rugged clothing items.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Jeans.jpeg" alt="Jeans" />
                        <h3>Jeans</h3>
                        <p>A classic fit with a straight cut from the waiste to the ankle. They offer a timeless and versatile look.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Khaki.jpeg" alt="Khaki" />
                        <h3>Khaki</h3>
                        <p>Khaki's blend of practicality, durability, and timeless appeal has made it a lasting presence </p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Kitenge.jpeg" alt="Kitenge" />
                        <h3>Kitenge</h3>
                        <p> Include geometric shapes, floral patterns, abstract art, and symbolic imagery that carry cultural significance.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Polo.jpeg" alt="Polo" />
                        <h3>Polo</h3>
                        <p>A knitted fabric with a slightly textured surface that is breathable and durable.</p>
                        <Link to="/products">
                        <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Summerdress.jpeg" alt="Summerdress"/>
                        <h3>Summerdress</h3>
                        <p>Typically made from breathable and lightweight fabrics like cotton, linen, chiffon, rayon, or lightweight synthetics.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Truck Strip.jpeg" alt="Truck Strip" />
                        <h3>Truck Strip</h3>
                        <p>Have a relaxed and loose fit to allow for ease of movement and layering over other clothing.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Twist Trouser.jpg" alt="Denim" />
                        <h3>Twist Trouser</h3>
                        <p> Feature asymmetrical design elements, such as angled pockets, uneven hems, or diagonal seams. These design features create a unique visual appeal.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/Vneck.jpeg" alt="Denim" />
                        <h3>Vneck</h3>
                        <p>Features two V-shaped cuts, one above the other, creating a layered or tiered effect. This variation adds visual interest and complexity to the garment.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    <div className="product-card">
                        <img src="/images/White Jeans trouser.jpg" alt="Denim" />
                        <h3>White Khaki trouser</h3>
                        <p>They are suitable for various occasions, including casual outings, business-casual environments, and semi-formal events.</p>
                        <Link to="/products">
                            <button className="view-more-button">View more</button>
                        </Link>
                    </div>
                    {/* Add more product cards as needed */}
                </div>
            </section>

            {/* Persuasive Features */}
            <section className="persuasive-features">
                <div className="feature">
                    <img src="/images/shippng.jpeg" alt="Free Shipping" />
                    <h3>Free Shipping</h3>
                    <p>Enjoy free shipping on all orders over $50.</p>
                </div>
                <div className="feature">
                    <img src="/images/quality.jpeg" alt="Top Quality" />
                    <h3>Top Quality</h3>
                    <p>We ensure the highest quality products for our customers.</p>
                </div>
                <div className="feature">
                    <img src="/images/support.jpeg" alt="24/7 Support" />
                    <h3>24/7 Support</h3>
                    <p>Our customer support is available 24/7 to assist you.</p>
                </div>
                <div className="feature">
                    <img src="/images/easy return.jpeg" alt="Easy Returns" />
                    <h3>Easy Returns</h3>
                    <p>Hassle-free returns within 30 days of purchase.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;