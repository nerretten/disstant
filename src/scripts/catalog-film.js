const data = [
    {
        src:'./src/images/film-gambit.png',
        title:'Гамбіт каралевы',
        description:'Падзеі серыяла адбываюцца ў пяцідзясятых гадах мінулага стагоддзя. Элізабет Харман — дзяўчына, якую выхоўвалі ў дзіцячым доме.',
        link:'https://anibel.net/cinema/the-queen\'s-gambit'
    },
    {
        src:'./src/images/film-vangog.png',
        title:'Ван Гог: На парозе вечнасці',
        description:'Вінцэнт Ван Гог быў апанаваны жывапісам і марыў змяніць свет. Ён жыў у Парыжы і сябраваў з Полем Гагенам, які параіў мастаку шукаць яркае і цёплае святло на поўдні Францыі. ',
        link:'https://anibel.net/cinema/at-eternity\'s-gate'
    },
    {
        src:'./src/images/film-goodnews.png',
        title:'Добрыя прадвесці',
        description: 'У цэнтры сюжэта — анёл Азірафаэль і дэман Кроўлі, якія аб\'ядноўваюць сілы, каб папярэдзіць канец свету, таму што за доўгія стагоддзі яны паспелі звыкнуцца з жыццём на Зямлі.',
        link:'https://anibel.net/cinema/good-omens'
    },
    {
        src:'./src/images/film-malif.jpg',
        title:'Малефісэнта',
        description:'Юная чараўніца Малефісэнта вяла адасобленае жыццё ў зачараваным лесе, акружаная казачнымі істотамі, але аднойчы ўсё змянілася... У яе свет уварваліся людзі, якія прынеслі з сабой разбурэнне і хаос',
        link:'https://anibel.net/cinema/maleficent'
    },
    {
        src: './src/images/film-three.jpeg',
        title: 'Тры арэшкі для Папялушкі',
        description: 'Мачыха Папялушкі ўсімі сіламі хоча выдаць сваю дурную і злую родную дачку замуж за прынца. Але таму зусім не жадаецца жаніцца, ён сварыцца з бацькам і збіраецца пакінуць палац, але... ',
        link: 'https://anibel.net/cinema/tri-orisky-pro-popelku'
    },
    {
        src:'./src/images/film-rik.png',
        title:'Рык і Морці',
        description:'Рык — звар\'яцелы навуковец, які ўцягвае сваёго ўнука Морці ў навукова-фантастычныя прыгоды, вынікі якіх нярэдка садзейнічаюць разбурэнню іх сям\'і, а часам і цэлага свету. ',
        link:'https://anibel.net/cinema/rick-and-morty'
    },
    {
        src:'./src/images/film-praz.png',
        title:'Праз паўстагоддзя паэзіі',
        description:'Праз чвэрць стагоддзя пасля пагрому ў Рывіі здзяйсняецца напад на Каэр Морхен, стары аплот ведзьмароў Школы Ваўка. Узначальвае атаку магутны воін Агай. ',
        link:'https://anibel.net/cinema/pol-wieku-poezji-pozniej'
    },
    {
        src:'./src/images/film-legenda.png',
        title:'Легенды «Смяротнай бітвы»',
        description:'Чарнакніжнік Шан Цунг наладжвае міжпрасторавы турнір баявых мастацтваў, дзе пераможца мусіць пабіцца з самім чараўніком за лёс роднага свету. У турніры вырашае ўдзельнічаць Скарпіён, што прагне помсты за смерць сям\'і і клана.',
        link:'https://anibel.net/cinema/mortal-kombat-legends:-scorpion\'s-revenge'
    },
    {
        src:'./src/images/film-squid.jpg',
        title:'Гульня ў кальмара',
        description:'Сон Гі Хун ужо немалады, па вушы заграз у даўгах і сядзіць на шыі ў матулі. Нават выйграныя на скачках грошы ў яго руках доўга не затрымліваюцца, і аднойчы ён сустракае ў метро незнаёмца, які спачатку прапануе згуляць у дзіцячую, а потым уручае Гі Хуну нямалую суму і візітку.',
        link:'https://anibel.net/cinema/squid-game'
    },
    {
        src:'./src/images/film-viadzmiar.png',
        title:'Вядзьмар: Кашмар воўка',
        description:'Весямір вырваўся з галечы і стаў ведзьмаром. Цяпер ён забівае пачвар за грошы і славу. Але прыходзіць новы вораг, і Весяміру давядзецца сутыкнуцца з дэманамі свайго мінулага.',
        link:'https://anibel.net/cinema/the-witcher:-nightmare-of-the-wolf'
    },
    {
        src:'./src/images/klich.jpeg',
        title:'Кліч Пекла',
        description:'2023 год. Па ўсім свеце адбываецца загадкавы феномен — некаторыя людзі атрымліваюць прадказанні аб сваёй смерці, і акурат у прызначаны час за імі прыходзяць злобныя істоты і забіваюць.',
        link:'https://anibel.net/cinema/hellbound'
    },
    {
        src:'./src/images/film-susvet.jpg',
        title:'Сусветная змова',
        description:'Ценевы ўрад кантралюе ў Амерыцы ўсё, пачынаючы ад загадаў прэзідэнта, і заканчваючы надвор\'ем у краіне. Дапамагае яму ў гэтым арганізацыя Cognito Inc, у якой працуе галоўная гераіня — геніяльная вынаходніца Рэйган.',
        link:'https://anibel.net/cinema/inside-job'
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