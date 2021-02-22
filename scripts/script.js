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
  console.log(midBar.classList.value);
}

const initDate = () =>{ 
  var yearElem = document.getElementById('year');
  var now = new Date();
  var year = now.getFullYear();
  yearElem.innerHTML = year;
}

window.onload = initDate;