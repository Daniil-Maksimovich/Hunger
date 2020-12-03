window.onload = () => {

    document.querySelector('.loader-container').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader-container').style.display = 'none';
    }, 300);

    //burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerBtn = document.querySelector('.burger-menu__button');

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    });
    document.querySelector('.burger-menu__overlay').addEventListener('click', () => {
        burgerMenu.classList.remove('active');
    });
    
    //anchors

    const anchors = document.querySelectorAll('a[data-url]');
    const sections = Array.from(document.querySelectorAll('.header, section'));

    anchors.forEach( link => {

        link.addEventListener('click', e => {
            e.preventDefault()
            const machedSec = sections.filter(sec => e.target.dataset.url === sec.className);
            const sectionCoord = machedSec[0].getBoundingClientRect();
            const { body } = document;
            const docEl = document.documentElement;
            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            const clientTop = docEl.clientTop || body.clientTop || 0;
            const top = sectionCoord.top + scrollTop - clientTop;

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
            burgerMenu.classList.remove("active");
        })
    });

    //slider

    const sliderBtns = document.querySelectorAll('.slider__buttons label');
    sliderBtns.forEach( btn => {
        btn.addEventListener('click', e => {
            sliderBtns.forEach(btn => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
        });
    });

    //timer

    const timer = document.querySelector('.timer h1');
    const minBlock = document.querySelector('.timer .min');
    const secBlock = document.querySelector('.timer .sec');

    let mins = 14;
    let sec = 00;
    setInterval(() => {
        if (mins === 0 && sec === 0) {
            timer.innerText = 'time is over';
        } else {
            if (sec === 00) {
                mins--;
                sec = 59;
            } else {
                sec--;
            }
        }
        minBlock.innerText = mins + ' : ';
        secBlock.innerText = sec < 10 ? '0' + sec : sec;
    }, 1000);

    //scroll button

    const scrollBtn = document.querySelector('.scroll-button');
    const bookingSecCords = document.querySelector('.booking').offsetTop;
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: bookingSecCords,
            behavior: "smooth"
        });
    });

    //input type date

    const inputDate = document.querySelector('.input-date')
    inputDate.addEventListener('focus', e =>{
        e.target.type = 'date';
    });
    inputDate.addEventListener('blur', e => {
        e.target.type = 'text';
    });    
}