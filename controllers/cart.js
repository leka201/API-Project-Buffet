
var carts = []
function create_cart(items ,client_id){
    let id = 0
    if (carts.length > 0 ) id = carts[carts.length -1].id +1
 
    const cart = {
        "itens": items,
        "IDcliente": client_id
      
    }

    
    carts.push(cart)
    return cart
}

function read_cart(){
    return carts
}
 
function up_id(id,name,price){
  let idx =  carts.findIndex(cart => cart.id == id)
 
  if(idx == -1 ){
    return {status:404, msg: "Não accarthei "}
  }
 
  if(name) carts[idx].name = name
 
  if(price) carts[idx].price = price
   
  return{status : 200 , msg: cart[idx]}
}

function delete_cart(id){
    let idx = carts.findIndex(cart=> cart.id === id)
    if(idx == -1){
        return false
    }
    carts.splice(idx, 1)
    return true
}

module.exports = {
    create_cart,
    read_cart,
    up_id,
    delete_cart
}