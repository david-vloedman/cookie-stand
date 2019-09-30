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

var seattle = {
  maxCustomer: 65,
  minCustomer: 23,
  averageCookie: 6.3,
  salesByHour: [],

  custPerHour: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);    
    return customers;
  },
  genSalesHour: function(){
    var sales = this.custPerHour() * this.averageCookie;
    sales = Math.floor(sales);
    this.salesByHour.push(sales);
    return sales;
  },

  totalSales: function(){
    var sum = 0;
    this.salesByHour.forEach(element => {
      sum += element;
    });
    return sum;
  },

  render: function(){

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
    var sumText = document.createTextNode('Total: ' + this.totalSales());
    sumLi.appendChild(sumText);
    ul.appendChild(sumLi);


    locationSales.appendChild(ul);
  }

};

seattle.render();


var tokyo = {
  maxCustomer: 24,
  minCustomer: 3,
  averageCookie: 1.2,
  salesByHour: [],

  custPerHour: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);    
    return customers;
  },
  genSalesHour: function(){
    var sales = this.custPerHour() * this.averageCookie;
    sales = Math.floor(sales);
    this.salesByHour.push(sales);    
    return sales;
  },

  totalSales: function(){
    var sum = 0;
    this.salesByHour.forEach(element => {
      sum += element;
    });
    return sum;
  },
  render: function(){

    var listItems = [];
    hours.forEach(element => {
      listItems.push(element + ': ' + this.genSalesHour() + ' cookies');      
    });

    var locationSales = document.getElementById('locationSales');    
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.appendChild(document.createTextNode('Tokyo'));
    ul.appendChild(h2);

    listItems.forEach(element => {
      var item = document.createElement('li');
      var text = document.createTextNode(element);
      item.appendChild(text);
      ul.appendChild(item);
    });
    var sumLi = document.createElement('li');
    var sumText = document.createTextNode('Total: ' + this.totalSales());
    sumLi.appendChild(sumText);
    ul.appendChild(sumLi);

    locationSales.appendChild(ul);
  }
};

tokyo.render();

var dubai = {
  maxCustomer: 38,
  minCustomer: 11,
  averageCookie: 3.7,
  salesByHour: [],

  custPerHour: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);    
    return customers;
  },
  genSalesHour: function(){
    var sales = this.custPerHour() * this.averageCookie;
    sales = Math.floor(sales);
    this.salesByHour.push(sales);    
    return sales;
  },

  totalSales: function(){
    var sum = 0;
    this.salesByHour.forEach(element => {
      sum += element;
    });
    return sum;
  },

  render: function(){

    var listItems = [];
    hours.forEach(element => {
      listItems.push(element + ': ' + this.genSalesHour() + ' cookies');      
    });

    var locationSales = document.getElementById('locationSales');    
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.appendChild(document.createTextNode('Dubai'));
    ul.appendChild(h2);

    listItems.forEach(element => {
      var item = document.createElement('li');
      var text = document.createTextNode(element);
      item.appendChild(text);
      ul.appendChild(item);
    });
    var sumLi = document.createElement('li');
    var sumText = document.createTextNode('Total: ' + this.totalSales());
    sumLi.appendChild(sumText);
    ul.appendChild(sumLi);

    locationSales.appendChild(ul);
  }
};

dubai.render();


var paris = {
  maxCustomer: 38,
  minCustomer: 20,
  averageCookie: 2.3,
  salesByHour: [],

  custPerHour: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);    
    return customers;
  },
  genSalesHour: function(){
    var sales = this.custPerHour() * this.averageCookie;
    sales = Math.floor(sales);
    this.salesByHour.push(sales);    
    return sales;
  },

  totalSales: function(){
    var sum = 0;
    this.salesByHour.forEach(element => {
      sum += element;
    });
    return sum;
  },
  render: function(){

    var listItems = [];
    hours.forEach(element => {
      listItems.push(element + ': ' + this.genSalesHour() + ' cookies');      
    });

    var locationSales = document.getElementById('locationSales');    
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.appendChild(document.createTextNode('Paris'));
    ul.appendChild(h2);

    listItems.forEach(element => {
      var item = document.createElement('li');
      var text = document.createTextNode(element);
      item.appendChild(text);
      ul.appendChild(item);
    });
    var sumLi = document.createElement('li');
    var sumText = document.createTextNode('Total: ' + this.totalSales());
    sumLi.appendChild(sumText);
    ul.appendChild(sumLi);
    locationSales.appendChild(ul);
  }
};

paris.render();


var lima = {
  maxCustomer: 16,
  minCustomer: 2,
  averageCookie: 4.6,
  salesByHour: [],

  custPerHour: function(){
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);    
    return customers;
  },
  genSalesHour: function(){
    var sales = this.custPerHour() * this.averageCookie;
    sales = Math.floor(sales);
    this.salesByHour.push(sales);    
    return sales;
  },

  totalSales: function(){
    var sum = 0;
    this.salesByHour.forEach(element => {
      sum += element;
    });
    return sum;
  },

  render: function(){

    var listItems = [];
    hours.forEach(element => {
      listItems.push(element + ': ' + this.genSalesHour() + ' cookies');      
    });

    var locationSales = document.getElementById('locationSales');
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');

    h2.appendChild(document.createTextNode('Lima'));
    ul.appendChild(h2);

    listItems.forEach(element => {
      var item = document.createElement('li');
      var text = document.createTextNode(element);
      item.appendChild(text);
      ul.appendChild(item);
    });
    var sumLi = document.createElement('li');
    var sumText = document.createTextNode('Total: ' + this.totalSales());
    sumLi.appendChild(sumText);
    ul.appendChild(sumLi);
    locationSales.appendChild(ul);
  }


};

lima.render();








