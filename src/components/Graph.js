import { Line } from "react-chartjs-2";

    
const Graph = ({ HourFilter }) =>{
    let temp = HourFilter.map(({ temp }) =>{
        let data = parseFloat(temp);
        let Celcius = Math.round(data - 273.15)
        return Celcius
    });
    const day = HourFilter.map(({ dt_txt }) => dt_txt);
    const data = {
        labels: [
            temp[0] + "℃",
            temp[1] + "℃",
            temp[2] + "℃",
        ],
        datasets: [
            {
                data: [
                    temp[0], temp[1], temp[2], temp[3],
                    temp[4], temp[5], temp[6], temp[7]
                ],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        legend: {
            display: false,
        },
    }
    return <Line data={data} options={options} />

}
export default Graph