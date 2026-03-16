import './App.css';
import Header_part from "./component/Header_part";
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header_part />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//v6 방식 찾아보기 route