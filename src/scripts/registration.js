let place = document.getElementById('login');
let wrapper = document.getElementsByClassName('wrapper')[0];
let overlay = document.getElementsByClassName('overlay')[0];
let close = document.getElementsByClassName('close')[0];
let input = document.getElementsByTagName('input');
let label = document.getElementsByTagName('label');

function showWindow(){ 
    wrapper.style.display = 'none';
    overlay.style.display = 'block';
}

function closeWindow() {
  overlay.style.display = 'none';
  wrapper.style.display = 'block';
}

place.addEventListener('click', showWindow);
close.addEventListener('click', closeWindow);

function getLabelVisibility(n) {
    label[n].style.opasity = '1';
}
