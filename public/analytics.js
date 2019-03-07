var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'production',
        backgroundColor: 'rgb(75, 225, 50)',
        borderColor: 'rgb(75, 225, 50)',
        data: [0, 40, 5, 25, 20, 30, 10]
      }
    ]
  },

  // Configuration options go here
  options: {}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'production',
        backgroundColor: 'rgb(75, 75, 75)',
        borderColor: 'rgb(75, 75, 75)',
        data: [50, 0, 0, 20, 5, 30, 45]
      }
    ]
  },

  // Configuration options go here
  options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'production',
        backgroundColor: 'rgb(220, 180, 78)',
        borderColor: 'rgb(220, 180, 78)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }
    ]
  },

  // Configuration options go here
  options: {}
});
