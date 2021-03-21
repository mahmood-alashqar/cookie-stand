'use srtict ';
let hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



const seattle = {
  location: 'seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  total : 0,



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
      this.total =this.total+x;
    }
    const totalElement = document.createElement('p');
    section.appendChild(totalElement);
    totalElement.textContent=`The Total Is : ${this.total}`;
  }


};


console.log(seattle);
seattle.render();

const Tokyo = {
  location: 'Tokyo',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  total : 0,




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
      this.total =this.total+x;

    }
    const totalElement = document.createElement('p');
    section.appendChild(totalElement);
    totalElement.textContent=`The Total Is : ${this.total}`;
  }


};


console.log(Tokyo);
Tokyo.render();


const Dubai = {
  location: 'Dubai',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  total : 0,




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
      this.total =this.total+x;

    }
    const totalElement = document.createElement('p');
    section.appendChild(totalElement);
    totalElement.textContent=`The Total Is : ${this.total}`;
  }


};


console.log(Dubai);
Dubai.render();



const Paris = {
  location: 'Paris',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  total : 0,




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
      this.total =this.total+x;

    }
    const totalElement = document.createElement('p');
    section.appendChild(totalElement);
    totalElement.textContent=`The Total Is : ${this.total}`;


  }


};


console.log(Paris);
Paris.render();



const Lima = {
  location: 'Lima',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  total : 0,




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
      this.total =this.total+x;

    }
    const totalElement = document.createElement('p');
    section.appendChild(totalElement);
    totalElement.textContent=`The Total Is : ${this.total}`;
  }


};


console.log(Lima);
Lima.render();
