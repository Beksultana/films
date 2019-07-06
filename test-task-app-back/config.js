const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public,uploads'),
    filmsDb: 'mongodb://localhost/films',
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
};