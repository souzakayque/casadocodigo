const LivroController = require('./LivroController')
const templates = require('../views/template');

class BaseController {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        }
    }

    efetuaLogin() {
        return function(req, res, next) {
            
            const passport = req.passport;

            passport.authenticate('local', (erro, usuario, info) => {
                if(info){
                    return res.marko(template.base.login)
                }

                if(erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if(erro) {
                        return next(erro);
                    }

                    return res.redirect(LivroController.rotas().lista);
                });

            })(req, res, next);
        };
    }

    home() {
        return function(req, res) {
            res.marko(
                templates.base.home
            );
        };
    }

    login() {
        return function(req, res) {
            res.marko(templates.base.login);  
        }
    }

}

module.exports = BaseController;