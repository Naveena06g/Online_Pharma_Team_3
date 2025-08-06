import React from "react";
import './AboutUs.css';
const AboutUs =()=>{
    return(
        <div>
            {/* <section className="header">
        <div className="container">
            <h1>Capstone Pharmacy</h1>
            <p>Your trusted partner in accessible, reliable, and comprehensive pharmaceutical care since 2015</p>
        </div>
    </section> */}

    <section className="mission">
        <div className="container">
            <div className="mission-content">
                <div className="mission-text">
                    <h2>About Us..</h2>
                    <p>
                        Capstone Pharmacy is a trusted omni-channel pharmacy network with over 5500 outlets, delivering healthcare across 19,000+ pin codes in India. Committed to quality and accessibility, we offer 24×7 service backed by international certifications and over two decades of experience in pharmacy operations. From prescription and OTC medicines to wellness, personal care, and 400+ Capstone-branded products, our platform — CapstonePharmacy.in — features more than 70,000 healthcare essentials, ensuring convenient, affordable, and reliable care at your fingertips. At Capstone Pharmacy, your health is our priority.</p>
                    
                </div>
                <div className="mission-image">
                    <div className="mission-icon">🏥</div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="stats">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-number">250K+</span>
                    <div className="stat-label">Prescriptions Filled</div>
                </div>
                <div className="stat-card">
                    <span className="stat-number">50K+</span>
                    <div className="stat-label">Satisfied Customers</div>
                </div>
                <div className="stat-card">
                    <span className="stat-number">15+</span>
                    <div className="stat-label">Licensed Pharmacists</div>
                </div>
                <div className="stat-card">
                    <span className="stat-number">99.8%</span>
                    <div className="stat-label">Customer Satisfaction</div>
                </div>
            </div>
        </div>
    </section>

  
    <section className="services">
        <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">💊</div>
                    <h3>Prescription Management</h3>
                    <p>Complete prescription processing, refill reminders, and medication synchronization services to ensure you never miss a dose.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">🚚</div>
                    <h3>Free Home Delivery</h3>
                    <p>Fast, secure, and temperature-controlled delivery to your doorstep. Free shipping on orders over $50 with same-day delivery available.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">👨‍⚕️</div>
                    <h3>Pharmacist Consultation</h3>
                    <p>24/7 access to licensed pharmacists for medication counseling, drug interaction checks, and health advice through our secure platform.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">🔒</div>
                    <h3>Secure Health Records</h3>
                    <p>HIPAA-compliant digital health records management with easy access to your prescription history and medication profiles.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">💰</div>
                    <h3>Insurance Integration</h3>
                    <p>Seamless insurance processing with real-time benefit verification and coverage optimization to minimize your out-of-pocket costs.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">📱</div>
                    <h3>Mobile App Experience</h3>
                    <p>User-friendly mobile app for prescription management, medication reminders, and direct communication with our pharmacy team.</p>
                </div>
            </div>
        </div>
    </section>

  
    <section className="team">
        <div className="container">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <div className="team-grid">
                <div className="team-card">
                    <div className="team-avatar">👨‍⚕️</div>
                    <div className="team-info">
                        <div className="team-name">Dr. Michael Chen</div>
                        <div className="team-role">Chief Pharmacist & Co-Founder</div>
                        <div className="team-bio">PharmD with 15+ years experience in clinical pharmacy and medication therapy management. Specialized in geriatric pharmacy care.</div>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-avatar">👩‍⚕️</div>
                    <div className="team-info">
                        <div className="team-name">Dr. Sarah Rodriguez</div>
                        <div className="team-role">Clinical Pharmacy Director</div>
                        <div className="team-bio">Board-certified pharmacotherapy specialist focusing on chronic disease management and patient counseling services.</div>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-avatar">👨‍💼</div>
                    <div className="team-info">
                        <div className="team-name">James Thompson</div>
                        <div className="team-role">Operations Manager</div>
                        <div className="team-bio">MBA in Healthcare Management with expertise in pharmaceutical supply chain optimization and quality assurance protocols.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    
    <section className="values">
        <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
                <div className="value-card">
                    <div className="value-icon">🛡️</div>
                    <h3>Safety First</h3>
                    <p>Every medication is thoroughly verified by licensed pharmacists. We maintain the highest safety standards and quality control measures.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">❤️</div>
                    <h3>Patient-Centered Care</h3>
                    <p>Your health and well-being are our top priority. We provide personalized care and support for every patient's unique needs.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">🌐</div>
                    <h3>Accessibility</h3>
                    <p>Making quality healthcare accessible to everyone, regardless of location or mobility limitations through our digital platform.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">🤝</div>
                    <h3>Trust & Transparency</h3>
                    <p>Building lasting relationships through honest communication, transparent pricing, and reliable service you can depend on.</p>
                </div>
            </div>
        </div>
    </section>

  
    <section className="cta">
        <div className="container">
            <h2>Ready to Experience Better Pharmacy Care?</h2>
            <p>Join thousands of satisfied customers who trust Capstone Pharmacy for their medication needs</p>
            <a href="#" className="cta-button">Get Started Today</a>
        </div>
    </section>

        </div>
    );
};
export default AboutUs;