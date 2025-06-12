# EduUpSkills - Modern Educational Platform

A responsive and professional educational website built with vanilla JavaScript (React via CDN), Node.js/Express backend, and PostgreSQL database.

## 🚀 Features

### Frontend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with soft green color scheme
- **Interactive Components**: Course cards with expandable specializations
- **Contact Form**: Fully functional with validation
- **Smooth Animations**: Fade-in effects and hover transitions

### Backend
- **RESTful API**: Express.js server with PostgreSQL integration
- **Contact Form Processing**: Stores leads in database
- **Admin Dashboard**: Simple authentication and lead management
- **Input Validation**: Server-side validation for all endpoints
- **CORS Enabled**: Frontend-backend integration ready

## 📁 Project Structure

```
/
├── frontend/
│   ├── index.html          # Main website
│   └── admin.html          # Admin dashboard
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Dependencies
│   ├── database.sql        # Database schema
│   ├── .env.example        # Environment variables template
│   └── README.md           # Backend documentation
└── README.md               # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Web browser

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup PostgreSQL database:**
   ```sql
   CREATE DATABASE eduupskills;
   ```

4. **Run database schema:**
   ```bash
   psql -U postgres -d eduupskills -f database.sql
   ```

5. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env file with your database credentials
   ```

6. **Start the server:**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Or production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Option A: Simple HTTP Server**
   ```bash
   # Using Python 3
   python -m http.server 3000

   # Using Node.js
   npx http-server -p 3000
   ```

3. **Option B: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `index.html` → "Open with Live Server"

## 🎓 Available Courses

- **LLB**: Criminal Law, Civil Law, Constitutional Law
- **BA LLB**: International Law, Human Rights Law
- **B.Com LLB**: Corporate Law, Taxation Law
- **BCA**: AI & Machine Learning, Cyber Security
- **BBA**: Finance, Marketing, HR Management
- **MBA**: Finance, Marketing, HR, Agri-Business, Pharma Management, Logistics & SCM
- **MCA**: Cloud Computing, AI & ML, Full Stack Development, Cyber Security, Data Science

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Features

- **Color Scheme**: Emerald green (#10B981) with professional grays
- **Typography**: Modern, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and fade-in animations
- **Accessibility**: Proper color contrast and keyboard navigation

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form

### Admin
- `POST /api/admin/login` - Admin authentication
- `GET /api/leads` - Fetch all leads (admin only)

## 📄 Contact Information

- **Email**: support@eduupskills.com
- **Phone**: 9699055115
- **Hours**: Mon – Sat: 9:00 AM – 6:00 PM

## 🚀 Deployment

### Frontend Deployment
- Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages)
- Simply upload the frontend folder

### Backend Deployment
- Deploy to Heroku, DigitalOcean, AWS, or any Node.js hosting service
- Set environment variables for database connection
- Ensure PostgreSQL database is accessible

## ⚠️ Important Git Note

> ✅ **Git Conflict Resolution**: If you delete the README.md to resolve a Git conflict, it works — but both local and remote content will be lost. It's better to resolve conflicts manually unless the file isn't important.

## 🔮 Future Enhancements

- User registration and course enrollment
- Payment gateway integration
- Course content management
- Email notifications
- Advanced admin features
- Student dashboard
- Progress tracking

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS, React (via CDN)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Tools**: VS Code, Git, npm

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env` file
   - Verify database exists and schema is loaded

2. **CORS Issues**
   - Backend server includes CORS middleware
   - Ensure frontend and backend URLs are correctly configured

3. **Port Conflicts**
   - Backend runs on port 5000 by default
   - Frontend can run on any available port (3000 recommended)

## 📊 Development Status

- ✅ Frontend responsive design
- ✅ Backend API endpoints
- ✅ Database integration
- ✅ Contact form functionality
- ✅ Admin dashboard
- 🔄 User authentication (planned)
- 🔄 Course enrollment system (planned)