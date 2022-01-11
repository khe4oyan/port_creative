let ul = document.getElementById('khc');
if(window.screen.width <= 375){
    let write = document.getElementById('khc2');
    write.onclick = () =>{
        ul.classList.toggle('ul-open'); 
    }
}
let a = document.querySelectorAll('#fix-header .container ul li');
a.forEach(function(l){
    l.onclick = () =>{
        ul.classList.toggle('ul-open');
    }
});