window.CreateChartLine = async (chartId, chartType, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: 'Dataset',
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        }
    });
}