const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    const text = document.getElementById('text').value;
    const greet = document.getElementById('greet');
    
    greet.innerText = ` Hello ${text}`;
});

const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

red.addEventListener('click', function(){
    const header = document.querySelector('header');
    const greet = document.querySelector('#greet');
    const main = document.querySelector('main');
    const inText = document.querySelector('#text');

    header.style.backgroundColor = '#590D22'
    greet.style.color = '#FFCCD5'
    main.style.backgroundColor = '#A4133C'
    btn.style.backgroundColor = '#FF4D6D'
    btn.style.color = '#FFF0F3'
    inText.style.backgroundColor = '#FFCCD5'
    inText.style.color = '#FF4D6D'
})
yellow.addEventListener('click', function(){
    const header = document.querySelector('header');
    const greet = document.querySelector('#greet');
    const main = document.querySelector('main');
    const inText = document.querySelector('#text');

    header.style.backgroundColor = '#FF7B00'
    greet.style.color = '#FFEA00'
    main.style.backgroundColor = '#FFA200'
    btn.style.backgroundColor = '#FF8800'
    btn.style.color = '#FFEA00'
    inText.style.backgroundColor = '#FFAA00'
    inText.style.color = '#FFEA00'
})
green.addEventListener('click', function(){
    const header = document.querySelector('header');
    const greet = document.querySelector('#greet');
    const main = document.querySelector('main');
    const inText = document.querySelector('#text');

    header.style.backgroundColor = '#132A13'
    greet.style.color = '#ECF39E'
    main.style.backgroundColor = '#31572C'
    btn.style.backgroundColor = '#4F772D'
    btn.style.color = '#ECF39E'
    inText.style.backgroundColor = '#31572C'
    inText.style.color = '#ECF39E'
})
blue.addEventListener('click', function(){
    const header = document.querySelector('header');
    const greet = document.querySelector('#greet');
    const main = document.querySelector('main');
    const inText = document.querySelector('#text');

    header.style.backgroundColor = '#03045E'
    greet.style.color = '#CAF0F8'
    main.style.backgroundColor = '#0077B6'
    btn.style.backgroundColor = '#48CAE4'
    btn.style.color = '#ADE8F4'
    inText.style.backgroundColor = '#00B4D8'
    inText.style.color = '#03045E'
})
