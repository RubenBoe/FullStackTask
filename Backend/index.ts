import express from 'express';
import cors from "cors";
import * as dotenv from 'dotenv';
import { putInstances } from './controller/putInstances';
import { getNumberOfHumansPerTime } from './controller/getPlotData';
dotenv.config({path: "./.env"});

const app = express()
const port = 3000

app.use(express.json({limit: '50mb'}));
app.use(cors());

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World!')
})

app.put("/instances", putInstances);
app.get("/humansPerTime", getNumberOfHumansPerTime);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})