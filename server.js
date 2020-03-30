const express = require('express')
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis excepturi tempora et fuga enim iusto alias nihil ducimus, facilis adipisci.",
        url: "https://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis excepturi tempora et fuga enim iusto alias nihil ducimus, facilis adipisci.",
        url: "https://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis excepturi tempora et fuga enim iusto alias nihil ducimus, facilis adipisci.",
        url: "https://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729009.svg",
        title: "Aprender Novas Receitas",
        category: "Culinária",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis excepturi tempora et fuga enim iusto alias nihil ducimus, facilis adipisci.",
        url: "https://rocketseat.com.br",
    },
]

//configurando arquivos estaticos
server.use(express.static('public'))

//configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

server.get("/", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = []

    for(let idea of reversedIdeas){
        if(lastIdeas.length < 3){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", {ideas: reversedIdeas})
})

server.listen(3000)