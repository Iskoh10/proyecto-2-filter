import './style.css';

const products = [
  {
    name: 'Fender Cory Wong Strat SBT',
    price: 2391,
    color: 'azul',
    stars: 5,
    reviews: 1,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_52/523755/18870252_800.jpg'
  },
  {
    name: 'ESP LTD Snakebyte Camo',
    price: 1779,
    color: 'camo',
    stars: 3,
    reviews: 2,
    seller: 'ESP',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/535518/16923191_800.jpg'
  },
  {
    name: 'PRS SE Silver Sky Piano Black',
    price: 919,
    color: 'negro',
    stars: 4,
    reviews: 2,
    seller: 'PRS',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_56/568796/18287111_800.jpg'
  },
  {
    name: 'Sterling by Music Man Petrucci Majesty 6 AD',
    price: 1359,
    color: 'negro',
    stars: 5,
    reviews: 7,
    seller: 'Sterling by Music Man',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_43/434683/18134829_800.jpg'
  },
  {
    name: 'Schecter Keith Merrow KM-7 MK-III BLC',
    price: 1799,
    color: 'azul',
    stars: 4,
    reviews: 4,
    seller: 'Schecter',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_44/448823/13797446_800.jpg'
  },
  {
    name: 'Fender Brent Mason Tele MN PrimerGrey',
    price: 3049,
    color: 'gris',
    stars: 3,
    reviews: 6,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_49/497572/16590316_800.jpg'
  },
  {
    name: 'Evh Frankie Striped MN Relic R/W/B',
    price: 1429,
    color: 'rojo',
    stars: 3,
    reviews: 21,
    seller: 'Evh',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_48/483564/16815041_800.jpg'
  },
  {
    name: 'ESP LTD Alexi Hexed Sawtooth LH',
    price: 1799,
    color: 'violeta',
    stars: 5,
    reviews: 1,
    seller: 'ESP',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_52/527888/18232230_800.jpg'
  },
  {
    name: 'Dean Guitars Dimebag Dime O Flame ML',
    price: 788,
    color: 'naranja',
    stars: 5,
    reviews: 8,
    seller: 'Dean',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_19/195784/6285931_800.jpg'
  },
  {
    name: 'ESP LTD KH WZ',
    price: 1749,
    color: 'negro',
    stars: 4,
    reviews: 12,
    seller: 'ESP',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_45/458996/13872551_800.jpg'
  },
  {
    name: 'Fender Clapton Strat Signature PW',
    price: 2439,
    color: 'plateado',
    stars: 4,
    reviews: 8,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_17/179405/6128191_800.jpg'
  },
  {
    name: 'Evh Wolfgang USA Ivory',
    price: 4111,
    color: 'blanco',
    stars: 5,
    reviews: 5,
    seller: 'Evh',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_40/405786/11734810_800.jpg'
  },
  {
    name: 'Sterling by Music Man Majesty 100 Chalk Grey',
    price: 1359,
    color: 'gris',
    stars: 4,
    reviews: 2,
    seller: 'Sterling by Music Man',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_58/585134/18897876_800.jpg'
  },
  {
    name: 'Fender Lincoln Brewster Strat MN AG',
    price: 2591,
    color: 'dorado',
    stars: 3,
    reviews: 1,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_46/468788/14276808_800.jpg'
  },
  {
    name: 'Evh Wolfgang WG Standard Xotic',
    price: 599,
    color: 'naranja',
    stars: 5,
    reviews: 6,
    seller: 'Evh',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_45/456719/14646721_800.jpg'
  }
];

const sellers = [];
let seller = [];
let sellerFiltered = [];

const toFilter = () => {
  sellerFiltered = [];
  for (const producto of products) {
    if (seller.includes(producto.seller)) {
      sellerFiltered.push(producto);
    }
  }
  toPrint(sellerFiltered);
};

const organizerFilter = (priceSelected) => {
  if (!sellerFiltered.length <= 0) {
    doubleFilter(priceSelected);
  } else {
    toFilterPrice(priceSelected);
  }
};

const doubleFilter = (priceSelected) => {
  if (sellerFiltered.length >= 1) {
    const inputPrice = document.querySelector('input');
    inputPrice.value = '';

    let pricesFiltered = [];
    for (const producto of sellerFiltered) {
      if (producto.price <= parseInt(priceSelected)) {
        pricesFiltered.push(producto);
        console.log('correcto');
      } else if (pricesFiltered.length === 0) {
        pricesFiltered = sellerFiltered;
        window.alert('No existen productos con ese precio');
      }
    }
    toPrint(pricesFiltered);
  }
};

const toFilterPrice = (priceSelected) => {
  const inputPrice = document.querySelector('input');
  inputPrice.value = '';
  let pricesFiltered = [];
  for (const producto of products) {
    if (producto.price <= parseInt(priceSelected)) {
      pricesFiltered.push(producto);
    } else if (priceSelected <= 598) {
      pricesFiltered = products;
    }
  }
  if (pricesFiltered.length === 15) {
    window.alert('No existen productos');
  }
  toPrint(pricesFiltered);
};

const toFilterStars = (stars) => {
  let starFiltered = [];

  for (const producto of products) {
    if (producto.stars === stars) {
      starFiltered.push(producto);
    }
  }

  toPrint(starFiltered);
};

const fillSellers = (guitars) => {
  sellers.splice(0);
  for (const guitar of guitars) {
    if (!sellers.includes(guitar.seller)) {
      sellers.push(guitar.seller);
    }
  }
};
fillSellers(products);

const reset = () => {
  document.querySelector('select').selectedIndex = 0;
  document.querySelector('input').value = '';
  sellerFiltered = [];
  document.querySelector('#⭐⭐⭐').checked = false;
  document.querySelector('#⭐⭐⭐⭐').checked = false;
  document.querySelector('#⭐⭐⭐⭐⭐').checked = false;
};

const createSelect = () => {
  const filterSection = document.querySelector('.filter');

  const select = document.createElement('select');
  const optionEmpty = document.createElement('option');
  optionEmpty.value = 'Selecciona marca';
  optionEmpty.textContent = 'Selecciona marca';
  optionEmpty.selected = true;
  optionEmpty.disabled = true;

  select.appendChild(optionEmpty);
  for (const seller of sellers) {
    const option = document.createElement('option');
    option.value = seller;
    option.textContent = seller;
    option.className = 'optionSelect';
    select.appendChild(option);
  }
  filterSection.appendChild(select);

  select.addEventListener('change', (e) => {
    seller = e.target.value;
    toFilter();
  });
};

const createInputFilter = () => {
  const filterSection = document.querySelector('.filter');
  const inputPrice = document.createElement('input');
  inputPrice.setAttribute('type', 'number');

  const buttonInput = document.createElement('button');
  buttonInput.textContent = 'Buscar';
  buttonInput.setAttribute('id', 'searchButton');

  filterSection.appendChild(inputPrice);
  filterSection.appendChild(buttonInput);

  buttonInput.addEventListener('click', () =>
    organizerFilter(inputPrice.value)
  );
};

const createRatingCheck = () => {
  const filterSection = document.querySelector('.filter');
  const divCheckStars = document.createElement('div');
  divCheckStars.setAttribute('id', 'ratingCheck');

  const box3 = document.createElement('div');
  box3.className = 'boxStarCheck';

  const starCheck3 = document.createElement('input');
  starCheck3.setAttribute('type', 'radio');
  starCheck3.setAttribute('name', 'starCheck');
  starCheck3.setAttribute('id', '⭐⭐⭐');

  const label3 = document.createElement('label');
  label3.setAttribute('for', '⭐⭐⭐');
  label3.textContent = '⭐⭐⭐';

  const box4 = document.createElement('div');
  box4.className = 'boxStarCheck';

  const starCheck4 = document.createElement('input');
  starCheck4.setAttribute('type', 'radio');
  starCheck4.setAttribute('name', 'starCheck');
  starCheck4.setAttribute('id', '⭐⭐⭐⭐');

  const label4 = document.createElement('label');
  label4.setAttribute('for', '⭐⭐⭐⭐');
  label4.textContent = '⭐⭐⭐⭐';

  const box5 = document.createElement('div');
  box5.className = 'boxStarCheck';

  const starCheck5 = document.createElement('input');
  starCheck5.setAttribute('type', 'radio');
  starCheck5.setAttribute('name', 'starCheck');
  starCheck5.setAttribute('id', '⭐⭐⭐⭐⭐');

  const label5 = document.createElement('label');
  label5.setAttribute('for', '⭐⭐⭐⭐⭐');
  label5.textContent = '⭐⭐⭐⭐⭐';

  box3.appendChild(starCheck3);
  box3.appendChild(label3);
  box4.appendChild(starCheck4);
  box4.appendChild(label4);
  box5.appendChild(starCheck5);
  box5.appendChild(label5);

  divCheckStars.appendChild(box3);
  divCheckStars.appendChild(box4);
  divCheckStars.appendChild(box5);

  filterSection.appendChild(divCheckStars);

  starCheck3.addEventListener('change', () => toFilterStars(3));
  starCheck4.addEventListener('change', () => toFilterStars(4));
  starCheck5.addEventListener('change', () => toFilterStars(5));
};

const createButtonClean = () => {
  const filterSection = document.querySelector('.filter');
  const cleanButton = document.createElement('button');
  cleanButton.setAttribute('id', 'clean');
  cleanButton.textContent = 'Limpiar';

  filterSection.appendChild(cleanButton);

  cleanButton.addEventListener('click', () => toPrint(products));
  cleanButton.addEventListener('click', () => reset());
};

const toPrint = (guitars) => {
  const productsSection = document.querySelector('.products');
  productsSection.innerHTML = '';

  for (const guitar of guitars) {
    const divProduct = document.createElement('div');
    const imageProduct = document.createElement('img');
    const h3Product = document.createElement('h3');
    const starColor = document.createElement('div');
    const colorProduct = document.createElement('p');
    const starsProduct = document.createElement('div');
    const priceProduct = document.createElement('p');

    divProduct.classList.add('product');
    imageProduct.src = guitar.image;
    h3Product.textContent = guitar.name;
    colorProduct.textContent = guitar.color;
    colorProduct.setAttribute('id', 'color');
    starsProduct.classList.add('stars');

    for (let i = 0; i < 5; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      if (i < guitar.stars) {
        star.classList.add('rated');
      }
      starsProduct.appendChild(star);
      starColor.appendChild(starsProduct);
    }

    starColor.setAttribute('id', 'starColor');

    starColor.appendChild(colorProduct);

    priceProduct.textContent = guitar.price + ' €';
    priceProduct.setAttribute('id', 'price');

    divProduct.appendChild(imageProduct);
    divProduct.appendChild(h3Product);
    divProduct.appendChild(starColor);
    divProduct.appendChild(priceProduct);

    productsSection.appendChild(divProduct);
  }
};

createSelect();
createInputFilter();
createRatingCheck();
createButtonClean();
toPrint(products);
