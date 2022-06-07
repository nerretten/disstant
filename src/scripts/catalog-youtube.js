const data = [
    {
        src:'./src/images/yt-hodna.jpg',
        title:'Годна',
        description:'Грамадская кампанія «Годна» прысвечана стварэнню і прасоўванню сучаснай нацыянальнай ідэі Беларусі. Мы імкнемся ўмацоўваць беларускую ідэнтычнасць на глебе агульных і стваральных каштоўнасцяў.\n',
        link:'https://www.youtube.com/c/hodnaby/featured'
    },
    {
        src:'./src/images/yt-moda.jpg',
        title:'Мода на мову',
        description:'Вітаю ўсіх на канале "Мода На Мову" які быў створаны каб падняць папулярнасць беларускай мовы і пачаць выкарыстоўваць яе ў паўсядзённым жыцці.',
        link:'https://www.youtube.com/channel/UCSozv0d23TKZxN3r1yJINeQ/featured'
    },
    {
        src:'./src/images/yt-karani.jpg',
        title:'Карані і вытокі',
        description: 'Гісторыя Беларусі. Наша мова. Абрады і традыцыі.',
        link:'https://www.youtube.com/channel/UC5hc3uwPuFLy-Z4AdztnHaQ'
    },
    {
        src:'./src/images/yt-wir.jpg',
        title:'WIR BY',
        description:'Беларуская і сусветная культура і гісторыя. Распавядаем пра мастацтва, жывапіс, літаратуру, гісторыю, лінгвістыку, кіно, музыку і міфалогію па-беларуску ў лёгкай форме разам з прафесійнымі даследчыкамі і выкладчыкамі.',
        link:'https://www.youtube.com/c/WirBy/featured'
    },
    {
        src: './src/images/yt-baybus.jpg',
        title: 'BAYBUS',
        description: 'Забаўляльны, навучальны, развіццёвы канал БЭЙБУС.Лепшы сябар маленькіх гарэз і дарослых жэўжыкаў. Канал з клопатам і павагай, з хітрыкамі ды цікавосткамі, з пяшчотай і весялосцю.Будзем разам усміхацца, адкрываць новае, здзіўляцца неверагоднаму.',
        link: 'https://www.youtube.com/c/baybusby/featured'
    },
    {
        src:'./src/images/yt-tut.jpg',
        title:'Тутэйшы Шляхціч',
        description:'Канал накіраваны на папулярызацыю беларускай культуры, гісторыі і мовы. На гэтым канале вы зможаце пабачыць ролікі аб гістарычных падзеях, асобах, гісторыка-культурных каштоўнасцях, цікавых месцах і аб\'ектах звязаных з Беларуссю, а таксама ўсялякія падарожжы, ды забаўкі.',
        link:'https://www.youtube.com/c/%D0%A2%D1%83%D1%82%D1%8D%D0%B9%D1%88%D1%8B%D0%A8%D0%BB%D1%8F%D1%85%D1%86%D1%96%D1%87/featured'
    },
    {
        src:'./src/images/yt-sluchaj.jpg',
        title:'Слухай Сюды',
        description:'Тут вы знойдзеце агляды актуальных падзей Беларусі і замежжа. Меркаваньні экспертаў і аналітыку па важных культурных, палітычных і эканамічных сусветных трэндах. Цікавыя факты і агляды гістарычных падзей. А таксама пераклады замежных экспертаў з Prager University',
        link:'https://www.youtube.com/channel/UCWerimu-lIkwyUGeeB2CDpA/featured'
    },
    {
        src:'./src/images/yt-movananov.jpg',
        title:'movananova belarusvideo',
        description:'Відэа ад моўных курсаў «Мова Нанова»',
        link:'https://www.youtube.com/channel/UCSVx7NyLPrRWHLjzjWdAd5A/featured'
    },
    {
        src:'./src/images/yt-vital.jpg',
        title:'Віталь Чырвінскі',
        description:'Развіццё ваеннай справы на беларускіх землях. Структура войска. Сродкі ўзброенай барацьбы. Фартыфікацыя. Ваенная стратэгія. Тактыка. Войны, паходы, бітвы. Палкаводцы і военачальнікі зямлі беларускай. Полацкае княства. Вялікае Княства Літоўскае.',
        link:'https://www.youtube.com/c/%D0%92%D1%96%D1%82%D0%B0%D0%BB%D1%8C%D0%A7%D1%8B%D1%80%D0%B2%D1%96%D0%BD%D1%81%D0%BA%D1%96%D0%A0%D0%90%D0%97%D0%9C%D0%9E%D0%92%D0%AB%D0%90%D0%91%D0%93%D0%86%D0%A1%D0%A2%D0%9E%D0%A0%D0%AB%D0%86%D0%91%D0%95%D0%9B%D0%90%D0%A0%D0%A3%D0%A1%D0%86/featured'
    },
    {
        src:'./src/images/yt-maj.jpg',
        title:'Маёнтак Падароск',
        description:'Старажытны шляхецкі маёнтак, які мае набыць новае жыццё як музэй беларускай шляхты і турыстычна-рэкрэацыйны цэнтр.',
        link:'https://www.youtube.com/channel/UCy_bzshvfnTZk5J-hyXRLPw/featured'
    },
    {
        src:'./src/images/yt-chadan.jpg',
        title:'ХАДАНОВІЧ ',
        description:'Вітаю вас на сваім канале! З вамі Андрэй Хадановіч ― беларускі паэт, перакладчык, літаратуразнаўца і выкладчык. Тут я распавядаю пра літаратуру, якая стала актуальнай у нашы часы, пра літаратуру, у якой мы з вамі цяпер жывём.',
        link:'https://www.youtube.com/channel/UCUJQcp9gg3sc46kBsppBl6Q'
    },
    {
        src:'./src/images/yt-hrodna.jpg',
        title:'Сусветная змова',
        description:'Месца з гісторыяй',
        link:'https://www.youtube.com/channel/UCQgR5LInXzatrSebZW5k6xw'
    }
]

let cards = document.getElementsByClassName('cards')[0];

function openPage(link){
    window.open(link);
}

for(let i = 0; i < data.length; i++){
    cards.innerHTML += `
    <div class="card">
        <div class="card-front">
            <div class="content-card">
              <div class="card-title">${data[i].title}</div>
              <img src=${data[i].src} alt=${data[i].title} class="card-image">
            </div>
              <div class="buttons-card">
                <img src="./src/images/premium-icon-down-right-arrow-4939978.png" alt="arrow" class="arrow-front">
                <button class="card-button">Перайсці</button>
                <img src="./src/images/heart.png" alt="heart" class="card-heart">
              </div>
        </div>
        <div class="card-back card-before"> 
                <div class="card-back-title">Апісанне</div>
                <span class="card-description">${data[i].description}</span>   
                <img src="./src/images/premium-icon-down-right-arrow-4939978.png" alt="arrow" class="arrow-back">
        </div>    
    </div>`
}

let buttons = document.getElementsByClassName('card-button');
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => openPage(data[i].link));
}

let cardFront = document.getElementsByClassName('card-front');
let cardBack = document.getElementsByClassName('card-back');
let themeButton = document.getElementsByClassName('arrow-front');
let themeButtonBack = document.getElementsByClassName('arrow-back');

for(let i = 0; i < themeButton.length; i++){
    themeButton[i].addEventListener('click', function (){
        cardFront[i].classList.add('card-front-return');
        cardBack[i].classList.remove('card-before');
        cardBack[i].classList.add('card-back-return');
    });
}

for(let i = 0; i < themeButtonBack.length; i++){
    themeButtonBack[i].addEventListener('click', function (){
        cardFront[i].classList.remove('card-front-return');
        cardBack[i].classList.add('card-before');
        cardBack[i].classList.remove('card-back-return');
    });
}

// themeButton.onclick = function() {
//     cardFront.classList.add('.card-front-return');
//     cardBack.classList.add('.card-back-return');
// };
//
// themeButtonBack.onclick = function() {
//     cardFront.classList.remove('.card-front-return');
//     cardBack.classList.remove('.card-back-return');
// };