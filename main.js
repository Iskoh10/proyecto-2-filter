import './style.css';

const products = [
  {
    name: 'Fender Cory Wong Strat SBT',
    price: 2.391,
    color: 'azul',
    stars: 5,
    reviews: 1,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_52/523755/18870252_800.jpg'
  },
  {
    name: 'ESP LTD Snakebyte Camo',
    price: 1.779,
    color: 'camo',
    stars: 3.5,
    reviews: 2,
    seller: 'ESP',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/535518/16923191_800.jpg'
  },
  {
    name: 'PRS SE Silver Sky Piano Black',
    price: 919,
    color: 'negro',
    stars: 4.5,
    reviews: 2,
    seller: 'PRS',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_56/568796/18287111_800.jpg'
  },
  {
    name: 'Sterling by Music Man Petrucci Majesty 6 AD',
    price: 1.359,
    color: 'negro',
    stars: 4.8,
    reviews: 7,
    seller: 'Sterling by Music Man',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_43/434683/18134829_800.jpg'
  },
  {
    name: 'Schecter Keith Merrow KM-7 MK-III BLC',
    price: 1.799,
    color: 'azul',
    stars: 4.8,
    reviews: 4,
    seller: 'Schecter',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_44/448823/13797446_800.jpg'
  },
  {
    name: 'Fender Brent Mason Tele MN PrimerGrey',
    price: 3.049,
    color: 'gris',
    stars: 3.8,
    reviews: 6,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_49/497572/16590316_800.jpg'
  },
  {
    name: 'Evh Frankie Striped MN Relic R/W/B',
    price: 1.429,
    color: 'rojo',
    stars: 3.8,
    reviews: 21,
    seller: 'Evh',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_48/483564/16815041_800.jpg'
  },
  {
    name: 'ESP LTD Alexi Hexed Sawtooth LH',
    price: 1.799,
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
    stars: 4.9,
    reviews: 8,
    seller: 'Dean',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_19/195784/6285931_800.jpg'
  },
  {
    name: 'ESP LTD KH WZ',
    price: 1.749,
    color: 'negro',
    stars: 4.8,
    reviews: 12,
    seller: 'ESP',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_45/458996/13872551_800.jpg'
  },
  {
    name: 'Fender Clapton Strat Signature PW',
    price: 2.439,
    color: 'plateado',
    stars: 4.6,
    reviews: 8,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_17/179405/6128191_800.jpg'
  },
  {
    name: 'Evh Wolfgang USA Ivory',
    price: 4.111,
    color: 'blanco',
    stars: 5,
    reviews: 5,
    seller: 'Evh',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_40/405786/11734810_800.jpg'
  },
  {
    name: 'Sterling by Music Man Majesty 100 Chalk Grey',
    price: 1.359,
    color: 'gris',
    stars: 4.3,
    reviews: 2,
    seller: 'Sterling by Music Man',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_58/585134/18897876_800.jpg'
  },
  {
    name: 'Fender Lincoln Brewster Strat MN AG',
    price: 2.591,
    color: 'dorado',
    stars: 3.2,
    reviews: 1,
    seller: 'Fender',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_46/468788/14276808_800.jpg'
  },
  {
    name: 'Evh Wolfgang WG Standard Xotic',
    price: 599,
    color: 'naranja',
    stars: 4.8,
    reviews: 6,
    seller: 'Evh',
    image:
      'https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_45/456719/14646721_800.jpg'
  }
];

const piruleta = [
  {
    name: 'Piruleta',
    price: 0.95,
    color: 'rojo',
    stars: 5,
    reviews: 100,
    seller: 'Kiosko',
    image:
      'https://www.caramelospaco.com/255-superlarge_default/piruleta-corazon-pequena.jpg'
  }
];

const productsSection = document.querySelector('.products');

for (const producto of products) {
  const divProduct = document.createElement('div');
  const h3Product = document.createElement('h3');
  const imageProduct = document.createElement('img');
  const colorProduct = document.createElement('p');
  const starsProduct = document.createElement('div');
  const reviewsProduct = document.createElement('p');
  const priceProduct = document.createElement('p');

  divProduct.classList.add('product');
  h3Product.textContent = producto.name;
  imageProduct.src = producto.image;
  colorProduct.textContent = producto.color;

  for (let i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.src =
      'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png';
    starsProduct.classList.add('star');
    starsProduct.appendChild(star);
  }

  reviewsProduct.textContent = producto.reviews;
  priceProduct.textContent = producto.price + ' €';

  console.log(imageProduct);

  divProduct.appendChild(h3Product);
  divProduct.appendChild(imageProduct);
  divProduct.appendChild(colorProduct);
  divProduct.appendChild(starsProduct);
  divProduct.appendChild(reviewsProduct);
  divProduct.appendChild(priceProduct);

  productsSection.appendChild(divProduct);
}
