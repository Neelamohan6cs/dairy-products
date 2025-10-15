import React from "react";
import "./Dashbord.css"; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">Sri Suwasthika</h2>
          <p>Your trusted store for farm-fresh products.</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@dairymart.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123, Dairy Street, Chennai, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/dashbord">Home</a></li>
            <li><a href="/dashbord/myorders">My Orders</a></li>
            <li><a href="/dashbord/profile">Profile</a></li>
            <li><a href="/dashbord/buy">Shop Now</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Suvasthika. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
