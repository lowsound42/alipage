// Nav bar class change on click
const navActivate = () => {
    let topBar = document.getElementById('top');
    let midBar = document.getElementById('mid');
    let botBar = document.getElementById('bottom');
    let navList = document.getElementById('navList');
    let mainBlur = document.getElementById('mainBlur');
    let footerBlur = document.getElementById('footerBlur');
    if (midBar.classList.value == 'navLine') {
        topBar.classList.add('active');
        midBar.classList.add('active');
        botBar.classList.add('active');
        navList.classList.add('active');
        mainBlur.classList.add('blur');
        footerBlur.classList.add('blur');
    } else {
        topBar.classList.remove('active');
        midBar.classList.remove('active');
        botBar.classList.remove('active');
        navList.classList.remove('active');
        mainBlur.classList.remove('blur');
        footerBlur.classList.remove('blur');
    }
};

const initDate = () => {
    let yearElem = document.getElementById('year');
    let now = new Date();
    let year = now.getFullYear();
    yearElem.innerHTML = year;
};

const scroll = () => {
    console.log('SCROLL');
};

const workToggle = (element) => {
    let comm = document.getElementById('fiverr');
    let personal = document.getElementById('personal');
    let videos = document.getElementById('videos');
    if (comm.classList.contains('visible')) {
        comm.classList.remove('visible');
    } else if (personal.classList.contains('visible')) {
        personal.classList.remove('visible');
    } else if (videos.classList.contains('visible')) {
        videos.classList.remove('visible');
    }
    if (element.id == 'ftoggle') {
        scroll();
        comm.classList.add('visible');
    } else if (element.id == 'ptoggle') {
        personal.classList.add('visible');
    } else if (element.id == 'vtoggle') {
        videos.classList.add('visible');
    }
};

/******************************************************************************/
function initAcc(elem, option) {
    //addEventListener on mouse click
    document.addEventListener('click', function (e) {
        //check is the right element clicked
        if (e.target.classList.contains('a-btn')) {
            //check if element contains active class
            if (!e.target.parentElement.classList.contains('active')) {
                if (option == true) {
                    //if option true remove active class from all other accordions
                    var elementList = document.querySelectorAll('.a-container');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }
                //add active class on cliked accordion
                e.target.parentElement.classList.add('active');
            } else {
                //remove active class on cliked accordion
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}

//activate accordion function
initAcc('.accordion', true);
/******************************************************************************/

/*
  call carousel and window resize functions onload
*/
window.onload = (event) => {
    initDate();
};
