const jwt = require("jsonwebtoken");

exports.checkToken = (request, response, next) => {
    const token = request.headers['x-authorized-token'];

    if (!token) {
        response.status(401).send("Unauthorized")
    } else {
        jwt.verify(token, process.env.TOKEN_KEY, function (error, decoded) {
            if (error) {
                response.status(401).send("Unauthorized")
            } else {
                request.body.userData = decoded
            }
        })
    }
    next()
}