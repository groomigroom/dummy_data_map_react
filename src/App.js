import './App.css';
import Header_part from "./component/Header_part";
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header_part />
        <Switch>
          <Route path="/">
            <DayList />
          </Route>
          <Route path="/day">
            <Day />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
