
# User Management System with Role-Based Authentication

This project is a simple **User Management System** that allows users to sign up, log in, and be redirected to different routes based on their roles (Admin, Teacher, or Student). The system uses **React** for the frontend and **localStorage** to store user data.

## Features

- **Sign Up**: New users can create an account by providing an email, password, and selecting a role (Admin, Teacher, or Student).
- **Login**: Users can log in with their credentials (email and password).
- **Role-based Redirection**: After a successful login, users are redirected based on their role:
  - Admin: `/admin`
  - Teacher: `/teacher`
  - Student: `/student`
- **Toastify Notifications**: Success and error messages are displayed using `react-toastify`.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **react-toastify**: For displaying notification messages.
- **localStorage**: For storing user data (email, password, and role).

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ShaileshVSavani/Education-Management-System.git
   cd user-management-system
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

   This will start the app on [http://localhost:3000](http://localhost:3000).

## Deployment

You can view the deployed version of the app at the following URL:

[**Deployed App URL**](https://your-deployment-url.com)  
(Replace `your-deployment-url.com` with your actual deployed URL.)

`

### `App.js`

The main component that sets up routing and includes `ToastContainer` for displaying notifications.

### `Login.js`

Handles the login process. After successful login, redirects users based on their roles.

### `Signup.js`

Handles the signup process. Users can create a new account, and after successful signup, they are redirected to the login page.

### `AuthContext.js`

A context to manage the authentication state of the user (logged-in user).

## Usage

### Sign Up

1. Navigate to the **Sign Up** page (`/signup`).
2. Enter a valid email, password, and select a role (Admin, Teacher, or Student).
3. Click on **Sign Up** to create an account. If the account is created successfully, you will be redirected to the login page.

### Log In

1. After signing up, navigate to the **Login** page (`/login`).
2. Enter your email and password.
3. If the credentials are correct, you will be redirected to the corresponding page based on your role:
   - Admin: `/admin`
   - Teacher: `/teacher`
   - Student: `/student`

## Notifications

The app uses `react-toastify` to display notifications:

- **Success messages**: Displayed on successful actions (e.g., account creation, successful login).
- **Error messages**: Displayed on failure actions (e.g., invalid credentials, duplicate email during signup).
