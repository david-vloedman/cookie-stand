'use strict';

// ********************************************************************************************
//
//      Begin
//  Global letiables
//
// ********************************************************************************************

let hours = [
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

let stores = [];

let totalOfTotals = 0;

let salesTable = $('#salesTable');

// ********************************************************************************************
//
//      End
//  Global letiables
//
// ********************************************************************************************
//
//   Begin
//  Global Functions
//
// ********************************************************************************************

let renderTableHeader = () => {
  let $header = $('<tr></tr');
  $header.attr('id', 'header');
  $header.append($('<th></th'));
  hours.forEach(hour => {
    let $cell = $('<th></th>');
    $cell.text(hour[0]);
    $header.append($cell);
  });
  let $totalHeader = $('<th></th>');
  $totalHeader.text('Total');
  $header.append($totalHeader);
  return $header;
};

let appendTotals = () => {
  let $row = $('<tr></tr');
  let $firstCol = $('<td></td>');
  let $grandTotal = $('<td></td>');
  $grandTotal.text(totalOfTotals);
  $firstCol.text('Totals');
  $row.append($firstCol);

  hours.forEach(hour => {
    let $cell = $('<td></td.');
    $cell.text(hour[1]);
    $row.append($cell);
  });
  $row.append($grandTotal);

  salesTable.append($row);
};

function start() {
  addStore('Seattle', 65, 23, 6.3);
  addStore('Tokyo', 24, 3, 1.2);
  addStore('Paris', 38, 20, 2.3);
  addStore('Dubai', 38, 11, 3.7);
  addStore('Lima', 16, 2, 4.6);
  renderTable();
  new TotalChart('bar').render();
  new TotalChart('pie').render();
}



function formSubmit() {
  let location = $('#store').val();
  let maxCustomers = $('#maxCust').val();
  let minCustomers = $('#minCust').val();
  let avgCookie = $('#avgCookie').val();
  addStore(location, maxCustomers, minCustomers, avgCookie);
  renderTable();
}

function renderTable() {
  salesTable.text('');
  salesTable.append(renderTableHeader());
  stores.forEach(store => {
    store.renderStoreData();
  });

  appendTotals();
}

let addStore = (storeName, maxCustomers, minCustomers, avgCookies) => {
  let store = new Store(storeName, maxCustomers, minCustomers, avgCookies);
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

let Store = function (location, maxCustomer, minCustomer, avgCookie) {
  this.location = location;
  this.maxCustomer = maxCustomer;
  this.minCustomer = minCustomer;
  this.avgCookie = avgCookie;
  this.totalSales = 0;


};

Store.prototype.customerCnt = function () {
  let customers = Math.floor((Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);

  return customers;
};

Store.prototype.genSalesHour = function () {
  let sales = this.customerCnt() * this.avgCookie;
  sales = Math.ceil(sales);
  return sales;
};

Store.prototype.totalSales = function () {
  let sum = 0;
  this.salesByHour.forEach(element => {
    sum += element;
  });
  return sum;
};

Store.prototype.renderTblFooter = function () {
  let $footer = $('<tr></tr>');
  f$ooter.attr('id', 'tblFooter');
  return $footer;
};

Store.prototype.renderLocationCell = function () {
  let $cell = $('<td></td>');
  $cell.attr('class', 'locations');
  $cell.text(this.location);
  return $cell;
};

Store.prototype.renderSalesRow = function () {
  let $salesRow = $('<tr></tr>');
  $salesRow.append(this.renderLocationCell());
  hours.forEach(element => {
    let $cell = $('<td></td>');
    let salesHr = this.genSalesHour();
    element[1] += salesHr;
    this.totalSales += salesHr;
    $cell.text(salesHr);
    $salesRow.append($cell);
  });
  let $totalCell = $('<td></td>');
  $totalCell.attr('class', 'totals');
  $totalCell.text(this.totalSales);
  totalOfTotals += this.totalSales;
  $salesRow.append($totalCell);
  return $salesRow;
};

Store.prototype.renderStoreData = function () {
  salesTable.append(this.renderSalesRow());
};
// ********************************************************************************************
//
//    End
//  Store & Associates
//
// ********************************************************************************************
// ********************************************************************************************
//
//    Begin
//  Charting
//
// ********************************************************************************************

const chartManager = {

  getLabels: () => {
    const labels = [];
    $('.locations').each((i, location) => {
      labels.push($(location).html());
    });
    return labels;
  },

  getData: () => {
    const data = [];
    $('.totals').each((i, total) => {
      data.push($(total).html());
    });
    return data;
  },

  getColors: count => {
    return randomColor({
      count: count
    });
  }
}

function TotalChart(chartType) {
  this.type = chartType;
  this.canvas = $('<canvas></canvas');
  this.labels = chartManager.getLabels();
  this.data = chartManager.getData();
  this.colors = chartManager.getColors(this.data.length);
}

TotalChart.prototype.render = function () {
  $('#chart').append(this.canvas);
  $(this.canvas).attr('id', this.type);
  new Chart(this.canvas, {
    type: this.type,
    data: {
      labels: this.labels,
      datasets: [{
        label: 'Number of Sales',
        data: this.data,
        backgroundColor: this.colors
      }]
    }

  })
}





// ********************************************************************************************
//
//    Begin
//  Executing Code
//
// ********************************************************************************************




$('#newStore').on('click', function () {
  e.preventDefault();
  formSubmit();
});


start();