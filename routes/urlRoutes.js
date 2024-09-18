import { Router } from "express";
import createUrl from "../controllers/createUrl.js";
import redirectUrl from "../controllers/redirectUrl.js";

const router = Router();

router.post('/url', createUrl);
router.get('/:id', redirectUrl);

export default router;