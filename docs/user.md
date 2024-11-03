# User API Spec

## Register User API
Endpoint: POST /api/users

Request Body:
```json
{
  "username": "among",
  "password": "rahasia",
  "name": "Among Bagas Punarbawa Purnama"
}
```

Response Body Success:
```json
{
  "data" : {
    "username": "among",
    "name" : "Among Bagas Punarbawa Purnama"
  }
}
```

Response Body Errors: 
```json
{
  "errors": "Username already registered"
}
```

## Login User API
Endpoint: POST /api/users/login

Request Body:
```json
{
  "username": "among",
  "password": "rahasia"
}
```

Response Body Success:
```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error:
```json
{
  "errors": "Username or Password wrong"
}
```

## Update User API
Endpoint: PATCH /api/users/current

Headers:
- Authorization: Token

Request Body: 
```json
{
  "name": "Among Bagas Lagi",
  "password": "new rahasia"
}
```

Response Body Success:
```json
{
  "data": {
    "username": "among",
    "name": "Among Bagas Lagi"
  }
}
```

Response Body Error:
```json
{
  "errors": "Name length max 100"
}
```

## Get User API
Endpoint: GET /api/users/current

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": {
    "username": "among",
    "name": "Among Bagas Punarbawa Purnama"
  }
}
```

Response Body Error:
```json
{
  "errors": "Unauthorized"
}
```

## Logout User API
Endpoint: DELETE /api/users/logout

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": "OK"
}
```

Response Body Error:
```json
{
  "errors": "Unauthorized"
}
```