import "reflect-metadata"
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { myDataSource } from './datasource'

import { router } from './routes';

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app: Application = express();

app.use(bodyParser.json())
app.use(router)

export { app }
