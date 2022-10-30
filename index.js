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

/*Transformando uma lista de texto em uma lista de objetos
Lista de texto:
const mensagens = ["Essa é a primeira mensagem", "Essa é a segunda mensagem", "Essa é a mensagem 3"]
*/
//Lista de Objetos
const mensagens = [
    {
    "id": 1,
    "texto": "Essa é a primeira mensagem"
    },
    {
        "id": 2,
        "texto": "Essa é a segunda mensagem"
    },
    {
        "id": 3,
        "texto": "Essa é a mensagem 3"
    }
]

//[GET] /mensagens - Retorna a lista de mensagem
app.get('/mensagens', (req, res) => {
    res.send(mensagens.filter(Boolean))//Filter Boolean exibe apenas mensagens com conteudo, não mostra null após o delete
})

//[GET] /mensagem/{id} - Retorna apenas uma única mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1
    const mensagem = mensagens[id]
    
    //Validação caso não encontre a mensagem
    if (!mensagem) {
        res.send('Mensagem não encontrada!')
        return
    }

    res.send(mensagem)
})
    
//[POST] / mensagens - Cria uma nova mensagem
app.post('/mensagens', (req, res) => {
    const mensagem = req.body//Recebe as mesasgens informadas no body do Postman
    //Gerando o ID
    mensagem.id = mensagens.length + 1
    //Verificar se mesagem existe e testo existe
    if (!mensagem || mensagem.texto) {
        res.send('Mensagem Inválida!')
        return
    }
    mensagens.push(mensagem)//Adiciona mensagens na lista
    res.send(mensagem)
})


//[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', (req, res) => { //obter o id
    const id = req.params.id - 1 //Qual mensagem vai ser editada

    const mensagem = mensagens[id]//Obter a mensagem na lista de mensagem
    const novoTexto = req.body.texto //pega a nova mensagem que quer atualizar
    if (!novoTexto) {//Caso não tenha um novo texto
        res.send('Mensagem Inválida!')
        return
    }
    mensagem.texto = novoTexto //Atualiza a mensagem
    

    res.send(mensagem)//mostra nova mensagem
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
