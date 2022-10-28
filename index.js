const express = require ('express')
const app = express()

const port = 3000

app.post('/hello', (req, res) => { //arrow function
    res.send('Hello World 1')
})

/*
Lista de Endpoints da aplicação CRUD de mensagens
CRUD: Creat(criar), Read(ler) (Single(individual) & All(tudo)), Update(atualizar) and Delete(remover)
-[GET] /mensagens - Retorna a lista de mensagem
-[GET] /mensagem/{id} - Retorna apenas uma única mensagem pelo ID
-[POST] /mensagens - Cria uma nova mensagem
-[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
-[DELETE] /mensagens/{id} - Remove uma mensagem pelo ID
*/

const mensagens = ["Essa é a primeira mensagem", 
                  "Essa é a segunda mensagem"]

//[GET] /mensagens - Retorna a lista de mensagem
app.get('/mensagem', (req, res) => {
    res.send(mensagens)
})

//[GET] /mensagem/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagem/:id', (req, res) => {
    const id = req.params.id - 1
    const mensagem = mensagens [id] 
    res.send(mensagem)
})
    
//[POST] / mensagens - Cria uma nova mensagem


//[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
//[DELETE] /mensagens/{id} - Remove uma mensagem pelo ID

app.listen(port, () => {// => arrow function
    console.log(`App rodando na porta: ${port} `)
})