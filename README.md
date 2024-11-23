
# Angular E-commerce Platform

## Overview
A modern e-commerce application built with Angular 16+, featuring user authentication, product management, and a responsive design. The application implements a clean architecture with standalone components and modern Angular practices.

## Features

### Authentication
- 🔐 Role-based access control (Admin/User)
- 🛡️ Protected routes with auth guard
- 💾 Local storage persistence
- 🚪 Logout functionality

### Product Management
- 📦 CRUD operations for products (Admin only)
- 📄 Product listing with pagination
- ⭐ Product rating system
- 🔍 Product filtering
- 🖼️ Image handling

### UI/UX
- 🎨 Modern floating labels
- 📱 Responsive design
- ✨ PrimeNG components integration
- 🎯 Form validation
- 💫 Smooth animations

## Tech Stack
- **Framework**: Angular 16+
- **UI Library**: PrimeNG
- **Styling**: SCSS
- **State Management**: RxJS BehaviorSubject
- **Form Handling**: Reactive Forms
- **Server-Side Rendering**: Angular Universal

## Prerequisites

```bash
Node.js >= 14.x
npm >= 6.x
Angular CLI >= 16.x
```

## Installation & Setup

1. Clone the repository
```bash
git clone [repository-url]
cd ecommerce
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ng serve
```

4. Navigate to `http://localhost:4200`

## Project Structure

```
ecommerce/
├── src/
│   ├── app/
│   │   ├── components/        # Reusable components
│   │   │   ├── product/       # Product component
│   │   │   └── edit-popup/    # Edit dialog
│   │   ├── layout/            # Layout components
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── modules/           # Feature modules
│   │   │   └── about-us/
│   │   ├── services/          # Application services
│   │   │   ├── auth.service.ts
│   │   │   └── products.service.ts
│   │   └── types/             # TypeScript interfaces
│   ├── server/                # Backend server
│   │   ├── db.json           # JSON database file
│   │   ├── server.js         # Express server
│   │   ├── package.json      # Server dependencies
│   │   └── readme.md         # Server documentation
│   └── styles/               # Global styles
```

## Authentication
The application supports two user roles:
- **Admin**: Full access to CRUD operations
  - Username: admin
  - Password: admin123
- **User**: Read-only access
  - Username: user
  - Password: user123

## Available Scripts
- `ng serve`: Start development server
- `ng build`: Build the application
- `ng test`: Run unit tests
- `ng build:ssr`: Build for server-side rendering

## API Endpoints
The application expects a RESTful API with the following endpoints:

```typescript
GET /clothes       # Fetch products with pagination
POST /clothes      # Create new product
PUT /clothes/:id   # Update product
DELETE /clothes/:id # Delete product
```

## Styling
- SCSS for custom styling
- PrimeNG components
- Utility classes:
  - `.row`, `.column` for flexbox
  - `.gap-1`, `.gap-2` for spacing
  - `.full-center` for centering
  - `.hidden`, `.disabled` for states

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Best Practices
- Use standalone components
- Implement lazy loading for feature modules
- Follow Angular style guide
- Write unit tests
- Use TypeScript interfaces
- Implement proper error handling
- Use reactive forms for form handling

## License
This project is licensed under the MIT License.

## Contact
Tayssir Ferhi - [ferhitayssir@gmail.com]  
Project Link: [https://github.com/tayss1r/e-commerce]
