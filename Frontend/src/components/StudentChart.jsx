import React from 'react'
import styled from 'styled-components';
import {Chart as ChartJS,LineElement, CategoryScale, LinearScale, PointElement, scales} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement
  );

const Container = styled.div`
  margin-top: 20px;
  height: 100%;
  width: 24%;
  background-color: #f5f5f5;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const ChartHeader = styled.div``;

const ChartFooter = styled.div``;



const StudentChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      labels: 'Weekly Engagement',
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: "#f0634c",
      borderColor: "#f0634c",
      pointBorderColor: "#f0634c",
      fill: false,
    }]
  }

  const options = {
    plugins: {
      legend: true,
      
    },
    scales: {
      y: {
        min: 0,
        max: 24,
      },
      
      
    }
  }

  
  return (
    <Container>
      <ChartHeader>
        <h3
        >Weekly Engagement</h3>
        </ChartHeader>
      <ChartFooter>
        <Line
        data={data}
        options={options}
        >

        </Line>
      </ChartFooter>
    </Container>

  )
}

export default StudentChart