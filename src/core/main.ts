import "reflect-metadata"

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { router } from './routes';
import { myDataSource } from './datasource'
import { User } from '../apps/user/models'

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })

const app = express();

app.use(bodyParser.json())
app.use(router)

app.post("/users", async function (req: Request, res: Response) {
  const user = await myDataSource.getRepository(User).create(req.body)
  const results = await myDataSource.getRepository(User).save(user)
  return res.send(results)
})


export { app }
