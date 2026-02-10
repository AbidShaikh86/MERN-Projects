const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    const text = document.getElementById('text').value;
    const greet = document.getElementById('greet');
    
    if(text === ""){
        greet.innerText = `Hello `;
    } else{
        greet.innerText = `Hello, ${text}`;
    }

    
});

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const clear = document.getElementById('clear')

red.addEventListener('click', function(){
    red.style.backgroundColor = "red";
})
yellow.addEventListener('click', function(){
    yellow.style.backgroundColor = "yellow";
})
green.addEventListener('click', function(){
    green.style.backgroundColor = "green";
})
blue.addEventListener('click', function(){
    blue.style.backgroundColor = "blue";
})
