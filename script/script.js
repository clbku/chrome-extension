

function formatText(text) {
  text = text[0].split(": ");
  return text[0] + ": " + formatTime(text[1]);
}

function formatTime(second) {
  let s = second % 60;
  let m = ((second - s) / 60) % 60;
  let h = Math.floor(second / 60 / 60);
  if ( h === 0 ) {
    if (m === 0) return s + "s";
    else return m + "m" + s + "s";
  }
  else return h + "h" + m + "m" + s + "s";
}

chrome.storage.sync.get(null, function(items) {
  var allKeys = Object.keys(items);
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: allKeys,
      datasets: [
        {
          label: allKeys.map(value => value + ": " + formatTime(items[value])),
          data: Object.values(items),
          backgroundColor: allKeys.map(value => randomColor()),
        }
      ]
      
    },
    options: {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            console.log(tooltipItem, data);
              let label = "";
              label += data.labels[tooltipItem.index];
              label += ": ";
              label += formatTime(data.datasets[0].data[tooltipItem.index]);
              return label;
          }
        }
      }}
  });
});

