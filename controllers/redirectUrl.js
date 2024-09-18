import { Url } from "../models/url.models.js";

async function redirectUrl(req, res){
    const { id } = req.params;
    if((await Url.findOne({ "shortId": id })) !== null) {
        try {
            const result = await Url.findOne({ "shortId": id });
            res.status(302).redirect(result.redirectUrl);
        } catch (error) {
            res.status(500).json({ message: 'error' });
        }
    } else {
        res.status(404).json({ message: "not found" });
    }
}

export default redirectUrl;