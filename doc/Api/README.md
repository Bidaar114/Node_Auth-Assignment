# API Documentation for Bookstore


This document provides detailed information about the API endpoints and their usage for a Bookstore management system. The API allows owners  to register, login, create, update, and delete Books.

* `BASE_URL: https://bookstore-3eea.onrender.com/api/`


## Authentication

Some endpoints in the API require authentication using JSON Web Tokens (JWT). To authenticate, include the Authorization header in the request with the JWT. The header should be in the format: Bearer `<token>`, where `<token>` is the JWT obtained during the login process.

### Endpoints

#### Owner SignUp

URL: `owners/signup` 
* Method: POST
* Description: Registers a new owner.
* Request Body:

* `name`: The user's name.
* `email`: The user's email address.
* `password`: The user's password.

###### response

```json
" message: "Owner created successfully",
       newOwner,
```


### Owner Login 

 URL:  `owners/login`
* Method: POST
* Description: Authenticates an owner.
* Request Body:

* `email`: The user's email address.
* `password`: The user's password.

###### response:

* Status: 200 OK
* Content-Type: application/json

```json
" message: "Owner logged in successfully",
       "token": "<JWT>"
```

#### Get All Authors

* URL: `/authors`
* Method: GET
* Description: Retrieves all authors.

 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: Array of issue objects with the following properties:

```json
[
  {
   
"id": "author_id",
"name": "author_name",
"created": "2023-10-16T10:31:57.642Z",
"updated": "2023-10-16T10:31:57.642Z"
   
  },
  ...
  
]
```
#### Create an Author

* URL: `/authors`
* Method: POST
* Description: Creat new author.
* Request Body:

* `name`: The author's name.


 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: Array of issue objects with the following properties:

```json
" message: "Owner created successfully",
       author,
```
#### Get All Books

* URL: `/books`
* Method: GET
* Description: Retrieves all Books.

 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: Array of issue objects with the following properties:

```json
[
  {
   
"id": "book_id",
"title": "title of book",
"price": "price of book",
"image": "image url",
"created": "2023-10-16T10:38:41.152Z",
"updated": "2023-10-16T10:38:41.152Z",
"authorId": "author_id"
"bookstoreId": "bookstore_id"
  },
  ...
  
]
```
#### Create  Book

* URL: `/books`
* Method: POST
* Description: Creat new Book.
* Authentication: Required
* Request Body:

* `title`: The book title.
* `price`: The book price.
* `image`: The book image.
* `authorId`: The author_id.
* `bookstoreId`: The bookstore_id .


 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: 

```json
" message: "book created successfully",
       newBook,
```
#### Update  Book

* URL: `/books/:id`
* Method: UPDATE
* Description: update Book.
* Authentication: Required

* `id`: The book's id to update.

* Request Body:

* `title`: updated title.
* `price`: updated price.
* `image`: updated image.
* `authorId`: updated author_id.
* `bookstoreId`: updated bookstore_id .


 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: 

```json
" message: "book updated successfully",
       book,
```

#### Delete  Book

* URL: `/books/:id`
* Method: DELETE
* Description: delete Book.
* Authentication: Required

* `id`: The book's id to delete


 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: 

```json
" message: "book deleted successfully",
       
```

#### Get All Bookstores

* URL: `/bookstores`
* Method: GET
* Description: Retrieves all Bookstores.

 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: Array of issue objects with the following properties:

```json
[
  {
   
"id": "book_id",
"name": "title of book",
"location": "price of book",
"created": "2023-10-16T10:38:41.152Z",
"updated": "2023-10-16T10:38:41.152Z",
"ownerId": "owner_id",

  },
  ...
  
]
```
#### Create Bookstore

* URL: `/bookstores`
* Method: POST
* Description: Creat new Bookstore.
* Request Body:

* `name`: The bookstore name.
* `location`: The bookstore location.
* `ownerId`: The owner_id.
.


 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: 

```json
" message: "bookstore created successfully",
       <newbookstore>,
```
#### Update  Bookstore

* URL: `/bookstores/:id`
* Method: UPDATE
* Description: update Bookstore.


* `id`: The bookstore's id to update.

* Request Body:

* `name`: updated name.
* `location`: updated location.
* `ownerId`: updated owner_id.



 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: 

```json
" message: "bookstore updated successfully",
       <bookstore>,
```

#### Delete  Bookstore

* URL: `/bookstores/:id`
* Method: DELETE
* Description: delete Bookstore.

* `id`: The bookstore's id to delete


 ###### Response:

* Status: 200 OK
* Content-Type: application/json
* Body: 

```json
" message: "bookstore deleted successfully",
       
```

