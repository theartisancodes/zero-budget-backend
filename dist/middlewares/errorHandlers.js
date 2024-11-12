export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
};
//# sourceMappingURL=errorHandlers.js.map