import React from "react";

const App = () => {
  const styles = {
    header: {
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "80px 0 120px 0",
      textAlign: "center",
      minHeight: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },

    headerH1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      color: "#2c3e50",
      marginBottom: "20px",
      letterSpacing: "-1px",
    },

    headerP: {
      fontSize: "1.2rem",
      color: "#7f8c8d",
      maxWidth: "600px",
      margin: "0 auto",
    },

    footer: {
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      padding: "60px 0",
    },

    footerContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "60px",
    },

    footerSectionH3: {
      color: "#1abc9c",
      fontSize: "1.2rem",
      fontWeight: 600,
      marginBottom: "25px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },

    footerSectionP: {
      color: "#bdc3c7",
      marginBottom: "15px",
      lineHeight: 1.7,
    },

    footerUl: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    footerLi: {
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
    },

    footerLink: {
      color: "#bdc3c7",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },

    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "15px",
    },

    contactIcon: {
      width: "20px",
      height: "20px",
      marginRight: "12px",
      marginTop: "2px",
      flexShrink: 0,
    },

    emergencyBox: {
      backgroundColor: "#34495e",
      padding: "20px",
      borderRadius: "8px",
      marginTop: "20px",
      borderLeft: "4px solid #e74c3c",
    },

    emergencyTitle: {
      color: "#f39c12",
      fontWeight: 600,
      marginBottom: "8px",
    },

    emergencyNumber: {
      color: "#ecf0f1",
      fontSize: "1.1rem",
      fontWeight: 600,
      marginBottom: "5px",
    },

    emergencyText: {
      color: "#95a5a6",
      fontSize: "0.9rem",
    },

    featureList: {
      color: "#95a5a6",
      fontSize: "0.9rem",
      marginTop: "15px",
    },

    credentials: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      color: "#1abc9c",
      fontSize: "0.9rem",
    },
  };

  const SVGIcon = ({ path, fill = "#1abc9c" }) => (
    <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%", fill }}>
      <path d={path} />
    </svg>
  );

  return (
    <div>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.headerH1}>Online Pharmacy</h1>
        <p style={styles.headerP}>
          Your trusted partner in healthcare and pharmaceutical services
        </p>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* About Section */}
          <div className="footer-section">
            <h3 style={styles.footerSectionH3}>About Online Pharmacy</h3>
            <p style={styles.footerSectionP}>
              Secure and easy online medicine ordering portal. Our mission is to
              provide reliable pharmaceutical services and seamless drug
              management.
            </p>

            <div style={styles.credentials}>
              <span style={{ marginRight: "8px", fontWeight: "bold" }}>✓</span>
              FDA Approved • Licensed Pharmacy
            </div>
            <div style={styles.credentials}>
              <span style={{ marginRight: "8px", fontWeight: "bold" }}>✓</span>
              24/7 Customer Support • Free Delivery Over $50
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3 style={styles.footerSectionH3}>Services & Features</h3>
            <ul style={styles.footerUl}>
              <li style={styles.footerLi}>
                <div style={styles.contactIcon}>
                  <SVGIcon path="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
                </div>
                Medicine Orders & Tracking
              </li>
              <li style={styles.footerLi}>
                <div style={styles.contactIcon}>
                  <SVGIcon path="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                </div>
                Member Management Portal
              </li>
              <li style={styles.footerLi}>
                <div style={styles.contactIcon}>
                  <SVGIcon path="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 12H7V10H17V12Z" />
                </div>
                Prescription Management
              </li>
              <li style={styles.footerLi}>
                <div style={styles.contactIcon}>
                  <SVGIcon path="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
                </div>
                Admin Security Controls
              </li>
            </ul>
            <div style={styles.featureList}>
              Real-time inventory • Auto-refill reminders
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 style={styles.footerSectionH3}>Contact & Support</h3>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <SVGIcon path="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
              </div>
              <span>123 Pharma Street, HealthCity, USA</span>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <SVGIcon path="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5" />
              </div>
              <span>+1 (555) 123-4567</span>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <SVGIcon path="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" />
              </div>
              <span>support@onlinepharma.com</span>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <SVGIcon path="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
              </div>
              <a href="#" style={{ ...styles.footerLink, color: "#1abc9c" }}>
                Terms & Conditions
              </a>
            </div>

            <div style={styles.emergencyBox}>
              <div style={styles.emergencyTitle}>Emergency Hotline</div>
              <div style={styles.emergencyNumber}>1-800-PHARMA-911</div>
              <div style={styles.emergencyText}>
                Available 24/7 for urgent needs
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
