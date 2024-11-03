# Address API Spec

## Create Address API
Endpoint: POST /api/contacts/:contactId/addresses

Headers:
- Authorization: Token

Request Body:
```json
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "Kode pos"
}
```

Response Body Success:
```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode pos"
  }
}
```

Reponse Body Error:
```json
{
  "errors": "Country is required"
}
```

## Update Address API
Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization: Token

Request Body:
```json
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "Kode pos"
}
```

Response Body Success:
```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode pos"
  }
}
```

Reponse Body Error:
```json
{
  "errors": "Country is required"
}
```

## Get Address API
Endpoint: GET /api/contacts/:id/addresses/:addressId

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "Kode pos"
  }
}
```

Reponse Body Error:
```json
{
  "errors": "Contact not found"
}
```

## List Addresses API
Endpoint: GET /api/contacts/:contactId/addresses

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "Kode pos"
    },
    {
      "id": 2,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "Kode pos"
    }
  ]
}
```

Reponse Body Error:
```json
{
  "errors": "Contact not found"
}
```

## Remove Address API
Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Headers:
- Authorization: Token

Response Body Success:
```json
{
  "data": "OK"
}
```

Reponse Body Error:
```json
{
  "errors": "Address not found"
}
```