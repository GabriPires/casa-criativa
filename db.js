const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(() => {

    // criar a tabela
    db.run(`CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );`)

    //inserir dados
    // const query = `
    // INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES(?,?,?,?,?);`

    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //     "Cursos de Programação",
    //     "Estudo",
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis excepturi tempora et fuga enim iusto alias nihil ducimus, facilis adipisci.",
    //     "https://rocketseat.com.br",
    // ]

    // db.run(query, values, (err) => {
    //     if(err) return console.log(err)

    //     console.log(this)
    // })

    // deletar um dado
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], (err) =>{
    //     if(err) return console.log(err)

    //     console.log('Deletei', this)
    // })

    // consultar dados
    // db.all(`SELECT * FROM ideas`, (err, rows) => {
    //     if(err) return console.log(err)

    //     console.log(rows)
    // })

})

module.exports = db;