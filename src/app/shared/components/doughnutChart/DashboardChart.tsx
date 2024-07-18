import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './DoughnutChart.scss';

Chart.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface DashboardChartProps {
  chartType: 'genderData' | 'votersData' | 'ageData';
}

const DashboardChart: React.FC<DashboardChartProps> = ({ chartType }) => {
  const genderData: ChartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [50, 50], // Example data percentages
        backgroundColor: ['#36A2EB', '#FF6384'],
        borderColor: ['#36A2EB', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  const votersData: ChartData = {
    labels: ['Voters', 'Not Voters'],
    datasets: [
      {
        data: [70, 30], // Example data percentages
        backgroundColor: ['#2CCD5B', '#D13E40'],
        borderColor: ['#2CCD5B', '#D13E40'],
        borderWidth: 1,
      },
    ],
  };

  const ageData: ChartData = {
    labels: ['Infant', 'Kid', 'Senior', 'Teen', 'Adults'],
    datasets: [
      {
        data: [20, 30, 25, 15, 10], // Example data percentages
        backgroundColor: [
          '#BEE3B5',
          '#C1FF72',
          '#2D8BBA',
          '#2F5F98',
          '#FFBD59',
        ],
        borderColor: ['#BEE3B5', '#C1FF72', '#2D8BBA', '#2F5F98', '#FFBD59'],
        borderWidth: 1,
      },
    ],
  };

  let data: ChartData;
  switch (chartType) {
    case 'genderData':
      data = genderData;
      break;
    case 'votersData':
      data = votersData;
      break;
    case 'ageData':
      data = ageData;
      break;
    default:
      data = genderData;
  }

  return (
    <div className="chart-container">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem: any) => {
                  let label = data.labels[tooltipItem.index];
                  let value = data.datasets[0].data[tooltipItem.index];
                  return `${label}: ${value}%`;
                },
              },
            },
          },
        }}
      />

      <div className="chart-legend">
        {data.labels.map((label, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></span>
            <span className="legend-label">{label}</span>
            <span className="legend-value">
              {data.datasets[0].data[index]}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardChart;
