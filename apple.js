const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

setInterval(() =>{
    let date = new Date()
    let dHour = date.getHours()
    let dMinute = date.getMinutes()
    let dSec = date.getSeconds()

    hour.innerHTML = `${formatTime(dHour)}`
    min.innerHTML = `${formatTime(dMinute)}`
    sec.innerHTML = `${formatTime(dSec)}`
}, 1000)

function formatTime(time){
    return time < 10 ? '0' + time : time
}

var dia = document.querySelector('.dia-details') 
var bateria = document.querySelector('.details-bateria')
var notifica = document.querySelector('.container-notifica')
var  btnArrasta = document.getElementById('btn-arrasta')
var ligar = document.querySelector('.btn-liga')
var wallpeper = document.querySelector('.celular-img')
var Ligar2 = document.querySelector('.btn-liga2')
var sinais = document.querySelector('.sinais')
var tab = document.querySelector('.details-tab')
var titulo = document.querySelector('.titulo-ligar') 
var desligar = document.querySelector('.btn-desligar')

function ligarDesligar(){
    if(ligar.style.display = 'none'){
        dia.style.display = 'block'
        bateria.style.display = 'block'
        notifica.style.display = 'block'
        btnArrasta.style.display = 'block'
        wallpeper.style.display ='block'
        sinais.style.display = 'flex'
        tab.style.display = 'block'
        titulo.style.display = 'none'
         desligar.style.display = 'block'
    }
}



var img1 = document.getElementById('image-1')
var img2 = document.getElementById('image-2')
var img3 = document.getElementById('image-3')
var img4 = document.getElementById('image-4')

var btn1 = document.getElementById('btn-1')
var btn2 = document.getElementById('btn-2')
var btn3 = document.getElementById('btn-3')
var btn4 = document.getElementById('btn-4')

function image1(){
    if(img1.style.display = 'flex'){
        img2.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'
        
        btn1.style.border = '3px solid black'
        btn2.style.border = '0px solid black'
        btn3.style.border = '0px solid black'
        btn4.style.border = '0px solid black'
    }
}

function image2(){
    if(img2.style.display = 'flex'){
        img1.style.display = 'none'
        img3.style.display = 'none'
        img4.style.display = 'none'

        btn2.style.border = '3px solid black'
        btn1.style.border = '0px solid black'
        btn3.style.border = '0px solid black'
        btn4.style.border = '0px solid black'
    }
}

function image3(){
    if(img3.style.display = 'flex'){
        img1.style.display = 'none'
        img2.style.display = 'none'
        img4.style.display = 'none'

        btn3.style.border = '3px solid black'
        btn1.style.border = '0px solid black'
        btn2.style.border = '0px solid black'
        btn4.style.border = '0px solid black'
    }
}

function image4(){
    if(img4.style.display = 'flex'){
        img1.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'none'

        btn4.style.border = '3px solid black'
        btn3.style.border = '0px solid black'
        btn2.style.border = '0px solid black'
        btn1.style.border = '0px solid black'
    }
}


// senha celular //

var btnArrasta = document.getElementById('btn-arrasta')
var senhas = document.querySelector('.container-senha')
function arrastar(){
    if(btnArrasta.style.display = 'none'){
        dia.style.display = 'none'
        bateria.style.display = 'none'
        notifica.style.display = 'none'
        btnArrasta.style.display = 'none'
        sinais.style.display = 'none'
        tab.style.display = 'none'
        titulo.style.display = 'none'
        telaiN.style.display = 'none'
        senhas.style.display = 'block'
    }
}

function voltar(){
    if(btnArrasta.style.display = 'none'){
        dia.style.display = 'block'
        bateria.style.display = 'block'
        notifica.style.display = 'block'
        btnArrasta.style.display = 'block'
        sinais.style.display = 'flex'
        tab.style.display = 'block'
        senhas.style.display = 'none'
    }
}


var numeros = document.querySelector('.numbers')
var circulo1 = document.getElementById('senhaBTN-1')
var circulo2 = document.getElementById('senhaBTN-2')
var circulo3 = document.getElementById('senhaBTN-3')
var containerSenha = document.querySelector('.container-senha')
var telaiN = document.querySelector('.tela-inicial')
function senhaclick1(){
    if(circulo1.style.background = 'white'){
        
    }
}
function senhaclick2(){
    if(circulo2.style.background = 'white'){
    }
}
function senhaclick3(){
    if(circulo3.style.background = 'white'){
        containerSenha.style.display = 'none'
        telaiN.style.display = 'block'
        sinais.style.display = 'flex'
    }
}

/* APP NOTAS */
var buttonsCor = document.querySelector('.button-cor')
var appNotas = document.querySelector('.app-notas')
var camera = document.querySelector('.camera')
function notasLibera(){
    if(appNotas.style.display = 'block'){
        telaiN.style.display = 'none'
    }
}


function voltarInicio(){
    if(appNotas.style.display = 'none'){
        telaiN.style.display = 'block'
    }
}

/* APP CAMERA */
var appCamera = document.querySelector('.app-camera')
var btncor1 = document.getElementById('btn-1')
function cameraLibera(){
    if(appCamera.style.display = 'block'){
        telaiN.style.display = 'none'
    }
}

function voltarInicio2(){
    if(appCamera.style.display = 'none'){
        telaiN.style.display = 'block'
    }
}


/* APP GALERIA */
var appGaleria = document.querySelector('.app-galeria')
function galeriaLibera(){
    if(appGaleria.style.display = 'block'){
        telaiN.style.display = 'none'
    }
}

var fotosImg = document.querySelector('.fotos-container')
var setaFotos = document.querySelector('.seta-fotos')
var inicialFt = document.querySelector('.inicial-fotos')
var tituloFtvd = document.querySelector('.ft-videos')
function setaFt(){
    if(setaFotos = setaFotos.style.display = 'none'){
        inicialFt.style.display = 'block'
        tituloFtvd.style.display = 'none'
        fotosImg.style.display = 'none'
    }
}

var blockFtVd = document.querySelector('.galeria-ftvd')

function galeriaAberta(){
    if(blockFtVd = blockFtVd.style.display = 'none'){
        inicialFt.style.display = 'none'
        fotosImg.style.display = 'flex'
        setaFotos.style.display = 'block'
    }
}
blockFtVd.addEventListener('click', galeriaAberta)


function voltarInicio3(){
    if(appGaleria.style.display = 'none'){
        telaiN.style.display = 'block'
    }
}


/* APP APPLE STORE */
var storeOp = document.querySelector('.store-op')
var gesto4 = document.querySelector('.btn-gesto4')
var appStore = document.querySelector('.app-store')
var camera4 = document.querySelector('.camera4')
var sinais4 = document.querySelector('.sinais4')
function storeLibera(){
    if(appStore.style.display = 'block'){
        telaiN.style.display = 'none'
        gesto4.style.display = 'block'
        storeOp.style.display = 'block'
        sinais4.style.display = 'flex'
        camera4.style.display = 'block'
    }
}

var search = document.querySelector('.search-store')
var storeCont = document.querySelector('.store-conteudo')
var searchTitulo = document.getElementById('pesquisa-store')
var todayTitulo = document.getElementById('today-store')
function searchLibera(){      
    if(storeCont.style.display = 'none'){
        search.style.display = 'block'
        searchTitulo.style.color = 'blue'
        todayTitulo.style.color = 'black'
    }
}

function inicioStore(){
    if(storeCont.style.display = 'block'){
        search.style.display = 'none'
        searchTitulo.style.color = 'black'
        todayTitulo.style.color = 'blue'
    }
}

function voltarInicio4(){
    if(appStore.style.display = 'none'){
        camera4.style.display = 'none'
        sinais4.style.display = 'none'
        storeOp.style.display = 'none'
        telaiN.style.display = 'block'
        gesto4.style.display = 'none'
    }
}





const myObserver = new IntersectionObserver((anima) =>{
    anima.forEach( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
}) 

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))



function parallax(e){
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        Layer.style.transform =  `translateX(${x}px) translateY(${y}px)`
    });
}
        
document.addEventListener("mousemove", parallax)