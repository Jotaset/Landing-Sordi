// busca dos itens interativos na pagina
let list = document.querySelectorAll('.cardItem')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

//contagem de itens da lista e parametro par item active
let count = list.length
let active = 0

//arrow function para fazer com que no clique do botao a classe seja removida do item que esta sendo exposto
next.onclick = () => {
  let activeOld = document.querySelector('.active')
  activeOld.classList.remove('active')

  active = active >= count -1 ? 0 : active+1
  list[active].classList.add('active')
}

prev.onclick = () => {
  let activeOld = document.querySelector('.active')
  activeOld.classList.remove('active')

  active = active <= 0 ? count - 1 : active -1
  list[active].classList.add('active')
}