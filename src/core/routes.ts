import { Router } from 'express'
import { userRoute } from '../apps/user/routes'

const router = Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get(`/health`, (req, res) => res.sendStatus(200));

router.get('/', (request, response) => {
    response.status(200).send("OK System")
})

router.use(userRoute)

export { router } 