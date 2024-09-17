
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const itens = require('./controllers/item')




// n passsaaaaaaaaaaaaaaaaaaaaaa


app.post("/item", (req, res) => {
    const {name,price , color , dimenson} = req.body
 
    if(!name || ! price || ! color ||! dimenson){
        return res.status(400).json({ message: 'Os items não foram cadastrado!'})
        
    }
 
    const item =create_item(name ,price ,color, dimenson)
    return res.status(200).json({ message: 'Sucesso itens cadastrado ', itens: item})
 
} )

app.get("/item", (req, res) => {
    
    return res.status(200).json({ message: 'Sucesso itens encontrado ', itens: itens})
 
} )

app.put("/item/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name ,price ,color, dimenson} = req.body

    let retorno = up_id(id,name ,price ,color, dimenson)
    return res.status(retorno.status).json(retorno.msg)

} )


app.delete("/item/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(delete_item(id)){
        return res.status(201).json("Deletado")

    }
    else {
        return res.status(404).json("Não encontrou")

    }
                        

}
    


)



app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
    


