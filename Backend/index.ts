import express from 'express';
import * as dotenv from 'dotenv';
import { putInstances } from './controller/putInstances';
dotenv.config({path: "./.env"});

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.put("/instances", putInstances);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})