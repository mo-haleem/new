var arrow = document.querySelector("#arrow > img")
var texts = document.querySelectorAll('.items span')
var anything = document.querySelector('.main')


arrow.addEventListener('click',function(){
    // on clicking the arrow, toggle the class .hide on texts
    anything.classList.toggle('small')
    for(var i=0;i<texts.length;i++){
        texts[i].classList.toggle('hide')
    }
})


// list collapse
var list = document.getElementById('content')
var listToggler = document.getElementById('list_toggler')

listToggler.addEventListener('click',function(){
    list.classList.toggle('hide')
})

