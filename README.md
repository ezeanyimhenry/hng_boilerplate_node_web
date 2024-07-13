# Boilerplate Database Schema and API Documentation by Team JOPAK

This document shows tables, relationships, and API endpoints for the HNG Boilerplate NodeJS project.

## Documentation Links

- **API Documentation on Swagger Editor**: [link to API design](https://app.swaggerhub.com/apis/EZEANYIMHENRY/hng-boilerplate_by_team_jopak/1.0.0)
- **Database Design**: [link to DB design](dbdiagram.png)

---

## API Endpoints

### User Management

#### Authentication

- **Register User**
  - **POST /auth/register**
  - **Request Body**:
    - `username` (string, required)
    - `email` (string, required)
    - `password` (string, required)
  - **Response**: 
    - `201 Created`
    - `400 Bad Request`

- **Login User**
  - **POST /auth/login**
  - **Request Body**:
    - `email` (string, required)
    - `password` (string, required)
  - **Response**: 
    - `200 OK`
    - `401 Unauthorized`

- **Logout User**
  - **POST /auth/logout**
  - **Response**: 
    - `200 OK`

- **Forgot Password**
  - **POST /auth/forgot-password**
  - **Request Body**:
    - `email` (string, required)
  - **Response**: 
    - `200 OK`

- **Reset Password**
  - **POST /auth/reset-password**
  - **Request Body**:
    - `token` (string, required)
    - `password` (string, required)
  - **Response**: 
    - `200 OK`
    - `400 Bad Request`

#### User Management

- **Get All Users**
  - **GET /users**
  - **Response**: 
    - `200 OK`

- **Get User by ID**
  - **GET /users/{id}**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Update User**
  - **PUT /users/{id}**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Request Body**:
    - Any user fields to update
  - **Response**: 
    - `200 OK`
    - `400 Bad Request`
    - `404 Not Found`

- **Delete User**
  - **DELETE /users/{id}**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Response**: 
    - `204 No Content`
    - `404 Not Found`

- **Get User Settings by ID**
  - **GET /users/{id}/settings**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Update User Settings by ID**
  - **PUT /users/{id}/settings**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Request Body**:
    - Any user settings to update
  - **Response**: 
    - `200 OK`
    - `400 Bad Request`
    - `404 Not Found`

- **Get User Profile by ID**
  - **GET /users/{id}/profile**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Update User Profile by ID**
  - **PUT /users/{id}/profile**
  - **Parameters**:
    - `id` (string, required) - User ID
  - **Request Body**:
    - Any user profile fields to update
  - **Response**: 
    - `200 OK`
    - `400 Bad Request`
    - `404 Not Found`

### Organization Management

#### Organizations

- **Get All Organizations**
  - **GET /organizations**
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Get Organization by ID**
  - **GET /organizations/{id}**
  - **Parameters**:
    - `id` (string, required) - Organization ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Update Organization by ID**
  - **PUT /organizations/{id}**
  - **Parameters**:
    - `id` (string, required) - Organization ID
  - **Request Body**:
    - Any organization fields to update
  - **Response**: 
    - `200 OK`
    - `400 Bad Request`
    - `404 Not Found`

- **Delete Organization by ID**
  - **DELETE /organizations/{id}**
  - **Parameters**:
    - `id` (string, required) - Organization ID
  - **Response**: 
    - `204 No Content`
    - `404 Not Found`

#### Organization Members

- **Add Member to Organization**
  - **POST /organizations/{id}/members**
  - **Parameters**:
    - `id` (string, required) - Organization ID
  - **Request Body**:
    - `userId` (string, required)
  - **Response**: 
    - `201 Created`
    - `400 Bad Request`
    - `404 Not Found`

- **Invite Member to Organization**
  - **POST /organizations/{id}/invite**
  - **Parameters**:
    - `id` (string, required) - Organization ID
  - **Request Body**:
    - `email` (string, required)
  - **Response**: 
    - `201 Created`
    - `400 Bad Request`
    - `404 Not Found`

- **Get Organization Member by ID**
  - **GET /organizations/{id}/members/{userId}**
  - **Parameters**:
    - `id` (string, required) - Organization ID
    - `userId` (string, required) - User ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Remove Member from Organization**
  - **DELETE /organizations/{id}/members/{userId}**
  - **Parameters**:
    - `id` (string, required) - Organization ID
    - `userId` (string, required) - User ID
  - **Response**: 
    - `204 No Content`
    - `404 Not Found`

### Payments

- **Get All Payments**
  - **GET /payments**
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

- **Get Payment by ID**
  - **GET /payments/{id}**
  - **Parameters**:
    - `id` (string, required) - Payment ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

### Admin

- **Get Admin Information**
  - **GET /admin**
  - **Response**: 
    - `200 OK`

- **Get All Users by Admin**
  - **GET /admin/users**
  - **Response**: 
    - `200 OK`

- **Get All Organizations by Admin**
  - **GET /admin/organisations**
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

### Comments

- **Get All Comments**
  - **GET /comments**
  - **Response**: 
    - `200 OK`

- **Get Comment by ID**
  - **GET /comment/{id}**
  - **Parameters**:
    - `id` (string, required) - Comment ID
  - **Response**: 
    - `200 OK`
    - `404 Not Found`

---

## Database Schema

![Screenshot 1](screenshots/screenshot1.png)

### Tables Overview

#### Users

Stores information about registered users in the system.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each user.
  - `name`: VARCHAR(255), user's name.
  - `email`: VARCHAR(255), unique email address.
  - `password_hash`: VARCHAR(255), hashed password for authentication.
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

#### Organizations

Holds details about organizations or groups within the system.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each organization.
  - `name`: VARCHAR(255), name of the organization.
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

#### Auth Tokens

Manages authentication tokens issued to users.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each token.
  - `user_id`: UUID, references `users.id`, identifies the user associated with the token.
  - `token`: TEXT, authentication token value.
  - `expires_at`: TIMESTAMP, expiration timestamp of the token.
  - `created_at`: TIMESTAMP, timestamp when the token was created.

#### Password Resets

Handles password reset requests.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each reset request.
  - `user_id`: UUID, references `users.id`, identifies the user requesting the password reset.
  - `reset_token`: TEXT, token value for password reset.
  - `expires_at`: TIMESTAMP, expiration timestamp of the reset token.
  - `created_at`: TIMESTAMP

### Payments

Records payment transactions made by users or organizations.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each payment.
  - `user_id`: UUID, references `users.id`, identifies the user making the payment.
  - `organization_id`: UUID, references `organizations.id`, identifies the organization receiving the payment.
  - `amount`: DECIMAL(10, 2), amount of the payment.
  - `status`: VARCHAR(50), status of the payment (e.g., 'pending', 'completed').
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

### Comments

Stores comments made by users.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each comment.
  - `user_id`: UUID, references `users.id`, identifies the user who made the comment.
  - `content`: TEXT, textual content of the comment.
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

### Notifications

Manages notifications sent to users.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each notification.
  - `user_id`: UUID, references `users.id`, identifies the user receiving the notification.
  - `message`: TEXT, content of the notification message.
  - `read`: BOOLEAN, indicates whether the notification has been read.
  - `created_at`: TIMESTAMP, timestamp when the notification was created.

### Filters

Stores user-defined filters or preferences.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each filter.
  - `user_id`: UUID, references `users.id`, identifies the user who created the filter.
  - `filter_type`: VARCHAR(50), type or category of the filter.
  - `filter_value`: TEXT, value or settings associated with the filter.
  - `created_at`: TIMESTAMP, timestamp when the filter was created.

### Admin Settings

Stores system-wide settings managed by administrators.

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each setting.
  - `setting_name`: VARCHAR(255), name or identifier of the setting.
  - `setting_value`: TEXT, value or configuration of the setting.
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

### Organization Members

Manages memberships between users and organizations (Many-to-Many).

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each membership.
  - `user_id`: UUID, references `users.id`, identifies the user who is a member.
  - `organization_id`: UUID, references `organizations.id`, identifies the organization.
  - `role`: VARCHAR(50), role of the user within the organization (e.g., 'admin', 'member').
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

### User Profile

Stores additional profile data for users (One-to-One).

- **Columns**:
  - `id`: UUID, primary key, uniquely identifies each profile.
  - `user_id`: UUID, references `users.id`, identifies the user associated with the profile.
  - `profile_data`: TEXT, additional data related to the user's profile.
  - `created_at`, `updated_at`: TIMESTAMP, timestamps for creation and last update.

## Relationship Types

- **One-to-Many (1:N)**: Each user can have multiple entries in `auth_tokens`, `password_resets`, `payments`, `comments`, `notifications`, `filters`, and organization memberships (`organization_members`).
- **Many-to-Many (N:N)**: Users can belong to multiple organizations through `organization_members`.
- **One-to-One (1:1)**: Each user has a single profile entry in `user_profile`.
