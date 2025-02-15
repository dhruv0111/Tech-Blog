# React + Vite Blog Application
## Tech Stack Documentation

### Core Technologies

#### React 18
- **Purpose**: Main frontend library for building user interfaces
- **Why**: 
  - Component-based architecture for reusable UI elements
  - Virtual DOM for optimal rendering performance
  - Large ecosystem and community support
  - Concurrent rendering features

#### Vite
- **Purpose**: Build tool and development server
- **Why**:
  - Lightning-fast hot module replacement (HMR)
  - Native ESM-based dev server
  - Optimized build performance
  - Better developer experience compared to CRA

### State Management

#### Redux Toolkit
- **Purpose**: Global state management
- **Why**:
  - Simplified Redux setup with less boilerplate
  - Built-in immutable state updates
  - Integrated Redux DevTools
  - Includes RTK Query for API management

#### Redux Persist
- **Purpose**: State persistence
- **Why**:
  - Maintains state across page refreshes
  - Configurable storage options
  - Automatic state rehydration

### UI Components

#### Flowbite React
- **Purpose**: UI component library
- **Why**:
  - Tailwind CSS integration
  - Responsive pre-built components
  - Accessibility compliance
  - Customizable theming

#### React Icons
- **Purpose**: Icon library
- **Why**:
  - Comprehensive icon collection
  - Tree-shakeable imports
  - Consistent styling API

### Content Management

#### React Quill
- **Purpose**: Rich text editor
- **Why**:
  - WYSIWYG editing capabilities
  - Customizable toolbar
  - HTML output format
  - Mobile-friendly

### Routing

#### React Router DOM
- **Purpose**: Client-side routing
- **Why**:
  - Declarative routing
  - Nested routes support
  - Protected route handling
  - Navigation state management

### Additional Tools

#### Firebase
- **Purpose**: Backend services
- **Why**:
  - Authentication services
  - File storage
  - Real-time database capabilities
  - Scalable infrastructure

#### Moment.js
- **Purpose**: Date formatting and manipulation
- **Why**:
  - Consistent date handling
  - Localization support
  - Relative time calculations

### Development Tools

#### Tailwind CSS
- **Purpose**: Utility-first CSS framework
- **Why**:
  - Rapid UI development
  - Responsive design system
  - Custom design implementation
  - Minimal bundle size with PurgeCSS

#### ESLint
- **Purpose**: Code linting
- **Why**:
  - Code quality maintenance
  - Consistent code style
  - Error prevention
  - Best practices enforcement

## Getting Started

For development:
```bash
npm run dev

## Source Code Structure

### Core Application Files

#### App.jsx
Main application component defining routes and layout structure:
- Route configurations for all pages
- Protected route implementations
- Layout components (Header/Footer)
- ScrollToTop functionality

#### main.jsx
Application entry point with:
- Redux store integration
- Redux Persist configuration
- Theme provider setup
- Root rendering configuration

### Pages

#### Home (`/src/pages/Home.jsx`)
Landing page featuring:
- Welcome header
- Call-to-Action component
- Recent posts section
- "View all posts" navigation

#### Authentication Pages
##### SignIn (`/src/pages/SignIn.jsx`)
- Login form with email/password
- Google OAuth integration
- Error handling
- Redux state management

##### SignUp (`/src/pages/SignUp.jsx`)
- Registration form
- Field validation
- Google OAuth integration
- Error state handling

#### Dashboard (`/src/pages/Dashboard.jsx`)
Admin interface with:
- Profile management
- Posts management
- Users management (admin)
- Comments management
- Dashboard analytics

#### Post Management
##### CreatePost (`/src/pages/CreatePost.jsx`)
- Post creation form
- Image upload functionality
- Rich text editor
- Category selection

##### UpdatePost (`/src/pages/UpdatePost.jsx`)
- Existing post editing
- Image management
- Content updates
- Category modifications

##### PostPage (`/src/pages/PostPage.jsx`)
- Full post display
- Comments section
- Related posts
- Social sharing

#### Search (`/src/pages/Search.jsx`)
- Advanced search interface
- Filtering options
- Sort functionality
- Results pagination

#### Projects (`/src/pages/Projects.jsx`)
- Project showcase
- Project descriptions
- Interactive elements

#### About (`/src/pages/About.jsx`)
- Blog information
- Author details
- Mission statement

### Components

#### Layout Components
##### Header
- Navigation menu
- Search functionality
- Theme toggle
- User menu

##### Footer
- Site links
- Social media
- Legal information

#### Authentication Components
##### PrivateRoute
- Route protection
- Authentication checks
- Redirect logic

##### OnlyAdminPrivateRoute
- Admin route protection
- Role verification

#### UI Components
##### ThemeProvider
- Theme state management
- Dark/light mode toggle

##### ScrollToTop
- Route change detection
- Automatic scrolling

##### PostCard
- Post preview display
- Image handling
- Category display

##### OAuth
- Google authentication
- User data sync
- Redux integration

### State Management

#### Redux Implementation
- User authentication state
- Theme preferences
- Persist configuration

#### API Integration
- RESTful endpoints
- Firebase storage
- Authentication flows

### Technical Considerations

#### Performance
- Image optimization
- Lazy loading
- State management efficiency

#### Security
- Route protection
- Input validation
- Authentication flows

#### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support


## Getting Started

For development:
```bash
npm run dev
```

Available plugins:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
