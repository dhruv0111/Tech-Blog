# Blog App Backend Documentation

## Tech Stack
Our backend application is built using modern and robust technologies:

### Core Technologies
- **Node.js** - Runtime environment for executing JavaScript code
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling tool

### Authentication & Security
- **JWT (jsonwebtoken)** - For secure authentication
- **bcrypt** - Password hashing
- **cookie-parser** - Cookie handling middleware

### Development Tools
- **nodemon** - Development server with auto-reload
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing support

### Key Dependencies Versions
- express: ^4.21.2
- mongoose: ^8.9.5
- jsonwebtoken: ^9.0.2
- bcrypt: ^5.1.1
- cookie-parser: ^1.4.7
- cors: ^2.8.5

## Overview
This is a RESTful API backend for a Blog application built with Express.js and MongoDB. The application handles user authentication, blog posts, and comments with features like user management, post creation/management, and comment interactions.

## Server Configuration (index.js)
The main server file `index.js` sets up:
- Express.js server configuration
- MongoDB connection
- Middleware integration
- Route handling
- Static file serving for the client application
- Global error handling

## API Routes

### Authentication Routes (`/api/auth`)
```javascript
POST /api/auth/signup     // Register a new user
POST /api/auth/signin     // Login user
POST /api/auth/google     // Google OAuth authentication
```

### User Routes (`/api/user`)
```javascript
GET    /api/user/test           // Test endpoint
PUT    /api/user/update/:userId // Update user information
DELETE /api/user/delete/:userId // Delete user account
POST   /api/user/signout        // Sign out user
GET    /api/user/getusers       // Get all users
GET    /api/user/:userId        // Get specific user
```

### Post Routes (`/api/post`)
```javascript
POST   /api/post/create                    // Create new post
GET    /api/post/getposts                  // Get all posts
DELETE /api/post/deletepost/:postId/:userId // Delete a post
PUT    /api/post/updatepost/:postId/:userId // Update a post
```

### Comment Routes (`/api/comment`)
```javascript
POST   /api/comment/create                  // Create new comment
GET    /api/comment/getPostComments/:postId // Get comments for a post
PUT    /api/comment/likeComment/:commentId  // Like/unlike a comment
PUT    /api/comment/editComment/:commentId  // Edit a comment
DELETE /api/comment/deleteComment/:commentId // Delete a comment
GET    /api/comment/getcomments            // Get all comments
```

## Data Models

### User Model
```javascript
{
  username: String,        // Required, unique
  email: String,          // Required
  password: String,       // Required
  profilePicture: String, // Default profile picture URL
  isAdmin: Boolean        // Default: false
}
```

### Post Model
```javascript
{
  userId: String,    // Required
  content: String,   // Required
  title: String,     // Required, unique
  image: String,     // Default blog image URL
  category: String,  // Default: 'uncategorized'
  slug: String      // Required, unique
}
```

### Comment Model
```javascript
{
  content: String,      // Required
  postId: String,       // Required
  userId: String,       // Required
  likes: Array,         // Default: []
  numberOfLikes: Number // Default: 0
}
```

## Authentication
- JWT-based authentication
- Token verification middleware for protected routes
- Cookie-based token storage

## Error Handling
The application includes global error handling middleware that processes:
- Custom error status codes
- Error messages
- Standardized error response format

## Security Features
- Password hashing
- Token-based authentication
- Protected routes using verification middleware
- Cookie parsing for secure token storage

## Getting Started
1. Install dependencies: `npm install`
2. Set up environment variables in `.env`
3. Start the server: `npm start`

The server will run on port 3000 by default.

## Environment Variables Required
```
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Controllers

### Auth Controller (`auth.controller.js`)
Handles authentication-related operations:
```javascript
POST /signup
- Creates new user account
- Hashes password using bcryptjs
- Validates required fields (username, email, password)

POST /signin
- Authenticates user credentials
- Creates JWT token
- Sets HTTP-only cookie with token
- Returns user data (excluding password)

POST /google
- Handles Google OAuth authentication
- Creates new user if not exists
- Returns JWT token and user data
```

### Post Controller (`post.controller.js`)
Manages blog post operations:
```javascript
POST /create
- Creates new blog post
- Requires admin privileges
- Generates URL-friendly slug
- Validates required fields

GET /getposts
- Fetches posts with pagination
- Supports filtering by userId, category, slug
- Includes search functionality
- Returns post count statistics

DELETE /deletepost
- Deletes specific post
- Requires admin or post owner privileges

PUT /updatepost
- Updates existing post
- Requires admin or post owner privileges
- Updates title, content, category, image
```

### User Controller (`user.controller.js`)
Manages user-related operations:
```javascript
PUT /update
- Updates user profile
- Updates password if provided
- Validates user authorization

DELETE /delete
- Deletes user account
- Requires authentication

POST /signout
- Clears authentication cookie

GET /getusers
- Retrieves all users (admin only)

GET /:userId
- Retrieves specific user data
```

### Comment Controller (`comment.controller.js`)
Handles comment functionality:
```javascript
POST /create
- Creates new comment
- Associates with post and user

GET /getPostComments
- Retrieves comments for specific post

PUT /likeComment
- Toggles comment like status
- Updates like count

PUT /editComment
- Updates comment content
- Requires comment owner

DELETE /deleteComment
- Removes comment
- Requires comment owner or admin
```

## Utils

### Error Handler (`error.js`)
Custom error handling utility:
```javascript
errorHandler(statusCode, message)
- Creates standardized error objects
- Sets HTTP status code
- Sets error message
- Used throughout the application for consistent error handling
```

### User Verification (`verifyUser.js`)
Authentication middleware:
```javascript
verifyToken(req, res, next)
- Validates JWT token from cookies
- Checks token authenticity
- Adds user data to request object
- Handles unauthorized access
```

## Security Implementation
1. **Password Security**
   - Passwords are hashed using bcryptjs
   - Salt rounds: 10
   - Never stored in plain text

2. **JWT Implementation**
   - Tokens stored in HTTP-only cookies
   - Contains user ID and admin status
   - Verified on protected routes

3. **Protected Routes**
   - Uses verifyToken middleware
   - Checks user authentication
   - Validates user permissions

4. **Error Handling**
   - Centralized error processing
   - Consistent error response format
   - Proper status codes and messages