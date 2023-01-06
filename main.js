var virada2 = document.getElementById('virada2') 
var fotoVirada2 = document.getElementById('fotoVirada2') 
var tabClose = document.getElementById('virada2_BG')
var btnXclose = document.getElementById('btnXclose')
var container2 = document.getElementsByClassName('container-2')

.addEventListener('scroll',viradaClose)

function foto_click(){
    virada2.style.display = 'flex'
    fotoVirada2.style.display = 'flex'
    tabClose.style.display = 'flex'
    btnXclose.style.display = 'inline-block'

}

function viradaClose() {
    tabClose.style.display = 'none'
    fotoVirada2.style.display = 'none'
    btnXclose.style.display = 'none'
}