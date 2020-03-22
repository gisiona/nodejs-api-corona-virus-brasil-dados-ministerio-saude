const { Router } = require('express');
const axios = require('axios');
const service = require('./services');
const routes = new Router();
const BASE_URL = 'https://api.coronaanalytic.com';


routes.get('/', (req, res) => {
    console.log("URL: " + BASE_URL);
    
    axios.get(BASE_URL).then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});

routes.get('/brasil', (req, res) => {
    console.log("URL: " + BASE_URL + "/brazil");

    axios.get(BASE_URL + "/brazil").then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});


routes.get('/world', (req, res) => {
    console.log("URL: " + BASE_URL + "/world");

    axios.get(BASE_URL + "/world").then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});

routes.get('/brasil/estado/:id', (req, res) => {
    console.log("URL: " + BASE_URL + "/brazil/" + req.params.id);

    axios.get(BASE_URL + "/brazil/" + req.params.id).then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});


routes.get('/world/china', (req, res) => {
    console.log("URL: " + BASE_URL + "/world/CN");

    axios.get(BASE_URL + "/world/CN").then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});

routes.get('/historico/brasil', (req, res) => {
    console.log("URL: " + BASE_URL + "/history/brazil");

    axios.get(BASE_URL + "/history/brazil").then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});

routes.get('/historico/brasil/estado/:id', (req, res) => {
    console.log("URL: " + BASE_URL + "/history/brazil/" + req.params.id);

    axios.get(BASE_URL + "/history/brazil/" + req.params.id).then(function(resposta){
        console.log(resposta.data);
        return res.json({ data: resposta.data })
    }).catch(function(error){
        console.log("ERRO");
        return res.status(500).json({ erro: error })
    });
});


module.exports = routes;