//Wait for window to load
document.addEventListener('DOMContentLoaded', (event) =>{
  //Get reference to header object
  let myHeader = document.querySelector('#header-id');
  setTimeout(()=>{
    myHeader.classList.remove('hidden');
  }, 3000)
});