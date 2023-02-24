import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { RootState } from '../store/rootReducer';

type GraphProps = {
  date: string;
};

type ScheduleItem = {
  time: string;
  temperature: number;
  humidity: number;
};

const Graph = ({ date }: GraphProps) => {
  const schedule = useSelector((state: RootState) => state.schedule[date]?.schedule) || [];

  const chartData = {
    labels: schedule.map((item: ScheduleItem) => item.time),
    datasets: [
      {
        label: 'Temperature',
        data: schedule.map((item: ScheduleItem) => item.temperature),
        borderColor: 'rgba(255, 99, 132, 0.2)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Humidity',
        data: schedule.map((item: ScheduleItem) => item.humidity),
        borderColor: 'rgba(54, 162, 235, 0.2)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Graph;
