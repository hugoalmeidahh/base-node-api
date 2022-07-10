import { app } from './main'

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT} \n url => http://localhost:${PORT}`);
});