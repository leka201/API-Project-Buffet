
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
 
var itens = []
function create_item(name ,price){
    let id = 0
    if (itens .length > 0 ) id = itens [itens.length -1].id +1

    const item = {
        "id": id,
        "name": name,
        "price": price,
      
    }
    itens.push(item)
    return item
}

function up_id(id,name,price){
  let idx =  itens.findIndex(item => item.id == id)

  if(idx == -1 ){
    return {status:404, msg: "Não achei "}
  }

  if(name) itens[idx].name = name

  if(price) itens[idx].price = price
   
  return{status : 200 , msg: itens[idx]}
}

function delete_item(id){
    let idx = itens.findIndex(item =>item.id === id ) 
    if(idx == -1){
        return false
    }
    itens.splice(idx , 1 )
    return true
}




// n passsaaaaaaaaaaaaaaaaaaaaaa


app.post("/item", (req, res) => {
    const {name,price} = req.body
 
    if(!name || ! price){
        return res.status(400).json({ message: 'Os items não foram cadastrado!'})
        
    }
 
    const item = create_item(name ,price)
    return res.status(200).json({ message: 'Sucesso itens cadastrado ', itens: item})
 
} )

app.get("/item", (req, res) => {
    
    return res.status(200).json({ message: 'Sucesso itens cadastrado ', itens: itens})
 
} )

app.put("/item/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name,price} = req.body

    let retorno = up_id(id,name,price)
    return res.status(retorno.status).json(retorno.msg)

} )


app.delete("/item/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(delete_item(id)){
        return res.status(201).json("foi de base")

    }
    else {
        return res.status(404).json("n encontrou")

    }
                        

}
    


)



app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
    


