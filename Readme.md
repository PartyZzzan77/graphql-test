# Sandbox for testing

[DEMO](https://express-graphql-server-example.onrender.com/graphql)

Get all movies

```js
{
  movies {
    name
    genre
  }
}
```

Get all the directors

```js
{
  directors {
    name
    age
  }
}
```

Add a director

```js
mutation ($name: String!, $age: String!) {
  addDirector(name: $name, age: $age) {
    name
    age
  }
}

//add query vaiables
{
  "name": "Steven Spielberg",
  "age": "76"
}
```

Add Movie

```js
mutation ($name: String!, $genre: String!, $directorId: ID) {
  addMovie(name: $name, genre: $genre, directorId: $directorId) {
    name
    genre
  }
}

//add query vaiables
{
  "name": "Jaws",
  "genre": "Thriller",
  "directorId": "test24"
}
```

Update Director

```js
mutation ($id: ID, $name: String!, $age: String!)
  updateDirector(id: $id, name: $name, age: $age) {
    name
    age
  }


//add query vaiables
{ "id": "63b438fc17c7360034080576",
  "name": "Steven Spielberg",
  "age": "77"
}
```

Update movie

```js
mutation ($id: ID, $name: String!, $genre: String!, $directorId: ID) {
  updateMovie(id: $id, name: $name, genre: $genre, directorId: $directorId) {
    name
    genre
  }
}

//add query vaiables
{ "id": "63b4362917c736003408056d",
  "name": "Jaws",
  "genre": "Drama",
  "directorId": "test42"
}
```
