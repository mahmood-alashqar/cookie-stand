'use srtict ';
let hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

const seattle = {
  location: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,




  render: function () {
    const section = document.getElementById('STORE');

    const articleElement = document.createElement('article');

    section.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.location;

    const unOrederLisElement = document.createElement('ul');
    articleElement.appendChild(unOrederLisElement);

    for (let i = 0; i < hoursOpen.length; i++) {
      let x = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePerSale);
      const liEl = document.createElement('li');
      unOrederLisElement.appendChild(liEl);
      liEl.textContent = [`${hoursOpen[i]}:  ${x} cookies`];
    }
  }


};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//seattle.getRandomNumber(23,65);
console.log(seattle);
seattle.render();
