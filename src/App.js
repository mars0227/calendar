import './App.css';
import Day from "./components/Day";
import Header from "./components/Header";
import React, { useEffect, useState } from 'react';

function App() {
  const [today] = useState(new Date());

  const [lastMonth, setLastMonth] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);
  const [nextMonth, setNextMonth] = useState([]);

  const [dayRange, setDayRange] = useState([]);

  useEffect(() => {
    const date = today.getDate();
    // get dayOfMonth
    let daysOfThisMonth = 0;
    let aMonth = [];
    let dateCounter = new Date();

    for (daysOfThisMonth = date + 1; daysOfThisMonth < 33; daysOfThisMonth++) {
      dateCounter.setDate(daysOfThisMonth);

      if (dateCounter.getDate() !== daysOfThisMonth) {
        daysOfThisMonth = daysOfThisMonth - 1;
        break;
      }
    }

    for (let i = 1; i <= daysOfThisMonth; i++) {
      aMonth.push(i);
    }

    setThisMonth(aMonth);

    // add next month
    aMonth = [];
    for (let j = 0; j < 7; j++) {
      dateCounter = new Date();
      dateCounter.setDate(daysOfThisMonth + j);
      if (dateCounter.getDay() === 6) break;
      aMonth.push(j + 1);
    }

    setNextMonth(aMonth);

    // add last month
    aMonth = [];
    for (let j = 0; j < 7; j++) {
      dateCounter = new Date();
      dateCounter.setDate(0 - j);
      if (dateCounter.getDay() === 6) break;
      aMonth = [dateCounter.getDate(), ...aMonth];
    }

    setLastMonth(aMonth);
  }, [today]);

  const handleClick = (index) => {
    if (dayRange.length && dayRange[0] > index) setDayRange([index]);
    else if (dayRange.length < 2) setDayRange([...dayRange, index]);
    else if (dayRange.length === 2) setDayRange([index]);
  }

  const getClassName = (num) => {
    const className = [];
    if ((dayRange.length === 2 && num <= dayRange[1] && num >= dayRange[0]) || (dayRange.length === 1 && dayRange[0] === num)) className.push('active');
    if (num === today.getDate()) className.push('today');
    return className.join(' ');
  }

  return (
    <div className="app middle">
      <div className='calendar'>
        <Header day={today} />
        <div className='month'>
          {lastMonth.map((num) =>
            <Day num={num} key={`last-month-day-${num}`} className="disabled" />
          )}
          {thisMonth.map((num) =>
            <Day num={num} key={`day-${num}`} onClick={() => handleClick(num)} className={getClassName(num)} />
          )}
          {nextMonth.map((num) =>
            <Day num={num} key={`next-month-day-${num}`} className="disabled" />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
