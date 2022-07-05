import { app } from './main'

const PORT = 3000

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT} \n url => http://localhost:${PORT}`);
});