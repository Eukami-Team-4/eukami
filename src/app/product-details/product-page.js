let quantityEl = document.getElementById("quantity")
let quantityNum = Number(quantityEl.value)

function add(){
  if(quantityNum <99){
    
quantityEl.value = quantityNum +=1
  }
}

function remove(){

  if (quantityNum > 1)
  quantityEl.value = quantityNum -=1
  }