$(function () {
    $('#language-select').selectric();
    $('.lk-selectric').selectric();

});
if(screen.width < 767) {
    var productsSlider = new Swiper('.product-inner-swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}
new WOW().init();
var mySwiper = new Swiper('.meeting-swiper', {
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        slideShadows: true,
    },
    slidesPerView: 'auto',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
mySwiper.on('slideChange', function () {
    console.log('swiper is updated')
    mySwiper.update();
})
var testimonialsSlider = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.testimonials-next',
        prevEl: '.testimonials-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
try {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
} catch (e) {
    console.log(e)
}

function Burger(burger, menu) {
    this.burger = burger
    this.menu = menu
    let self = this
    this.burger.setAttribute('data-burger', 'data-burger')
    this.menu.setAttribute('data-burger', 'data-burger')
    Array.from(this.burger.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', 'data-burger')
    })
    Array.from(this.menu.querySelectorAll('*')).forEach(el => {
        el.setAttribute('data-burger', 'data-burger')
    })

    this.burger.onclick = function (e) {
        document.body.classList.toggle('overflow-js')
        self.menu.classList.toggle('active')
        this.classList.toggle('open')
        window.addEventListener('scroll', noScroll)
    }
    document.onclick = function (e) {
        if (e.target.hasAttribute('data-burger')) {

        } else {
            self.burger.classList.remove('open')
            self.menu.classList.remove('active')
            document.body.classList.remove('overflow-js')
        }
    }

    function noScroll(e) {
        // console.log(e)
    }
}

let headerBurger = new Burger(
    document.querySelector('.burger'),
    document.querySelector('.header-burger-menu')
)

function ProgramTabs(tabTrigger, tabContentWrapper) {
    this.tab = tabTrigger
    this.tabContent = tabContentWrapper
    let self = this

    Array.from(this.tab).forEach(tab => {
        tab.addEventListener('click', changeTheTab)
    })

    function closeTabs() {
        Array.from(self.tabContent.children).forEach(tab => {
            tab.classList.remove('active')
        })
        Array.from(self.tab).forEach(tab => {
            tab.classList.remove('active')
        })

    }

    function changeTheTab(e) {
        e.preventDefault()
        let index = Array.from(this.parentNode.children).indexOf(this)
        closeTabs()
        self.tabContent.children[index].classList.add('active')
        this.classList.add('active')

    }
}

try {
    let websiteTabs = new ProgramTabs(
        document.querySelectorAll('.tab-trigger'),
        document.querySelector('.tabs-content-wrapper'),
    )
} catch (e) {
    console.log(e);
}


let resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', resetForm);
function resetForm(e) {
    e.preventDefault();
    let form = this.closest('form');
    $('.lk-selectric').selectric('refresh');
    form.reset();
    this.click();
}
