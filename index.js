const jsonHeroes = `[{ 
    "url": "./img/batman.jpg", 
    "name": "Бэтмен", 
    "alter": "Брюс Уэйн", 
    "power": "интеллект, обширные познания, знания боевых искусств, ловкость"
},{ 
    "url": "./img/superman.jpg", 
    "name": "Супермен", 
    "alter": "Кларк Кент", 
    "power": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
},{
    "url": "./img/iron-man.jpg", 
    "name": "Железный человек", 
    "alter": "Тони Старк", 
    "power": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
},{
    "url": "./img/spider-man.jpg", 
    "name": "Человек-паук", 
    "alter": "Питер Паркер", 
    "power": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
},{
    "url": "./img/captain-america.jpg",
    "name": "Капитан Америка",
    "alter": "Стивен Роджерс",
    "power": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
},{
    "url": "./img/thor.jpg",
    "name": "Тор",
    "alter": "нет; полное имя — Тор Одинсон",
    "power": "все, что может бог, плюс молот Мьелнир"
},{
    "url": "./img/halk.jpg",
    "name": "Халк", 
    "alter": "Брюс Беннер",
    "power": "сверхчеловеческая сила искорость, выносливость, полет"
},{
    "url": "./img/wonder-woman.jpg",
    "name": "Чудо-женщина",
    "alter": "Диана Принс",
    "power": "сверхчеловеческая сила искорость, выносливость, полет"
}]`;

let heroes = JSON.parse(jsonHeroes);
console.log(heroes);

for (let hero of heroes) {
    const container = document.querySelector('.cards-container');
    console.log(container);

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    container.append(divCard);

    // divCard.insertAdjacentHTML('beforeend', '<img src="${hero.url}"></img>');

    const img = document.createElement('img');
    img.classList.add('img');
    let imgSrc = document.createAttribute('src');
    imgSrc.value = hero.url;
    img.setAttributeNode(imgSrc);
    divCard.append(img);

    const h2 = document.createElement('h2');
    h2.classList.add('card__name');
    h2.textContent = hero.name;
    divCard.append(h2);

    const pAlter = document.createElement('p');
    pAlter.classList.add('alter');
    pAlter.textContent = `Альтер-эго: ${hero.alter}`;
    divCard.append(pAlter);

    const pPower = document.createElement('p');
    pPower.classList.add('alter');
    pPower.textContent = `Суперсилы: ${hero.power}`;
    divCard.append(pPower);

}