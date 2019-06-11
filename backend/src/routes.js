const routes = require('express').Router();
const multer = require('multer'); 
const multerConfig = require('./config/multer');

routes.get('/teste', () => {
    console.log('testeeee');
})

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    
    console.log(req.file);
    return res.json({resp: 'olá'});
});

module.exports = routes;