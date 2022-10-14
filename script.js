function insert(input){
  document.querySelector(".textview").value += input
}

function equals(){
  document.querySelector(".textview").value = (eval(document.querySelector(".textview").value))
}

function clean(){
  document.querySelector(".textview").value = ""
}

function back(){
  let data = document.querySelector(".textview").value
  document.querySelector(".textview").value = data.slice(0, -1)
}