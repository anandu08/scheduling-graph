import { useState } from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import Graph from './components/Graph';

function App() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="App">
      <DatePicker onDateChange={setSelectedDate} />
      {selectedDate && <Graph date={selectedDate} />}
    </div>
  );
}

export default App;
