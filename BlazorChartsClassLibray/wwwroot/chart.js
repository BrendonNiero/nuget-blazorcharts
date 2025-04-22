window.CreateChartLine = async (chartId, dataName, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: dataName,
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        }
    });
}

window.CreateDoubleBarChart = async (chartId, DataName1, DataName2, labels, data1, data2, color1, color2) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: DataName1,
                    data: data1,
                    borderColor: color1,
                    backgroundColor: color1,
                    borderWidth: 2,
                    borderRadius: 20,
                    borderSkipped: false,
                },
                {
                    label: DataName2,
                    data: data2,
                    borderColor: color2,
                    backgroundColor:  color2,
                    borderWidth: 2,
                    borderRadius: 5,
                    borderSkipped: false,
                }]
        }
    });
}
window.CreateCharDoughnut = async (chartId, dataName, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [{
                label: dataName,
                data: data,
                backgroundColor: colors,
                borderColor: colors,
            }]
        }
    });
}

window.CreateCharPie = async (chartId, dataName, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                label: dataName,
                data: data,
                backgroundColor: colors,
                borderColor: colors,
            }]
        }
    });
}

window.CreateProgressBar = async (chartId, dataName, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: dataName,
                data: data,
                backgroundColor: colors,
                borderColor: colors
            }]
        }
    });
}

window.CreateLying = async (chartId, dataName, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                axis: "y",
                label: dataName,
                data: data,
                fill: false,
                backgroundColor: colors,
                borderColor: colors
            }]
        }
    });
}

window.CreateCharPolarArea = async (chartId, dataName, labels, data, colors) => {
    const ctx = document.getElementById(chartId);
    new Chart(ctx, {
        type: "polarArea",
        data: {
            labels: labels,
            datasets: [{
                label: dataName,
                data: data,
                backgroundColor: colors,
                borderColor: colors,
            }]
        }
    });
}