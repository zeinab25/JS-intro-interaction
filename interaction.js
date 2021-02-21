let button = document.querySelector('button');
let para = document.querySelector('p');
let selectColor = document.querySelector('#select-color');

button.addEventListener('click', ()=> {
    console.log('click');
});



button.addEventListener('click', ()=> {
    para.textContent = 'bouton cliqué';

});
    
button.addEventListener('dblclick', function(){
    para.style.fontSize = '2em';    
    
});

selectColor.addEventListener('change', function(){
//console.log(selectColor.value);
para.style.color = selectColor.value;
});



