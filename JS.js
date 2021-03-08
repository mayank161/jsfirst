localStorage.setItem('player','Ravi,Ajay,Maxwell');
const p = localStorage.getItem('player');
console.log(p);

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('loaded');
    title.innerHTML = ' JS run before html';
});