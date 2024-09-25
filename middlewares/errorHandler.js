function errorHandler(req, res, next) {
    const body = req.body;
    switch (req.method) {
        case 'POST':
            if(!body || !body.redirectUrl) {
                res.status(400).json({ message: "bad request"});
            } else {
                next();
            }
            break;
        default:
            next();
            break;
    }
}

export default errorHandler;