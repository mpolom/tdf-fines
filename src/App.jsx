import { useState } from 'react'
import '@fontsource-variable/open-sans';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {Data} from '/utils/Data';
import './App.css'

function App() {
  document.title="Tour De France 2025 fines and prize money";

  const [count, setCount] = useState(0)

  const [chartData] = useState({
    labels: Data.map((data) => data.Team),
    datasets: [
      {
        label: "Prize money gained (EUR)",
        data: Data.map((data) => data.R1Prize),
        backgroundColor: 'oklch(90.5% 0.182 98.111)',
      },
      {
        label: "Fines issued (CHF)",
        data: Data.map((data) => data.R1Fine),
        backgroundColor: 'oklch(58.6% 0.253 17.585)',
      }
    ]
  });
  const [options] = useState({
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {}
      }
    }
  });
  console.log(chartData);
  return (
    <>
      <header className="bg-yellow-300 text-center py-10 text-neutral-800">
        <h1 className='font-extrabold lg:text-4xl text-xl'>Tour De France 2025 fines and prize money 🥖</h1>
      </header>
      <main className="flex flex-col">
          <div className="chart-container self-center py-10 lg:max-w-2/3">
            <Chart type="bar" data={chartData} options={options}/>
          </div>
      </main>
      <footer className='text-center'>
        <p>Created by <a href="https://bichael.uk">mike.</a> Data sourced from <a href="https://www.tissottiming.com/">Tissot</a> and <a href="https://www.letour.fr/en/">ASO.</a></p>
      </footer>
    </>
  )
}

export default App
