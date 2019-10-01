'using strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12am',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

var Store = function(location, maxCustomer, minCustomer, avgCookie){
  this.location = location;
  this.maxCustomer = maxCustomer;
  this.minCustomer = minCustomer;
  this.avgCookie = avgCookie;
  this.salesByHour = [];
  this.salesTable = document.getElementById('salesTable');
};

Store.prototype.customerPerHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  return customers;
};

Store.prototype.genSalesHour = function(){

  var sales = this.customerPerHour() * this.avgCookie;
  sales = Math.floor(sales);
  this.salesByHour.push(sales);

  return sales;
};

Store.prototype.totalSales = function(){
  var sum = 0;
  this.salesByHour.forEach(element => {
    sum += element;
  });
  return sum;
};

Store.prototype.renderTblFooter = function(){
  var footer = document.createElement('tr');
  footer.setAttribute('id','tblFooter');
  this.salesTable.appendChild(footer);
};







Store.prototype.render = function(){
  var listItems = [];

  hours.forEach(element => {
    listItems.push(element + ': ' + this.genSalesHour() + ' cookies');
  });



  var locationSales = document.getElementById('locationSales');

  var ul = document.createElement('ul');
  var h2 = document.createElement('h2');

  h2.appendChild(document.createTextNode('Seattle'));
  ul.appendChild(h2);

  listItems.forEach(element => {
    var item = document.createElement('li');
    var text = document.createTextNode(element);
    item.appendChild(text);
    ul.appendChild(item);
  });

  var sumLi = document.createElement('li');
  sumLi.textContent = 'Total: ' + this.totalSales();
  sumLi.setAttribute('id','sum');
  ul.appendChild(sumLi);


  locationSales.appendChild(ul);
};











document.addEventListener('DOMContentLoaded', function(){
  var seattle = new Store('Seattle', 65, 23, 6.3);
  var tokyo = new Store('Tokyo', 24, 3, 1.2);
  var paris = new Store('Paris', 38, 20, 2.3);
  var dubai = new Store('Dubai', 38, 11, 3.7);
  var lima = new Store('Lima', 16, 2, 4.6);
  seattle.render();
  tokyo.render();
  paris.render();
  dubai.render();
  lima.render();
});














// var seattle = {
//   maxCustomer: 65,
//   minCustomer: 23,
//   averageCookie: 6.3,
//   salesByHour: [],

//   custPerHour: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//     return customers;
//   },
//   genSalesHour: function(){
//     var sales = this.custPerHour() * this.averageCookie;
//     sales = Math.floor(sales);
//     this.salesByHour.push(sales);
//     return sales;
//   },

//   totalSales: function(){
//     var sum = 0;
//     this.salesByHour.forEach(element => {
//       sum += element;
//     });
//     return sum;
//   },

//   render: function(){

//     var listItems = [];
//     hours.forEach(element => {
//       listItems.push(element + ': ' + this.genSalesHour() + ' cookies');
//     });

//     var locationSales = document.getElementById('locationSales');
//     var ul = document.createElement('ul');
//     var h2 = document.createElement('h2');

//     h2.appendChild(document.createTextNode('Seattle'));
//     ul.appendChild(h2);

//     listItems.forEach(element => {
//       var item = document.createElement('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item);
//     });

//     var sumLi = document.createElement('li');
//     sumLi.textContent = 'Total: ' + this.totalSales();
//     sumLi.setAttribute('id','sum');
//     ul.appendChild(sumLi);


//     locationSales.appendChild(ul);
//   }

// };




// var tokyo = {
//   maxCustomer: 24,
//   minCustomer: 3,
//   averageCookie: 1.2,
//   salesByHour: [],

//   custPerHour: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//     return customers;
//   },
//   genSalesHour: function(){
//     var sales = this.custPerHour() * this.averageCookie;
//     sales = Math.floor(sales);
//     this.salesByHour.push(sales);
//     return sales;
//   },

//   totalSales: function(){
//     var sum = 0;
//     this.salesByHour.forEach(element => {
//       sum += element;
//     });
//     return sum;
//   },
//   render: function(){

//     var listItems = [];
//     hours.forEach(element => {
//       listItems.push(element + ': ' + this.genSalesHour() + ' cookies');
//     });

//     var locationSales = document.getElementById('locationSales');
//     var ul = document.createElement('ul');
//     var h2 = document.createElement('h2');

//     h2.appendChild(document.createTextNode('Tokyo'));
//     ul.appendChild(h2);

//     listItems.forEach(element => {
//       var item = document.createElement('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item);
//     });
//     var sumLi = document.createElement('li');
//     sumLi.textContent = 'Total: ' + this.totalSales();
//     sumLi.setAttribute('id','sum');
//     ul.appendChild(sumLi);

//     locationSales.appendChild(ul);
//   }
// };



// var dubai = {
//   maxCustomer: 38,
//   minCustomer: 11,
//   averageCookie: 3.7,
//   salesByHour: [],

//   custPerHour: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//     return customers;
//   },
//   genSalesHour: function(){
//     var sales = this.custPerHour() * this.averageCookie;
//     sales = Math.floor(sales);
//     this.salesByHour.push(sales);
//     return sales;
//   },

//   totalSales: function(){
//     var sum = 0;
//     this.salesByHour.forEach(element => {
//       sum += element;
//     });
//     return sum;
//   },

//   render: function(){

//     var listItems = [];
//     hours.forEach(element => {
//       listItems.push(element + ': ' + this.genSalesHour() + ' cookies');
//     });

//     var locationSales = document.getElementById('locationSales');
//     var ul = document.createElement('ul');
//     var h2 = document.createElement('h2');

//     h2.appendChild(document.createTextNode('Dubai'));
//     ul.appendChild(h2);

//     listItems.forEach(element => {
//       var item = document.createElement('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item);
//     });
//     var sumLi = document.createElement('li');
//     sumLi.textContent = 'Total: ' + this.totalSales();
//     sumLi.setAttribute('id','sum');
//     ul.appendChild(sumLi);

//     locationSales.appendChild(ul);
//   }
// };




// var paris = {
//   maxCustomer: 38,
//   minCustomer: 20,
//   averageCookie: 2.3,
//   salesByHour: [],

//   custPerHour: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//     return customers;
//   },
//   genSalesHour: function(){
//     var sales = this.custPerHour() * this.averageCookie;
//     sales = Math.floor(sales);
//     this.salesByHour.push(sales);
//     return sales;
//   },

//   totalSales: function(){
//     var sum = 0;
//     this.salesByHour.forEach(element => {
//       sum += element;
//     });
//     return sum;
//   },
//   render: function(){

//     var listItems = [];
//     hours.forEach(element => {
//       listItems.push(element + ': ' + this.genSalesHour() + ' cookies');
//     });

//     var locationSales = document.getElementById('locationSales');
//     var ul = document.createElement('ul');
//     var h2 = document.createElement('h2');

//     h2.appendChild(document.createTextNode('Paris'));
//     ul.appendChild(h2);

//     listItems.forEach(element => {
//       var item = document.createElement('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item);
//     });
//     var sumLi = document.createElement('li');
//     sumLi.textContent = 'Total: ' + this.totalSales();
//     sumLi.setAttribute('id','sum');
//     ul.appendChild(sumLi);
//     locationSales.appendChild(ul);
//   }
// };




// var lima = {
//   location: 'Lima',
//   maxCustomer: 16,
//   minCustomer: 2,
//   averageCookie: 4.6,
//   salesByHour: [],

//   custPerHour: function(){
//     var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//     return customers;
//   },
//   genSalesHour: function(){
//     var sales = this.custPerHour() * this.averageCookie;
//     sales = Math.floor(sales);
//     this.salesByHour.push(sales);
//     return sales;
//   },

//   totalSales: function(){
//     var sum = 0;
//     this.salesByHour.forEach(element => {
//       sum += element;
//     });
//     return sum;
//   },

//   render: function(){

//     var listItems = [];
//     hours.forEach(element => {
//       listItems.push(element + ': ' + this.genSalesHour() + ' cookies');
//     });

//     var locationSales = document.getElementById('locationSales');
//     var ul = document.createElement('ul');
//     var h2 = document.createElement('h2');
//     h2.textContent = this.location;
//     ul.appendChild(h2);

//     listItems.forEach(element => {
//       var item = document.createElement('li');
//       var text = document.createTextNode(element);
//       item.appendChild(text);
//       ul.appendChild(item);
//     });
//     var sumLi = document.createElement('li');
//     sumLi.textContent = 'Total: ' + this.totalSales();
//     sumLi.setAttribute('id','sum');

//     ul.appendChild(sumLi);
//     locationSales.appendChild(ul);
//   }


// };










