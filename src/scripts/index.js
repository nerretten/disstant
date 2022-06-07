let elements = document.getElementsByClassName('content-item');

document.addEventListener('DOMContentLoaded', scrolling, false);
document.addEventListener('scroll', scrolling, false);


function elementvisible(x){
    let position = x.getBoundingClientRect();
    let top = position.top;
    let bottom = position.bottom;
    let height = position.height;
    return ((top >= 0) && (bottom <= window.innerHeight));
}

function scrolling(){
    for(let i = 0; i < elements.length; i++){
        if(elementvisible(elements[i])){
            elements[i].classList.add('active');
        }
    }
}