import { Router, Request, Response } from "express";
import { createUser, listUsers } from "./services"

const userRoute = Router()

const USERS = '/users'

userRoute.get(`${USERS}`, async (req, res) => {
  const users = await listUsers()
  res.status(200).send(users)
})

userRoute.post("/user", async function (req: Request, res: Response) {
  // const user = await myDataSource.getRepository(User).create(req.body)
  // const results = await myDataSource.getRepository(User).save(user)
  const payload = req.body
  const results = await createUser(payload)
  return res.status(201).send(results)
})


// userRoute.get(`${USERS}`, (req, res) => {
//   const users = [{ "ïd": 1, "name": "Hugo" }, { "ïd": 2, "name": "Jurema" }]
//   res.status(200).send(users)
// })

// userRoute.get(`${USERS}/:id`, (req, res) => {
//   const users = [{ "ïd": 1, "name": "Hugo" }]
//   res.status(200).send(users)
// })

// userRoute.post('USERS', (req, res) => {
//   res.status(201).send("user created")
// })



export { userRoute }