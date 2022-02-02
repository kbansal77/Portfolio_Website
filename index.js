function openNav() {
    var width = window.innerWidth;
    if(width<=500){
      console.log(typeof width)
      document.getElementById("mySidenav").style.width = "65vw";
    }
    else{
      document.getElementById("mySidenav").style.width = "25vw";
    }
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const close = document.getElementsByClassName("ac");

for(let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function() {
    closeNav();
  })
}

// close.addEventListener("click", ()=>{
//   console.log("rrr")
//   closeNav()
// })
