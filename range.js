module.exports = (req, res, next) => {
    res.header('Content-Range', 'products 0-10/20');
    next()
};