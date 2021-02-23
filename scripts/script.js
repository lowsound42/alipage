// Nav bar class change on click
const navActivate = () => {
  let topBar = document.getElementById('top');
  let midBar = document.getElementById('mid');
  let botBar = document.getElementById('bottom');
  let navList = document.getElementById('navList');
  let mainBlur = document.getElementById('mainBlur');
  let footerBlur = document.getElementById('footerBlur');
  if(midBar.classList.value == 'navLine'){
    topBar.classList.add('active');
    midBar.classList.add('active');
    botBar.classList.add('active');
    navList.classList.add('active');
    mainBlur.classList.add('blur');
    footerBlur.classList.add('blur');
  }
  else{
    topBar.classList.remove('active');
    midBar.classList.remove('active');
    botBar.classList.remove('active');
    navList.classList.remove('active');
    mainBlur.classList.remove('blur');
    footerBlur.classList.remove('blur');
  }
}

const initDate = () =>{ 
  let yearElem = document.getElementById('year');
  let now = new Date();
  let year = now.getFullYear();
  yearElem.innerHTML = year;
}

const workToggle = (element) => {
  let comm = document.getElementById('fiverr');
  let personal = document.getElementById('personal');
  if(comm.classList.contains('visible')){
    comm.classList.remove('visible');
  }else if (personal.classList.contains('visible')){
    personal.classList.remove('visible');
  }
 if(element.id == 'ftoggle'){
    comm.classList.add('visible');
 }else if(element.id == 'ptoggle'){
    personal.classList.add('visible');
}

 section.classList.add('visible');
}

/*
  call carousel and window resize functions onload
*/
window.onload = (event) => {
  initDate();
  initCarousel();
};
