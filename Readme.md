# Blog List Chanllenge

This folder contained a project with 2 parts:
**Fake REST API** using [Json-server](https://github.com/typicode/json-server). 
**React With Typescript** using [React](https://reactjs.org/)

## Getting started

### 1. Clone example and install dependencies

Clone this repository:

```
git clone https://github.com/nidou-bt/blog-list-challenge.git
cd blog-list-challenge
```

Install npm dependencies:

```
cd client
npm install
cd ../server
npm install
```

### 2. Start the REST API server

```
npm run start
```

The server is now running on `http://localhost:3001`. You can now run the API requests, e.g. [`http://localhost:3001/blogs`].

Now, You can access the REST API of the server using the endpoint: localhost:3001

## Next steps
To Start the react client you need to follow this steps:
First add .env file with "REACT_APP_BASE_URL"="3001". You can find an example of the file with name .env.example.
After that you can run the following script
```
npm run start
```
