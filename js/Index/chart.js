const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Privat',
      data: [9, 15, 26, 39, 45, 48, 50, 54, 67, 71, 74, 77, 82, 85, 87, 87, 90, 92, 91, 92, 94, 95, 93, 95, 96],
      borderWidth: 1 
    }, {
      label: 'I arbeid',
      data: [8, 10, 15, 21, 22, 24, 27, 29, 34, 35, 36, 41, 40, 41, 43, 43, 49, 50, 52, 53, 54, 55, 52, 54, 54],
      borderWidth: 1 
    }, {
      label: 'Utdanning',
      data: [4, 5, 9, 10, 9, 11, 13, 14, 14, 14, 16, 17, 18, 19, 20, 22, 23, 24, 26, 25, 28, 26, 29, 30, 29],
      borderWidth: 1 
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value, index, values) => {
            return `${value} %`;
          }
        }
      }
    }
  }
});