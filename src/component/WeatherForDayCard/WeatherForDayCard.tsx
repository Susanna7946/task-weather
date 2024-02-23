import React, { useMemo } from 'react';
import './WeatherForDayCard.scss';

interface WeatherForDayCardProps {
  id: number;
  dateString: string;
  icon: string;
  temp: number;
  selected?: boolean;
  selectDay: (id: number) => void
}

const WeatherForDayCard = ({
  id,
  dateString,
  icon,
  temp,
  selectDay,
  selected
}: WeatherForDayCardProps) => {
  const formattedDate = useMemo(() => {
    const date = new Date(dateString);
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    return `${day}-${month < 10 ? '0' + month : month + 1}`
  }, [dateString]);

  return (
    <div
      className={"card-wrapper " + (selected ? " selected" : "")}
      onClick={() => selectDay(id)}
    >
      <div className="date">{formattedDate}</div>
      <div className="temp-wrapper">
        <p className="temp">{temp}</p>
        <img className="icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png?`}/>
      </div>
    </div>
  );
};

export default WeatherForDayCard;