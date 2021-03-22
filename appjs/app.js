'use srtict ';
let hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const section = document.getElementById('STORE');
const articleElement = document.createElement('article');
section.appendChild(articleElement);
const tabelElement = document.createElement('table');

articleElement.appendChild(tabelElement);
let footerData = [];



// constructor function

//1 name start with capital | factory function
//2 the use of "new" keyword for new opj.
//3 prototype method

function Lacations (location,minCustPerHour,maxCustPerHour,avgCookiePerSale )
{
  this.location = location;
  this.total = 0;
  this.totalCulomn=0;
  this.totalOfTotal=0;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.custPerHoursArray = [];
  this.cookiesPerHours = [];
  this.custPerHours=function()
  {
    for (let i =0 ; i<hoursOpen.length;i++)
    {
      let custPerHours = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) );
      this.custPerHoursArray.push(custPerHours);

    }


  };
  this.calCookiesPerHour = function()
  {
    this.custPerHours();
    for (let i =0;i<hoursOpen.length;i++)
    {

      let cookies = this.custPerHoursArray[i] * avgCookiePerSale;
      this.cookiesPerHours.push(Math.floor(cookies));


    }

  };

  this.headerRander = function()
  {
    const tableHeaderRow1 = document.createElement('tr');
    tabelElement.appendChild(tableHeaderRow1);
    const tableHeader = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader);// repeat
    tableHeader.textContent='LOC';// repeat


    const tableHeader1 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader1);// repeat
    tableHeader1.textContent='6am';// repeat
    const tableHeader2 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader2);// repeat
    tableHeader2.textContent='7am';// repeat
    const tableHeader3 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader3);// repeat
    tableHeader3.textContent='8am';// repeat
    const tableHeader4 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader4);// repeat
    tableHeader4.textContent='9am';
    const tableHeader5 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader5);// repeat
    tableHeader5.textContent='10am';
    const tableHeader6 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader6);// repeat
    tableHeader6.textContent='11am';
    const tableHeader7 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader7);// repeat
    tableHeader7.textContent='12pm';
    const tableHeader8 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader8);// repeat
    tableHeader8.textContent='1pm';
    const tableHeader9 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader9);// repeat
    tableHeader9.textContent='2pm';
    const tableHeader10 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader10);// repeat
    tableHeader10.textContent='3pm';
    const tableHeader11 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader11);// repeat
    tableHeader11.textContent='4pm';
    const tableHeader12 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader12);// repeat
    tableHeader12.textContent='5pm';
    const tableHeader13 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader13);// repeat
    tableHeader13.textContent='6pm';
    const tableHeader14 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader14);// repeat
    tableHeader14.textContent='7pm';
    const tableHeader15 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader15);// repeat
    tableHeader15.textContent='8pm';
    const tableHeader16 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader16);// repeat
    tableHeader16.textContent='Daily Location Total';

  };

  this.setSummationOfColumns = function ( )//totalFirstColumns
  {

    let loc =[seattle,Tokyo,Dubai,Paris,Lima];
    for (let i=0;i<hoursOpen.length;i++)
    {

      for (let j =0;j<loc.length;j++)
      {
        this.totalCulomn +=loc[j].cookiesPerHours[i];
      }


      footerData.push(this.totalCulomn);
      this.totalCulomn = 0;
      console.log(this.totalCulomn);
    }
    //totalCulomn =Math.floor(totalCulomn+totalFirstColumns) ;

  };


}


Lacations.prototype.render = function()
{
  this.calCookiesPerHour();






  // const h2Element = document.createElement('h2');
  // articleElement.appendChild(h2Element);
  // h2Element.textContent = this.location;





  const tableRow2 = document.createElement('tr');
  tabelElement.appendChild(tableRow2);
  const tableData = document.createElement('td');
  tableRow2.appendChild(tableData);
  tableData.textContent=this.location;

  for (let i = 0; i < hoursOpen.length; i++){
    const tableData1 = document.createElement('td');

    tableRow2.appendChild(tableData1);



    tableData1.textContent=this.cookiesPerHours[i];
    this.total = this.cookiesPerHours[i]+this.total;
    // if (i===0){
    //   this.setSummationOfColumns(this.cookiesPerHours[i]); }


  }




  const tableData2 = document.createElement('td');

  tableRow2.appendChild(tableData2);
  tableData2.textContent=` ${this.total}`;


};
Lacations.prototype.footerRender = function()
{
  this.setSummationOfColumns();
  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);
  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);// repeat
  tableHeader.textContent='Total';// repeat

  for (let i =0; i<hoursOpen.length;i++)
  {
    const tableHeader1 = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader1);
    tableHeader1.textContent=footerData[i];
  }
  const tableHeader1 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader1);
  tableHeader1.textContent=this.totalOfTotal=this.total+this.totalCulomn;

  // const tableHeader2 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader2);// repeat
  // tableHeader2.textContent=footerData[1];
  // const tableHeader3 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader3);// repeat
  // tableHeader3.textContent=this.totalCulomn;
  // const tableHeader4 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader4);// repeat
  // tableHeader4.textContent=this.totalCulomn;
  // const tableHeader5 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader5);// repeat
  // tableHeader5.textContent=this.totalCulomn;
  // const tableHeader6 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader6);// repeat
  // tableHeader6.textContent=this.totalCulomn;
  // const tableHeader7 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader7);// repeat
  // tableHeader7.textContent=this.totalCulomn;
  // const tableHeader8 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader8);// repeat
  // tableHeader8.textContent=this.totalCulomn;
  // const tableHeader9 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader9);// repeat
  // tableHeader9.textContent=this.totalCulomn;
  // const tableHeader10 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader10);// repeat
  // tableHeader10.textContent=this.totalCulomn;
  // const tableHeader11 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader11);// repeat
  // tableHeader11.textContent=this.totalCulomn;
  // const tableHeader12 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader12);// repeat
  // tableHeader12.textContent=this.totalCulomn;
  // const tableHeader13 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader13);// repeat
  // tableHeader13.textContent=this.totalCulomn;
  // const tableHeader14 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader14);// repeat
  // tableHeader14.textContent=this.totalCulomn;
  // const tableHeader15 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader15);// repeat
  // tableHeader15.textContent=this.totalCulomn;
  // const tableHeader16 = document.createElement('th');
  // tableHeaderRow1.appendChild(tableHeader16);// repeat
  // //tableHeader16.textContent=Location.totalCulomn;+this.total;




};

const seattle = new Lacations ('seattle', 23 , 65 , 6.3);
seattle.headerRander();
seattle.render();


const Tokyo = new Lacations ('Tokyo', 3 , 24 ,1.2);

Tokyo.render();
const Dubai = new Lacations ('Dubai', 11 , 38 , 3.7);
Dubai.render();
const Paris = new Lacations ('Paris', 20 , 38 , 2.3);
Paris.render();
const Lima = new Lacations ('Lima', 2 , 16 , 4.6);
Lima.render();
seattle.footerRender();

//
// for (let i=0;i<hoursOpen.length;i++)
// {
//   let temp =0;
//   for (let j =i;j<loc.length;j++)
//   {
//     temp=temp+loc[j].cookiesPerHours[i];
//   }
// }

// const Total = new Lacations ('Total', 0 , 0 , 0);
// Total.render();

// console.log(seattle);



























// const seattle = {
//   location: 'seattle',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   total : 0,



//   render: function () {
//     const section = document.getElementById('STORE');

//     const articleElement = document.createElement('article');

//     section.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.location;

//     const unOrederLisElement = document.createElement('ul');
//     articleElement.appendChild(unOrederLisElement);

//     for (let i = 0; i < hoursOpen.length; i++) {
//       let x = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePerSale);
//       const liEl = document.createElement('li');
//       unOrederLisElement.appendChild(liEl);
//       liEl.textContent = [`${hoursOpen[i]}:  ${x} cookies`];
//       this.total =this.total+x;
//     }
//     const totalElement = document.createElement('p');
//     section.appendChild(totalElement);
//     totalElement.textContent=`The Total Is : ${this.total}`;
//   }


// };


// console.log(seattle);
// seattle.render();

// const Tokyo = {
//   location: 'Tokyo',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   total : 0,




//   render: function () {
//     const section = document.getElementById('STORE');

//     const articleElement = document.createElement('article');

//     section.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.location;

//     const unOrederLisElement = document.createElement('ul');
//     articleElement.appendChild(unOrederLisElement);

//     for (let i = 0; i < hoursOpen.length; i++) {
//       let x = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePerSale);
//       const liEl = document.createElement('li');
//       unOrederLisElement.appendChild(liEl);
//       liEl.textContent = [`${hoursOpen[i]}:  ${x} cookies`];
//       this.total =this.total+x;

//     }
//     const totalElement = document.createElement('p');
//     section.appendChild(totalElement);
//     totalElement.textContent=`The Total Is : ${this.total}`;
//   }


// };


// console.log(Tokyo);
// Tokyo.render();


// const Dubai = {
//   location: 'Dubai',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   total : 0,




//   render: function () {
//     const section = document.getElementById('STORE');

//     const articleElement = document.createElement('article');

//     section.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.location;

//     const unOrederLisElement = document.createElement('ul');
//     articleElement.appendChild(unOrederLisElement);

//     for (let i = 0; i < hoursOpen.length; i++) {
//       let x = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePerSale);
//       const liEl = document.createElement('li');
//       unOrederLisElement.appendChild(liEl);
//       liEl.textContent = [`${hoursOpen[i]}:  ${x} cookies`];
//       this.total =this.total+x;

//     }
//     const totalElement = document.createElement('p');
//     section.appendChild(totalElement);
//     totalElement.textContent=`The Total Is : ${this.total}`;
//   }


// };


// console.log(Dubai);
// Dubai.render();



// const Paris = {
//   location: 'Paris',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   total : 0,




//   render: function () {
//     const section = document.getElementById('STORE');

//     const articleElement = document.createElement('article');

//     section.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.location;

//     const unOrederLisElement = document.createElement('ul');
//     articleElement.appendChild(unOrederLisElement);

//     for (let i = 0; i < hoursOpen.length; i++) {
//       let x = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePerSale);
//       const liEl = document.createElement('li');
//       unOrederLisElement.appendChild(liEl);
//       liEl.textContent = [`${hoursOpen[i]}:  ${x} cookies`];
//       this.total =this.total+x;

//     }
//     const totalElement = document.createElement('p');
//     section.appendChild(totalElement);
//     totalElement.textContent=`The Total Is : ${this.total}`;


//   }


// };


// console.log(Paris);
// Paris.render();



// const Lima = {
//   location: 'Lima',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   total : 0,




//   render: function () {
//     const section = document.getElementById('STORE');

//     const articleElement = document.createElement('article');

//     section.appendChild(articleElement);

//     const h2Element = document.createElement('h2');
//     articleElement.appendChild(h2Element);
//     h2Element.textContent = this.location;

//     const unOrederLisElement = document.createElement('ul');
//     articleElement.appendChild(unOrederLisElement);

//     for (let i = 0; i < hoursOpen.length; i++) {
//       let x = Math.trunc(getRandomNumber(this.minCustPerHour, this.maxCustPerHour) * this.avgCookiePerSale);
//       const liEl = document.createElement('li');
//       unOrederLisElement.appendChild(liEl);
//       liEl.textContent = [`${hoursOpen[i]}:  ${x} cookies`];
//       this.total =this.total+x;

//     }
//     const totalElement = document.createElement('p');
//     section.appendChild(totalElement);
//     totalElement.textContent=`The Total Is : ${this.total}`;
//   }


// };


// console.log(Lima);
// Lima.render();
