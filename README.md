# REST-tutorial

## [`REST`](https://ko.wikipedia.org/wiki/REST)

## [`Node.js-Express-MongoDB with postman`](https://juminhark.github.io/restapi.html)

### Init

```sh
npm init
```

- login [`mongoDB`](https://account.mongodb.com/account/login?signedOut=true)
- install [`postman`](https://www.postman.com/)

### Dependencies

```sh
npm install express nodemon mongoose dotenv body-parser
```

### Craete Server

```ts
// app.js
const express = require('express');
const app = express();

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});

//How to we start listening to the server
app.listen(3000);
```

### Nodemon

```ts
// pakage.json
  ...
  "scripts": {
    "start": "nodemon app.js"
  },
  ...
```

### Route

```ts
```
