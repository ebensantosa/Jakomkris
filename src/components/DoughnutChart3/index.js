import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Gempa', 'Konflik Sosial', 'Terorisme', 'Covid19', 'Angin', 'Kebakaran','Konflik Kelompok','Lainnya','kebebasan ibadah','likufaksai','tsunami','tanah longsor','sosial','kekeringan'],
  datasets: [
    {
      label: '# of Votes',
      data: [1,12,23,9,2,1,1,6,2,3.1,1,1,1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(95, 186, 0, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(95, 186, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(95, 186, 0, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(95, 186, 0, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart3 = () => (
  <>
    <p>Presentase Ancaman 3</p>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart3;