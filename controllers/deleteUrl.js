import { Url } from "../models/url.models.js";

async function deleteUrl(req, res){
    const { id } = req.params;
    if((await Url.findOne({ "shortId": id })) !== null) {
        try {
            const result = await Url.deleteOne({ "shortId": id });
            res.status(200).json({ message: "success" });
        } catch (error) {
            res.status(500).json({ message: 'error' });
        }
    } else {
        res.status(404).json({ message: "not found" });
    }
}

export default deleteUrl;