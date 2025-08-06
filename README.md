# Online_Pharma_Team_3 Project
# Online Pharmacy -Capstone 

A comprehensive web-based pharmacy management system that allows users to browse, order medicines online, and provides admin functionality for drug and member management.

## 🚀 Features

### User Authentication & Security
- **User Registration & Login**: Secure authentication system for members and admins
- **Session Management**: Login/logout functionality with session handling
- **Admin Approval**: Member registration requires admin approval before accessing the system

### Drug Management (Admin)
- **CRUD Operations**: Add, view, edit, and delete drug entries
- **Search Functionality**: Find drugs by ID or name
- **Inventory Management**: Track drug quantities and availability
- **Drug Catalog**: Comprehensive listing of all available medicines

### Member Management
- **User Registration**: New members can register for the platform
- **Profile Management**: Members can update personal details (email, mobile, etc.)
- **Admin Controls**: Admins can view, disable, delete, and update member accounts
- **Approval Workflow**: Admin approval required for new member registrations

### Medicine Ordering System
- **Drug Search & Browse**: Members can search and view drugs by name or ID
- **Shopping Cart**: Add multiple medicines to cart with automatic price calculation
- **Order Management**: Complete order process with cart management
- **Stock Validation**: Prevents ordering when stock is insufficient or zero
- **Inventory Updates**: Automatic stock quantity updates after successful orders

## 🛠️ Technology Stack

### Backend
- **Framework**: Spring Boot (REST API)
- **Database**: MySQL
- **Architecture**: Repository-Service-Controller pattern
- **Testing**: JUnit test cases
- **API Testing**: Postman

### Frontend
- **Framework**: Angular/React JS/JavaScript
- **UI/UX**: Responsive web interface

### Development Tools
- **API Testing**: Postman for REST API testing
- **Database Management**: MySQL for data persistence
- **Exception Handling**: Comprehensive error handling and validations

## 📋 Prerequisites

- Java 8 or higher
- MySQL 8.0 or higher
- Node.js and npm (for frontend)
- Maven or Gradle (for dependency management)
- Postman (for API testing)

## 🚀 Installation & Setup

### Database Setup
1. Install MySQL and create a new database
```sql
CREATE DATABASE online_pharmacy;
```

2. Configure database connection in `application.properties`
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/online_pharmacy
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Backend Setup
1. Clone the repository
```bash
git clone <repository-url>
cd online-pharmacy-backend
```

2. Install dependencies
```bash
mvn clean install
```

3. Run the Spring Boot application
```bash
mvn spring-boot:run
```

### Frontend Setup
1. Navigate to frontend directory
```bash
cd online-pharmacy-frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```
## Output of login page 
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/4fc30f86-6e23-487c-974d-4198df7c6ef5" />


## 📐 System Architecture

### Modules
1. **Authentication Module**: User login/logout and session management
2. **Drug Management Module**: CRUD operations for medicine catalog
3. **Member Management Module**: User registration and profile management
4. **Order Management Module**: Shopping cart and order processing

### Database Design
- **Users Table**: Store member and admin information
- **Drugs Table**: Medicine catalog with details and stock quantities
- **Orders Table**: Order history and details
- **Cart Table**: Temporary storage for user selections

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/register` - Member registration

### Drug Management
- `GET /api/drugs` - List all drugs
- `GET /api/drugs/{id}` - Get drug by ID
- `GET /api/drugs/search?name={name}` - Search drugs by name
- `POST /api/drugs` - Add new drug (Admin only)
- `PUT /api/drugs/{id}` - Update drug details (Admin only)
- `DELETE /api/drugs/{id}` - Delete drug (Admin only)

### Member Management
- `GET /api/members` - List all members (Admin only)
- `PUT /api/members/{id}/approve` - Approve member registration (Admin only)
- `PUT /api/members/{id}/disable` - Disable member account (Admin only)
- `DELETE /api/members/{id}` - Delete member (Admin only)
- `PUT /api/members/profile` - Update member profile

### Order Management
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart` - View cart items
- `DELETE /api/cart/{id}` - Remove item from cart
- `POST /api/orders/checkout` - Complete order process

## 🧪 Testing

### Running Unit Tests
```bash
mvn test
```

### API Testing with Postman
1. Import the provided Postman collection
2. Set up environment variables for base URL and authentication tokens
3. Run the collection to test all endpoints

## 📊 Project Deliverables

- [x] User Stories based on problem statement
- [x] Use Case Diagrams
- [x] Class Diagrams
- [x] Source Code (Backend & Frontend)
- [x] JUnit Test Cases
- [x] API Documentation

## 🎯 User Roles & Permissions

### Admin
- Manage drug catalog (CRUD operations)
- Approve/reject member registrations
- View and manage all member accounts
- Monitor orders and inventory

### Member
- Register and maintain profile
- Browse and search medicines
- Add medicines to cart and place orders
- View order history

## 🔒 Security Features

- Input validation and sanitization
- SQL injection prevention
- Authentication and authorization
- Session management
- Admin approval workflow for new registrations

## 🚧 Future Enhancements

- Payment gateway integration
- Real-time inventory tracking
- Order status notifications
- Medicine reviews and ratings
- Prescription upload functionality
- Mobile application development

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is developed as part of IIHT Capstone Project requirements.

## 📞 Support

For any queries or support, please contact the development team.

Dasari Naveen, 
 Gaddameedi Naveena,
Chiluka Varshitha,
 Rananki Jahnavi,
  Vengala Manogna,
Shravya Megharaj
---

**Note**: This project is designed for educational purposes as part of the capstone project requirements. Payment processing is intentionally excluded from the scope.
