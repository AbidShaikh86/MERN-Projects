const menu = document.querySelector('#menu');
const close = document.querySelector('#close')
menu.addEventListener('click', function(){
    const side = document.getElementById('sidebar');
    side.style.display ='flex'
})
close.addEventListener('click', function(){
    const side = document.getElementById('sidebar');
    side.style.display ='none'
})