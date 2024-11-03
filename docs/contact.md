# Contact API Spec

## Create Contact API
Endpoint: POST /api/contacts

Headers: 
- Authorization: Token

Request Body:
```json
{
  "first_name": "Among",
  "last_name": "Bagas",
  "email": "bagas@gmail.com",
  "phone": "08123456789"
}
```

Response Body Success:
```json
{
  "data": {
    "id": 1,
    "first_name": "Among",
    "last_name": "Bagas",
    "email": "bagas@gmail.com",
    "phone": "08123456789"
  }
}
```

Response Body Error: 
```json
{
  "errors": "Email is not valid"
}
```

## Update Contact API
Endpoint: PUT /api/contacts/:id

Headers:
- Authorization: Token

Request Body:
```json
{
  "first_name": "Among",
  "last_name": "Bagas",
  "email": "bagas@gmail.com",
  "phone": "08123456789"
}
```

Response Body Success:
```json
{
  "data": {
    "id": 1,
    "first_name": "Among",
    "last_name": "Bagas",
    "email": "bagas@gmail.com",
    "phone": "08123456789"
  }
}
```

Response Body Error:
```json
{
  "errors": "Email is not valid"
}
```

## Get Contact API
Endpoint: GET /api/contacts/:id

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": {
    "id": 1,
    "first_name": "Among",
    "last_name": "Bagas",
    "email": "bagas@gmail.com",
    "phone": "08123456789"
  }
}
```

Response Body Error:
```json
{
  "errors": "Contact not found"
}
```

## Search Contact API
Endpoint: GET /api/contacts

Query Params:
- name: Search by first_name or last_name using like, optional
- email: Search by email using like, optional
- phone: Search by phone using like, optional
- page: number of page, default 1
- size: size per page, default 10

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Among",
      "last_name": "Bagas",
      "email": "bagas@gmail.com",
      "phone": "08123456789"
    },
    {
      "id": 2,
      "first_name": "Among",
      "last_name": "Bagas",
      "email": "bagas@gmail.com",
      "phone": "08123456789"
    }
  ], 
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error:
```json
{
  "errors": "Contact not found"
}
```

## Remove Contact API
Endpoint: DELETE /api/contacts/:id

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
  "errors": "Contact not found"
}
```