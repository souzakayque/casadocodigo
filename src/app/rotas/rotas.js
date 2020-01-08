const baseRoute = require('./base-route');
const livroRoute = require('./livro-route');

module.exports = (app) => {
    
    baseRoute(app);
    livroRoute(app);
    
};