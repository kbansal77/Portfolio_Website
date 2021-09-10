function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})