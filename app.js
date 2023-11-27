let add = document.getElementById("adds");
add.addEventListener('click', () => {
    add.classList.add("jack");
    add.textContent = 'hello';
});

let replaces = document.getElementById("remove");
let replac = document.getElementById("hell");
replaces.addEventListener('click', () => {
    replaces.classList.remove('replac')
    replac.textContent = 'remove'
});

let repla = document.getElementById("rep");
let rec = document.getElementById("hells");
repla.addEventListener('click', () => {
    repla.classList.replace('oldclass', 'newclass')
    rec.textContent = 'replace well'
});

// const toogle = docutment.getElementById("suns");
// const body = document.querySelector("body");
// toogle.addEventListener('click', function(){
//     this.classList.toggle('fa-moon');
//     if (this.classList.toggle('fa-sun')) {
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '2s';
//     } else {
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '2s';
//     }
// })


const toggle=document.getElementById('suns');
const bodys=document.querySelector('body');
toggle.addEventListener('click',function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        bodys.style.background='white';
        bodys.style.color='black';
        bodys.style.transition='2s';
    }else{
        bodys.style.background='black';
        bodys.style.color='white';
        bodys.style.transition='2s';
    }
})