const apples = ['Gala', 'Red Delicious', 'Fuji', 'Cortland'];

const Ben = {
  favBand: 'Beastie Boys',
  favFood: 'Mexican',
  favBook: 'Catcher in the Rye',
  favColor: 'Blue Green',
  favActivity: 'Coding',
};

const Sean = {
  favBand: 'Metallica',
  favFood: 'Pizza',
  favBook: 'Life of Pi',
  favColor: 'Green',
  favActivity: 'Surfing',
};

const Ryan = {
  favBand: 'Guster',
  favFood: 'Chinese',
  favBook: 'The Giver',
  favColor: 'Silver',
  favActivity: 'Mountain Biking',
};

const Austen = {
  favBand: 'Third Eye Blind',
  favFood: 'Middle Eastern',
  favBook: '50 Shades of Grey',
  favColor: 'Yellow',
  favActivity: 'Comedy Clubs',
};

const Karthik = {
  favBand: 'Smashing Pumpkins',
  favFood: 'Spaghetti',
  favBook: 'The Puppy who Lost His Way',
  favColor: 'Red',
  favActivity: 'Rock Climbing',
};

const addNums = (x, y) => {
  return x + y;
};

const callBackInvoker = (cb) => {
  return (cb());
};

const iterator = (num, cb) => {
  for (let i = 1; i <= num; i++) {
    cb();
  }
};

module.exports = {
  apples,
  Ben,
  Sean,
  Ryan,
  Austen,
  Karthik,
  addNums,
  callBackInvoker,
  iterator,
};