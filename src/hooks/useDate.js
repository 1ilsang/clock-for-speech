import {
  useState,
  useEffect
} from 'react';
import {
  dayModel
} from '../model/date';
import {
  parseSingleDigitToDoubleDigit
} from '../parser/number';

export const useDate = () => {
  const [time, setTime] = useState(getTime(new Date()));
  const [isStopTime, setIsStopTime] = useState(false);
  const toggleTime = () => setIsStopTime(!isStopTime);

  useEffect(() => {
    if (isStopTime) return;

    const interval = setInterval(() => {
      setTime(() => getTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [isStopTime]);

  return [time, toggleTime, isStopTime];
};

const getTime = (cur) => {
  return {
    year: cur.getFullYear(),
    month: parseSingleDigitToDoubleDigit(cur.getMonth() + 1),
    date: parseSingleDigitToDoubleDigit(cur.getDate()),
    day: dayModel[cur.getDay()],
    hour: parseSingleDigitToDoubleDigit(cur.getHours()),
    minute: parseSingleDigitToDoubleDigit(cur.getMinutes()),
    second: parseSingleDigitToDoubleDigit(cur.getSeconds()),
  }
}