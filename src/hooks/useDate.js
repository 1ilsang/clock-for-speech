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

  return [time, toggleTime];
};

const getTime = (cur) => {
  return {
    year: cur.getFullYear(),
    month: cur.getMonth() + 1,
    date: parseSingleDigitToDoubleDigit(cur.getDate()),
    day: dayModel[cur.getDay()],
    hour: cur.getHours(),
    minute: cur.getMinutes(),
    second: parseSingleDigitToDoubleDigit(cur.getSeconds()),
  }
}