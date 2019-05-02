# Axios POST, PUT, PATCH DELETE



## Ironhack Movie Characters API

For this exercise we will be using the Ironhack Movie Characters API. It allows you to do full CRUD on the characters. Every character has these properties:

`name` - String
`occupation` - String
`weapon` - String
`debt` - Boolean (optional, defaults to false)



Here are the relevant API endpoints (routes) we will be using:

| Route             | HTTP Verb | Description                     |
| ----------------- | --------- | ------------------------------- |
| `/characters`     | GET       | List of all characters          |
| `/characters/:id` | POST      | Details of a specific character |
| `/characters/:id` | PUT/PATCH | Update a specific character     |
| `/characters/:id` | DELETE    | Delete a specific character     |


All these routes must be prefixed with the API’s base URL: https://ih-crud-api.herokuapp.com. You will see this often with API documentation: they give you the routes assuming that you will add the base URL.

For example, the full URL of the /characters route would be https://ih-crud-api.herokuapp.com/characters. Try to visit it in Postman.



## Exercise - Implement Axios DELETE

Implement the delete button calling the DELETE method on route https://ih-crud-api.herokuapp.com/characters/{id}   with the `axios.delete`



Use **Postman** and GET method to check on the API and if you successfuly deleted the document.  

### Query the API with Postman :

**GET**

```
https://ih-crud-api.herokuapp.com/characters
```
