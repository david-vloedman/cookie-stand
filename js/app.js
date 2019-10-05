'use strict';
// ********************************************************************************************
//
//      Begin
//  Global Variables
//
// ********************************************************************************************
var hours = [
  ['6am', 0],
  ['7am', 0],
  ['8am', 0],
  ['9am', 0],
  ['10am', 0],
  ['11am', 0],
  ['12am', 0],
  ['1pm', 0],
  ['2pm', 0],
  ['3pm', 0],
  ['4pm', 0],
  ['5pm', 0],
  ['6pm', 0],
  ['7pm', 0],
];

var stores = [];

var totalOfTotals = 0;

var salesTable = document.getElementById('salesTable');
// ********************************************************************************************
//
//      End
//  Global Variables
//
// ********************************************************************************************
//
//   Begin
//  Global Functions
//
// ********************************************************************************************
var renderTableHeader = () => {
  var header = document.createElement('tr');
  header.setAttribute('id', 'header');
  header.appendChild(document.createElement('th'));
  hours.forEach(hour => {
    var cell = document.createElement('th');
    cell.textContent = hour[0];
    header.appendChild(cell);
  });
  var totalHeader = document.createElement('th');
  totalHeader.textContent = 'Daily Location Sales';
  header.appendChild(totalHeader);
  return header;
};

var appendTotals = () => {
  var row = document.createElement('tr');
  var firstCol = document.createElement('td');
  var grandTotal = document.createElement('td');
  grandTotal.textContent = totalOfTotals;
  firstCol.textContent = 'Totals';
  row.appendChild(firstCol);

  hours.forEach(element => {
    var cell = document.createElement('td');
    cell.textContent = element[1];
    row.appendChild(cell);
  });
  row.appendChild(grandTotal);

  salesTable.appendChild(row);
};

function start(){
  addStore('Seattle', 65, 23, 6.3);
  addStore('Tokyo', 24, 3, 1.2);
  addStore('Paris', 38, 20, 2.3);
  addStore('Dubai', 38, 11, 3.7);
  addStore('Lima', 16, 2, 4.6);
  renderTable();
}



function formSubmit(){
  var location = document.getElementById('store').value;
  var maxCustomers = document.getElementById('maxCust').value;
  var minCustomers = document.getElementById('minCust').value;
  var avgCookie = document.getElementById('avgCookie').value;
  addStore(location, maxCustomers, minCustomers, avgCookie);
  renderTable();
}

function renderTable(){
  salesTable.innerHTML = '';
  salesTable.appendChild(renderTableHeader());
  stores.forEach(store => {
    store.renderStoreData();
  });

  appendTotals();
}

var addStore = (storeName, maxCustomers, minCustomers, avgCookies) => {
  var store = new Store(storeName, maxCustomers, minCustomers, avgCookies);
  stores.push(store);
};



// ********************************************************************************************
//
//    End
//  Global Functions
//
// ********************************************************************************************
//
//      Begin
//  Store & Associates
//
// ********************************************************************************************
var Store = function(location, maxCustomer, minCustomer, avgCookie){
  this.location = location;
  this.maxCustomer = maxCustomer;
  this.minCustomer = minCustomer;
  this.avgCookie = avgCookie;
  this.totalSales = 0;


};

Store.prototype.customerCnt = function(){
  console.log(this.minCustomer);
  var customers = Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);

  return customers;
};

Store.prototype.genSalesHour = function(){
  var sales = this.customerCnt() * this.avgCookie;
  sales = Math.ceil(sales);
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
  return footer;
};

Store.prototype.renderLocationCell = function(){
  var cell = document.createElement('td');
  cell.textContent = this.location;
  return cell;
};

Store.prototype.renderSalesRow = function(){
  var salesRow = document.createElement('tr');
  salesRow.appendChild(this.renderLocationCell());
  hours.forEach(element => {
    var cell = document.createElement('td');
    var salesHr = this.genSalesHour();
    element[1] += salesHr;
    this.totalSales += salesHr;
    cell.textContent = salesHr;
    salesRow.appendChild(cell);
  });
  var totalCell = document.createElement('td');
  totalCell.textContent = this.totalSales;
  totalOfTotals += this.totalSales;
  salesRow.appendChild(totalCell);
  return salesRow;
};

Store.prototype.renderStoreData = function(){
  salesTable.appendChild(this.renderSalesRow());
};
// ********************************************************************************************
//
//    End
//  Store & Associates
//
// ********************************************************************************************
//
//    Begin
//  Executing Code
//
// ********************************************************************************************




document.addEventListener('submit', function(e){
  e.preventDefault();
  formSubmit();
});
start();





