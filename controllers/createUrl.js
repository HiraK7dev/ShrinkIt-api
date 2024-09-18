import { Url } from "../models/url.models.js";
import { nanoid } from "nanoid";

const shortId = nanoid(9);

async function createUrl(req, res) {
    try {
        const result = await Url.create({
            shortId: shortId,
            redirectUrl: req.body.redirectUrl,
            log: []
        });
        res.status(201).json({
            message: 'success',
            shortId: shortId
        });
    } catch (error) {
        res.status(500).json({ message: 'error' });
    }
}

export default createUrl