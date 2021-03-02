let scrollCount = 0;
let videoVisibility = false;
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

const scrollTest = () => {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;
    if (scrollCount == 0) {
        console.log(y);
        if (y < 700) {
            window.scrollBy(0, 600);
        } else {
            window.scrollBy(0, 400);
        }
        scrollCount = 1;
    }
};

const initDate = () => {
    let yearElem = document.getElementById('year');
    let now = new Date();
    let year = now.getFullYear();
    yearElem.innerHTML = year;
};

const workToggle = (element) => {
    scrollCount = 0;
    let comm = document.getElementById('fiverr');
    let personal = document.getElementById('personal');
    let videos = document.getElementById('videos');
    let container = document.getElementById('youContainer');
    let persContainer = document.getElementById('personal');
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
        videoVisibility = false;
        container.innerHTML = ' ';
        persContainer.innerHTML = ' ';
    } else if (element.id == 'ptoggle') {
        personal.classList.add('visible');
        videoVisibility = false;
        container.innerHTML = ' ';
    } else if (element.id == 'vtoggle') {
        persContainer.innerHTML = ' ';
        if (!videoVisibility) {
            videos.classList.add('visible');
        }
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
