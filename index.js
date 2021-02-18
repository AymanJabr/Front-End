//This part does the animation for each section
const sections = document.querySelectorAll("section");

const options = {
    root: null,
    threshold: 0.15,
    rootMargin: ""
};

const observer = new IntersectionObserver(function(entries, observer ){
entries.forEach(entry =>{
    // console.log(entry)
    entry.target.classList.toggle('vertical-scroll')
})
}, options)

sections.forEach( section => {
    observer.observe(section)
})

//Changing the chart using Chart.js
let myChart = document.getElementById("myChart").getContext("2d");

// Global Options
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "#777";

let massPopChart = new Chart(myChart, {
    type: "line", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Jarir",
                data: [
                    6159,
                    1104,
                    1506,
                    1051,
                    1016,
                    9507,
                    1506,
                    1061,
                    1516,
                    9507,
                    9000,
                    8999.99,
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',

                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
            },
            {
                label: "Extra",
                data: [
                    5179,
                    2810,
                    2530,
                    2065,
                    2051,
                    9507,
                    2530,
                    2065,
                    2051,
                    9507,
                    9000,
                    8999.99,
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
            },
            {
                label: "Eddy",
                data: [
                    7759,
                    6104,
                    6306,
                    6651,
                    6516,
                    6507,
                    6306,
                    6651,
                    6516,
                    6507,
                    6000,
                    6999.99,
                ],

                backgroundColor: 'rgba(255, 206, 86, 0.6)',

                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
            },
            {
                label: "Virgin Megastores",
                data: [
                    7000,
                    1000,
                    1630,
                    1665,
                    1651,
                    6507,
                    6306,
                    1951,
                    14516,
                    6507,
                    6000,
                    4000.99,
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',

                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
            },
            {
                label: "Noon",
                data: [
                    7000,
                    1000,
                    1630,
                    1665,
                    1651,
                    6507,
                    6306,
                    1951,
                    14516,
                    6507,
                    6000,
                    4000.99,
                ],

                backgroundColor: 'rgba(153, 102, 255, 0.6)',

                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
            },
            {
                label: "Amazon",
                data: [
                    6000,
                    1000,
                    2630,
                    1665,
                    1651,
                    6507,
                    6306,
                    2051,
                    1456,
                    6507,
                    7000,
                    4000.99,
                ],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',

                borderWidth: 1,
                borderColor: "#777",
                hoverBorderWidth: 3,
                hoverBorderColor: "#000",
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "ايفون اكس اس",
            fontSize: 25,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#000",
            },
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0,
            },
        },
        tooltips: {
            enabled: true,
        },
    },
});
