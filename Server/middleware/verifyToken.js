const jwt = require('jsonwebtoken');


function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payLoad) => {
        if (err) {
            return res.status(401).send({
                msg: 'failed to authenticate'
            });
        }

        req.tokenData = payLoad;
        next();
    });
}

module.exports = authenticateToken