var arrow = document.querySelector("#arrow > img")
var texts = document.querySelectorAll('.items span')
var main = document.querySelector('.main')

arrow.addEventListener('click',function(){
    // on clicking the arrow, toggle the class .hide on texts
    main.classList.toggle('small')
    for(var i=0;i<texts.length;i++){
        texts[i].classList.toggle('hide')
    }
})

