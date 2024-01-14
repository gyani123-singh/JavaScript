let pass = document.querySelector('#pass');
let lock = document.querySelector('#lock');
let unlock = document.querySelector('#unlock');

lock.addEventListener('click', ()=>{
    pass.type = "text";
    lock.style.display = "none";
    unlock.style.display = "block";
});

unlock.addEventListener('click', ()=>{
    pass.type = "password";
    unlock.style.display = "none";
    lock.style.display = "block";
});