const products = [
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-1-1.png',
        p: 'Г/Ц Блинчики с мясом вес, Россия',
        price_1: '44,50 ₽',
        price_2: '50,50 ₽',
    },
    {
        stars: 'images/stars-3.svg',
        img: 'images/card-1-2.png',
        p: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
        price_1: '44,50 ₽',
        price_2: '50,50 ₽',
    },
    {
        stars: 'images/section_5.svg',
        img: 'images/card-1-3.png',
        p: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
        price_1: '44,50 ₽',
        price_2: '50,50 ₽',
    },
    {
        stars: 'images/section_4.5.svg',
        img: 'images/card-1-4.png',
        p: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и c сыром...',
        price_1: '44,50 ₽',
        price_2: '50,50 ₽',
    }
]

function getCard(p, image, stars, price, price_1) {
    const star = document.createElement('img');
    star.src = stars;

    const card__body = document.createElement('div');
    card__body.className = 'card__body';
    const card_img = document.createElement('img');
    card_img.src = image;
    const card__w = document.createElement('div');
    // card__w.className ='card__w';
    // card__d_1.className ='card__d_1';
    // card__d_2.className ='card__d_2';
    const card__d_1 = document.createElement('div');
    const card__d_2 = document.createElement('div');
    const h1 = document.createElement('h1');
    const p_1 = document.createElement('p');
    h1.textContent = price;
    h1.style.color = '#414141';
    // p_1.textContent = 'C картой';
    const h1_2 = document.createElement('h1');
    const p_2 = document.createElement('p');
    // h1_2.textContent = price_1;
    // p_2.textContent = 'Обычная';
    card__d_1.append(h1, p_1);
    card__d_2.append(h1_2, p_2);
    card__w.append(card__d_1, card__d_2);

    card__body.append(card_img);

    const card__footer = document.createElement('div');
    card__footer.className = "card__footer";
    const card = document.createElement("div");
    card.className = 'card';
    card.style.backgroundColor = 'white';
    const card__p = document.createElement('p');
    card__p.textContent = p;
    card__p.style.padding = '8px 0  ';
    card__p.style.color = '#414141';
    card__p.style.maxWidth = '256px';
    const card__button = document.createElement('button');
    card__button.textContent = 'B корзину';
    card__button.style.color = '#70C05B';
    card__button.style.fontSize = '16px';
    card__button.style.width = '100%';
    card__button.style.padding = '8px 0';
    card__button.style.borderRadius = '4px';
    card__button.style.border = '1px solid #70C05B';
    card__button.style.backgroundColor = 'transparent';
    card__footer.style.padding = ' 8px  ';
    card__footer.append(card__w, card__p, star, card__button,);
    card.append(card__body, card__footer);

    // cards.append(card)
    return card;
}
for (el of products) {
    let card = getCard(el.p, el.img, el.stars, el.price_1, el.price_2);
    main.append(card);
}

const products_2 = [
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-2-1.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '599,99 ₽',
    },
    {
        stars: 'images/section_5.svg',
        img: 'images/card-1-3.png',
        p: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
        price: '44,50 ₽',
    },
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-1-4.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '159.99 ₽',
    },
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-1-2.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '49,39 ₽',
    }
]

for (el of products_2) {
    let res = getCard(el.p, el.img, el.stars, el.price)
    section_2.append(res)
}

const products_3 = [
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-2-1.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '77,99 ₽',
    },
    {
        stars: 'images/section_5.svg',
        img: 'images/card-1-3.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '159,99 ₽',
    },
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-1-4.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '599,99 ₽',
    },
    {
        stars: 'images/stars-2.svg',
        img: 'images/card-1-2.png',
        p: 'Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»',
        price: '49,39 ₽',
    }
]

for (el of products_3) {
    let res_1 = getCard(el.p, el.img, el.stars, el.price)
    buyOld.append(res_1);
}

const products_4 = [
    {
        img: 'images/p-1.svg',
        p: 'И получайте бонусы при покупке в магазинах и на сайте',
        h1: 'Оформите карту «Северяночка»',
        bgc:'#FCD5BA',
    },
    {
        img: 'images/p-2.svg',
        p: 'И получайте вдвое больше бонусов',
        h1: 'Покупайте акционные товары',
        bgc:'#E5FFDE',
    },
]

function get(img , p , h1 , bgc) {
    const imgs = document.createElement('img') ;
    imgs.src = img ;
    const ps = document.createElement('p') ;
    ps.textContent = p;
    ps.style.color = '#414141' ; 
    ps.style.fontSize = '16px';
    ps.style.fontWeight = '400';
    const h1s = document.createElement('h1') ;
    h1s.textContent = h1;
    h1s.style.color = '#414141' ; 
    h1s.style.fontSize = '24px';
    h1s.style.fontWeight = '700';
    h1s.style.paddingBottom = '6px' ;
    const card = document.createElement( 'div' ) ;
    const car = document.createElement( 'div' ) ;
    card.style.backgroundColor = bgc ;
    card.style.display = 'flex' ;
    card.style.alignItems ='center' ;
    card.style.padding = '8px 30px ';
    car.append( h1s , ps );
    card.append( car , imgs );
    return card;
}

for (el of products_4) {
    let res = get( el.img , el.p , el.h1 ,el.bgc ) ;
    fgh.append(res);
}


// tabs

