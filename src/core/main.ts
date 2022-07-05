import express from 'express';
import bodyParser from 'body-parser';

import { router } from './routes';

const app = express();

app.use(bodyParser.json())
app.use(router)


export { app }
// const port = 3000;

// app.get('/', (req, res, next) => {
//   res.send( "ok")
// });

// app.listen(port, () => {
//   return console.log(`server is listening on ${port}`);
// });