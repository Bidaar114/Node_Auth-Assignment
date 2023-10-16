# API Documentation for Bookstore


This document provides detailed information about the API endpoints and their usage for a Bookstore management system. The API allows owners  to register, login, create, update, and delete Books.

* `BASE_URL: https://f11e9aa3a1c2.herokuapp.com`


## Authentication

Some endpoints in the API require authentication using JSON Web Tokens (JWT). To authenticate, include the Authorization header in the request with the JWT. The header should be in the format: Bearer `<token>`, where `<token>` is the JWT obtained during the login process.

### Endpoints

#### Owner SignUp

The `/signup` endpoint takes the following parameters in the request body:

* `name`: The user's name.
* `email`: The user's email address.
* `password`: The user's password.

###### response

```json
" message: "Owner created successfully",
       newOwner,
```


### Owner Login 

The `/login` endpoint takes the following parameters in the request body:

* `email`: The user's email address.
* `password`: The user's password.

###### response

```json
" message: "Owner logged in successfully",
       "token": "<JWT>"
```



