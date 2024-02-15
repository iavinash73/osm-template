const express = require('express')
const cors = require('cors')
const port = 3001;
const app = express();
app.use(cors());
app.use(express.json());
// import Redis from "ioredis";
const redis = require('redis');

const redisHost = 'apn1-hardy-escargot-34926.upstash.io';
const redisPort = 34926; // Upstash usually uses the default Redis port
const redisPassword = '42a1cb22fa384d6d86068883aca02fe1';

const client = redis.createClient({
    host: redisHost,
    port: redisPort,
    password: redisPassword,
});

client.on('connect', () => {
    console.log('Connected to Upstash Redis');
});
client.on('error', (err) => {
    console.error('Redis Error:', err);
});

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});
