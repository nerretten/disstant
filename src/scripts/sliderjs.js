let slide_data = [
    {
        'src':'./src/images/slider-anime.jpg',
        'title':'Навінкі анімэ',
        'copy':'Самае новае і актуальнае анімэ.'
    },
    {
        'src':'./src/images/movie-slider.jpeg',
        'title':'Навінкі фільмаў',
        'copy':'Таксама эксрэмісцкія.'
    },
    {
        'src':'./src/images/music-slider.jpg',
        'title':'Навінкі музыкі',
        'copy':'Хуткія навіны па-беларуску..'
    },
    {
        'src':'./src/images/books-slider.jpg',
        'title':'Навінкі кніг',
        'copy':'Экстрэмісцкія навіны.'
    },

];
let slides = [],
    captions = [];

let autoplay = setInterval(() => nextSlide(), 5000);

let container = document.getElementById('container');
let leftSlider = document.getElementById('left-col');
let up_button = document.getElementById('up_button');
let down_button = document.getElementById('down_button');
let caption = document.getElementById('slider-caption');
let caption_heading = caption.querySelector('caption-heading');

down_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
});

up_button.addEventListener('click',function(e){
    e.preventDefault();
    clearInterval(autoplay);
    previousSlide();
    autoplay;
});

for (let i = 0; i< slide_data.length; i++){
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');

    slide.classList.add('slide');
    slide.setAttribute('style','background:url('+slide_data[i].src+')');
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';

    switch(i){
        case 0:
            slide.classList.add('current');
            caption.classList.add('current-caption');
            break;
        case 1:
            slide.classList.add('next');
            caption.classList.add('next-caption');
            break;
        case slide_data.length -1:
            slide.classList.add('previous');
            caption.classList.add('previous-caption');
            break;
        default:
            break;
    }

    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend',`<div class="caption-subhead"><span>${slide_data[i].copy}</span></div>`);
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
}

function nextSlide(){
    slides[0].classList.remove('current');
    slides[0].classList.add('previous','change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length -1;
    slides[last].classList.remove('previous');

    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption','change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');

    captions[last].classList.remove('previous-caption');

    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder);
    captions.push(captions_placeholder);
}

function previousSlide(){
    slides[0].classList.remove('current');
    slides[2].classList.add('previous','change');
    slides[2].classList.remove('next');
    slides[3].classList.add('current');
    slides[0].classList.add('next');
    let last = slides.length - 1;
    slides[last].classList.remove('previous');

    captions[0].classList.remove('current-caption');
    captions[2].classList.add('previous-caption','change');
    captions[2].classList.remove('next-caption');
    captions[3].classList.add('current-caption');
    captions[0].classList.add('next-caption');

    captions[last].classList.remove('previous-caption');

    let placeholder = slides.pop();
    let captions_placeholder = captions.pop();
    slides.unshift(placeholder);
    captions.unshift(captions_placeholder);
}

let heading = document.querySelector('.caption-heading');

function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
        if (el.style[t] !== undefined){
            return transitions[t];
        }
    }
}

var transitionEvent = whichTransitionEvent()
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
    caption.removeEventListener(transitionEvent, customFunction);
}