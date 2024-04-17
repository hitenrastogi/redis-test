Prerequisites
. You should have node and npm installed.
. You should have docker installed and you should be able to successfuly run the command `docker run --rm -it -p 6379:6379 --name redis-server --network host redis`
. You should have API testing tool e.g POSTMAN installed

Steps to run the project

1. Open the terminal in the root of the project and run command - `npm i`. Wait for it to complete to install the dependencies
2. In the same terminal now type command - node `redis-server.js` to run the server to serve the endpoints
3. You will have two API endpoints to play with 
    a. GET - http://localhost:9000/redis/{key} - to get any key value from redis
    b. POST - http://localhost:9000/redis with body {"key": {your redis key}, "value": {your redis key's value}} to persist the key value in redis