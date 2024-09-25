import { Router } from "express";
import createUrl from "../controllers/createUrl.js";
import redirectUrl from "../controllers/redirectUrl.js";
import deleteUrl from "../controllers/deleteUrl.js";
import analysis from "../controllers/analysis.js";

const router = Router();

router.route('/url').post(createUrl);
router.route('/:id').get(redirectUrl)
router.route('/url/:id').delete(deleteUrl);
router.route('/url/analysis/:id').get(analysis);

export default router;