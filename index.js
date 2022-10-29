const express = require ('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.json())

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

const mensagens = ["Essa é a primeira mensagem", "Essa é a segunda mensagem", "Essa é a mensagem 3"]

//[GET] /mensagens - Retorna a lista de mensagem
app.get('/mensagens', (req, res) => {
    res.send(mensagens)
})

//[GET] /mensagem/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1
    const mensagem = mensagens [id] 
    res.send(mensagem)
})
    
//[POST] / mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
    const mensagem = req.body.mensagem//Recebe as mesasgens informadas no body do Postman
    mensagens.push(mensagem)//Adiciona mensagens na lista
    res.send(`Mensagem criada com sucesso: ${mensagem}.`)
})


//[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => { //obter o id
    const id = req.params.id - 1 //Qual mensagem vai ser editada
    const mensagem = req.body.mensagem //pega a nova mensagem
    mensagens[id] = mensagem //atualiza a nova  mensagem na posição do id
    res.send(`Mensagem atualizada com sucesso: ${mensagem}.`)//mostra nova mensagem
})

//[DELETE] /mensagens/{id} - Remove uma mensagem pelo ID
app.delete('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1
    delete mensagens[id]
    res.send(`Mensagem removida com sucesso!`)
})

app.listen(port, () => {// => arrow function
    console.log(`App rodando na porta: ${port} `)//template stream
})