# FirstGo
Prototype Notion inspired adaptable HRIS system using Azure
# Prototype Web Application

## Overview
A modern web application built with React and Azure cloud services. This prototype demonstrates secure authentication, real-time updates, and scalable data management using Microsoft's cloud infrastructure.

## 🚀 Features
- Single Sign-On with Microsoft Entra ID
- Real-time data updates using Event Grid
- Document management with Azure Blob Storage
- Responsive UI with modern design patterns
- Secure API management

## 🛠 Tech Stack
### Frontend
- React + TypeScript
- Azure Static Web Apps
- Microsoft Authentication Library (MSAL)
- Tailwind CSS
- shadcn/ui components

### Backend Services
- Azure Cosmos DB
- Azure Event Grid
- Azure Blob Storage
- Azure API Management
- Microsoft Entra ID

## 📋 Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Azure account with active subscription
- GitHub account
- Microsoft Entra ID access

## 🔧 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/project-name.git
cd project-name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_AZURE_CLIENT_ID=your_client_id
VITE_AZURE_TENANT_ID=your_tenant_id
VITE_AZURE_AUTHORITY=https://login.microsoftonline.com/
VITE_API_BASE_URL=your_api_base_url
```

### 4. Start Development Server
```bash
npm run dev
```

## 🏗 Project Structure
```
src/
├── components/        # Reusable UI components
│   ├── layout/       # Layout components
│   ├── features/     # Feature-specific components
│   └── shared/       # Shared components
├── hooks/            # Custom React hooks
├── services/         # API and service integrations
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🔐 Authentication
This project uses Microsoft Entra ID for authentication. Users can sign in with their Microsoft accounts and access features based on their assigned roles.

### Setting up Authentication
1. Register your application in Microsoft Entra ID
2. Add necessary redirect URIs
3. Configure required API permissions
4. Update environment variables

## 📡 API Integration
The application uses Azure API Management for all backend communications. API documentation is available at:
```
https://your-api-management-instance.azure-api.net/docs
```

## 🔄 Event System
Real-time updates are handled through Azure Event Grid. The system publishes and subscribes to the following event types:
- Record created/updated/deleted
- User actions
- System notifications

## 💾 Data Storage
### Cosmos DB
- Primary data storage
- Document-based structure
- Real-time synchronization

### Blob Storage
- File storage and attachments
- Secure access management
- CDN integration

## 📦 Build and Deployment

### Local Build
```bash
npm run build
```

### Production Deployment
The application is automatically deployed through GitHub Actions when changes are pushed to the main branch.

### Manual Deployment
```bash
npm run build
swa deploy ./build
```

## 🧪 Testing
```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run linting
npm run lint
```

## 📈 Monitoring
- Application Insights integration
- Performance monitoring
- Error tracking
- Usage analytics

## 🔒 Security
- TLS 1.2 encryption
- Azure Security Center integration
- Regular security audits
- Role-based access control

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📝 Development Guidelines
- Use TypeScript for all new code
- Follow the established component structure
- Write unit tests for new features
- Update documentation as needed

## ⚙️ Configuration
The application can be configured through environment variables and Azure portal settings. Key configuration areas:
- Authentication settings
- API endpoints
- Storage configuration
- Event Grid topics

## 🐛 Troubleshooting
Common issues and solutions are documented in the [Wiki](link-to-wiki).

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support
For support, please raise an issue in the GitHub repository or contact the development team.

## 🔮 Future Plans
- Enhanced real-time collaboration
- Advanced search capabilities
- Mobile application
- Additional authentication providers

---
Developed with ❤️ using Azure Cloud Services

Need help or have questions? Feel free to create an issue or contact the team.
