## Todos App

An app to keep track of todo. We can create a new todo, delete a todo, update a todo and see list of todos.

### Techstack

```
Frontend: HTML, CSS, Javascript, React
Backend: NodeJS, Express
Database: MongoDB
```

### APIs

| METHOD | ENDPOINT  | DESCRIPTION      |
| ------ | --------- | ---------------- |
| GET    | /todos    | Get all todo     |
| GET    | /todos/id | Get todo with id |
| POST   | /todos    | Add new todo     |
| PATCH  | /todos/id | Update todo      |
| DELETE | /todos/id | Delete todo      |

### Schema
  ```javascript
{
    todoName: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
```

### Responce todo
todo:

```javascript
{
  id:ObjectId('637d35be85656616241ad9aa'),
  todoName: "Buy Milk",
  done: false,
  createdAt:2022-11-22T20:49:02.340+00:00,
  --v:0
}
```
### Steps to run

Navigate to server folder

- Make a .env file with

```
DB_USERNAME=<YOUR_USERNAME>
DB_PASSWORD=<YOUR_PASSWORD>
```
by using userName and password create your MONGODB_URL like following this
`mongodb+srv://${USERNAME}:${PASSWORD}@merntodo.2m1etob.mongodb.net/?retryWrites=true&w=majority`

Now run,

```npm
$ npm i
// If installation is successful
$ npm start
```

If server is up successfully, navigate to client folder

```npm
$ npm i
// If installation is successful
$ npm start
```



