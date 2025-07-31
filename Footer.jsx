import { MapPin, Phone, Mail, FileText, ShoppingCart, User, Lock } from "lucide-react";
import './Footer.css'; // Import your custom CSS file

export default function FooterBar() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">About Online Pharmacy</h3>
          <p className="footer-description">
            Secure and easy online medicine ordering portal. Our mission is to provide reliable
            pharmaceutical services and seamless drug management.
          </p>
          <div className="footer-subtext">
            <Lock size={14} />
            <span>FDA Approved • Licensed Pharmacy</span>
          </div>
          <div className="footer-small-text">
            24/7 Customer Support • Free Delivery Over $50
          </div>
        </div>

        {/* Services & Features Section */}
        <div className="footer-section">
          <h3 className="footer-title">Services & Features</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <ShoppingCart size={14} className="footer-icon" />
              Medicine Orders & Tracking
            </li>
            <li className="footer-list-item">
              <User size={14} className="footer-icon" />
              Member Management Portal
            </li>
            <li className="footer-list-item">
              <FileText size={14} className="footer-icon" />
              Prescription Management
            </li>
            <li className="footer-list-item">
              <Lock size={14} className="footer-icon" />
              Admin Security Controls
            </li>
          </ul>
          <div className="footer-small-text">
            Real-time inventory • Auto-refill reminders
          </div>
        </div>

        {/* Account & Support Section */}
        <div className="footer-section">
          <h3 className="footer-title">Account & Support</h3>
          <ul className="footer-list">
            <li>Quick Registration & Login</li>
            <li>Profile & Health Records</li>
            <li>Order History & Tracking</li>
            <li>Insurance Integration</li>
            <li>Doctor Consultation Portal</li>
          </ul>
          <div className="footer-small-text green">
            ✓ HIPAA Compliant • Secure Data Protection
          </div>
        </div>

        {/* Contact & Help Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact & Support</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <MapPin size={16} className="footer-icon" />
              123 Pharma Street, HealthCity, USA
            </li>
            <li className="footer-list-item">
              <Phone size={16} className="footer-icon" />
              +1 (555) 123-4567
            </li>
            <li className="footer-list-item">
              <Mail size={16} className="footer-icon" />
              support@onlinepharma.com
            </li>
            <li className="footer-list-item">
              <FileText size={16} className="footer-icon" />
              <a href="/terms" className="footer-link">Terms & Conditions</a>
            </li>
          </ul>
          <div className="footer-emergency">
            <div className="footer-emergency-title">Emergency Hotline</div>
            <div className="footer-emergency-number">1-800-PHARMA-911</div>
            <div className="footer-small-text">Available 24/7 for urgent needs</div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; {new Date().getFullYear()} Online Pharmacy. All rights reserved.</p>
          <div className="footer-badges">
            <span className="footer-badge green">Licensed</span>
            <span className="footer-badge blue">SSL Secured</span>
            <span className="footer-badge purple">HIPAA Compliant</span>
          </div>
        </div>
        <p className="footer-bottom-right">
          Developed for Capstone Project | Powered by React & Spring Boot
        </p>
      </div>
    </footer>
  );
}
