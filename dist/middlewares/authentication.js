import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    if (!process.env.JWT_SECRET) {
        res.status(500).json({ message: 'JWT Secret not configured' });
        return;
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                res.status(403).json({ message: 'Token has expired' });
            }
            else {
                res.status(403).json({ message: 'Invalid token' });
            }
            return;
        }
        req.user = user;
        next();
    });
};
//# sourceMappingURL=authentication.js.map