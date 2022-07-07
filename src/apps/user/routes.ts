import { Router } from "express";

const userRoute = Router()

const USERS = '/users'

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