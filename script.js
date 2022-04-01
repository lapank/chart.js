const data = {
    labels: [
      'Facility Requests',
      'Technology Requests',
      'Personel Requests',
      'Recognition',
      'Strategy Suggestions'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [29, 20, 48, 9, 16],
      backgroundColor: [
        'rgb(0, 0, 0)',
        'rgb(54, 54, 54)',
        'rgb(100, 100, 100)',
        'rgb(200, 200, 200)',
        'rgb(150, 150, 150)'
      ],
      hoverOffset: 4
    }]
  };

    const config = {
      type: 'doughnut',
      data: data
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    
const labels = [
    '2018',
    '2019',
    '2020',
    '2022'
  ];

  const dataTwo = {
    labels: labels,
    datasets: [{
      label: 'Site Views By Year',
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgb(0, 0, 0)',
      data: [64388, 59421, 38002, 31464],
    }]
  };

  const configTwo = {
    type: 'line',
    data: dataTwo,
    options: {}
  };

const lineChart = new Chart(
      document.getElementById('lineChart'),
      configTwo
    );