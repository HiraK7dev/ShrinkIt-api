import { Url } from "../models/url.models.js";
import { nanoid } from "nanoid";

async function createUrl(req, res) {

    const shortId = nanoid(9);
    
    try {
        const result = await Url.create({
            shortId: shortId,
            redirectUrl: req.body.redirectUrl,
        });
        res.status(201).json({
            message: 'success',
            shortId: shortId
        });
    } catch (error) {
        res.status(500).json({ message: 'error' });
        console.log(error);
        
    }
}

export default createUrl