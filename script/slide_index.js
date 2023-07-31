const btnleft = document.querySelector('.left')
const btnright = document.querySelector('.right')
const title = document.querySelector('.title')
const subtitle = document.querySelector(".subtitle")
const image = document.querySelector('.slide')


var img = 1
var x = 0


function rodar(slide){
    if (slide != undefined) {
        x = slide
      } 
    img = img + x
    if(img == 5){img = 1}
    if(img <= 0){img = 4}
      image.style.backgroundImage = `url('../assets/slide-home/img${img}_home.jpeg')`
      
    switch(img){
        case 1:
            title.innerHTML = "ARTE CREW"
            subtitle.innerHTML = "A conexão entre o público e a arte urbana."
            break;
        case 2:
            title.innerHTML = "ARTE URBANA"
            subtitle.innerHTML = "Aqui vc encontra diversos grafiteiros com estilos diferentes."
            break;
        case 3:
            title.innerHTML = "MATERIAS"
            subtitle.innerHTML = "Sempre procurando o melhor produto para nossos clientes."
            break;
        case 4:
            title.innerHTML = "PREÇOS"
            subtitle.innerHTML = "Acessíveis e variáveis."
            break;

    }

}


btnright.addEventListener('click', function() {
    rodar(1);
  })
btnleft.addEventListener('click', function() {
    rodar(-1);
  })