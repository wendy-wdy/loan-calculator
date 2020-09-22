function renderPieChart(chart, dataSet, labels, colors) {
  const data = {
    datasets: [{
      data: dataSet,
      borderWidth: 2,
      backgroundColor: colors,
      borderAlign: "inner",
    }, ],
    labels: labels,
  };
  let pieChart = new Chart(chart, {
    type: "doughnut",
    data: data,
    options: {
      legend: {
        position: "top",
        display: true,
      },
    },
  });
}