const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const Livro = require('../models/Livro');

module.exports = (app) => {
    const rotasLivro = LivroController.rotas();
        
    app.use(rotasLivro.autenticadas, livroController.checkSession());

    app.get(rotasLivro.lista, livroController.list());
    
    app.route(rotasLivro.cadastro)
        .get(livroController.formularioCadastro())
        .post(Livro.validacoes(), livroController.cadastra())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.delete(rotasLivro.delecao, livroController.remove());
};