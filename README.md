# <a href="https://luxethreads.netlify.app">LuxeThreads</a>

Welcome to LuxeThreads, an elegant and efficient e-commerce store built using the MERN stack with various technologies for enhanced performance and security.

<a href="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBL4T4DVHwfrpgUyc58PMtyxum5v4T10VDqMf3dODo_Ah5qGibow-3Jsg8DQwMbArWwSwjJGewjIyIfT_9mWeHesGR_3Q=s1600?source=screenshot.guru"> <img src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBL4T4DVHwfrpgUyc58PMtyxum5v4T10VDqMf3dODo_Ah5qGibow-3Jsg8DQwMbArWwSwjJGewjIyIfT_9mWeHesGR_3Q=s1600" /> </a>

### <a href="https://luxethreads.netlify.app"> Live Demo </a>
`email: test@gmail.com`
`password: test`

## Features

- Efficient e-commerce store with Cloudinary-optimized images for a 50% faster content load time.
- Secure transactions powered by Stripe and streamlined cart management using Redux Toolkit.
- MERN stack implementation with JWT authentication and a RESTful API for user and product management.


## Tech Stack

**Client:** React, CSS, Redux Toolkit, Stripe  

**Server:** Node, Express, MongoDB, JSON Web Tokens, Cloudinary


## Installation

Clone repository

```bash
git clone https://github.com/AayushG02/luxethreads.git
```
Install dependencies for the backend and frontend:

```bash
cd luxethreads
cd client && npm install
cd ../server && npm install
```
To run this project, you will need to add the following environment variables to your .env file

### Client
`VITE_API_URL`

### Server
`MONGO_URI`

`PORT`

`SECRET`

`STRIPE_SECRET_KEY`


## API Reference

### User

#### Log in
```http
POST /api/user/login
```

#### Sign up

```http
POST /api/user/signup
```

#### Get wishlist

```http
GET /api/user/wishlist/
```

#### Add to wishlist

```http
POST /api/user/wishlist/:itemID
```

#### Remove an item from the wishlist

```http
DELETE /api/user/wishlist/:itemID
```

### Products

#### Get all products

```http
GET /api/products/
```
#### Get single product

```http
GET /api/products/:id
```
#### Add product

```http
POST /api/products/create
```
