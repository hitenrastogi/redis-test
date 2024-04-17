const express = require("express");
const express = require("redis");
const express = require("body-parser");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
let redisClient;
(async () => {
    redisClient = redis.createClient();

    redisClient.on("error", (error) => console.error(error));

    await redisClient.connect();
})();


async function setData(req, res) {
    const { key, value } = req.body;

    try{
        await redisClient.set(key, value);

        res.send({
            data: "Key stored in Redis"
        });
    } catch(error){
        res.status(500).send("Error storing key in Redis");
    }
}

async function getData(req, res) {
    const { key } = req.params;

    try {
        const value = await redisClient.get(key);
        res.send({
            data: value
        });
    } catch (error) {
        res.status(404).send("Key not found");
    }
}

app.get("/redis/:key", getData);
app.post("/redis", setData);

app.listen(port, () => {
    console.log("App listening on port", port);
})