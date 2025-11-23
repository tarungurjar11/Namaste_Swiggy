import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <p>© 2024 Namaste Swiggy. All rights reserved.</p>
            <div className="links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms"> Terms of Service</a>
                <a href="#contact"> Contact Us</a>
            </div>
            <div className="address">
                123 Swiggy Lane, Food City, FL 12345
            </div>
            <div className="contact-info">
                Phone: (123) 456-7890 | Email: info@namasteswiggy.com
            </div>
        </div>
    );
};

export default Footer;