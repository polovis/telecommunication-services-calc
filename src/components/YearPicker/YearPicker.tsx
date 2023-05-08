import React from "react";

import classes from "./YearPicker.module.scss";

type Props = {
  years: number[];
  selectedYear: number;
  onHandleSelectYear: React.Dispatch<React.SetStateAction<number>>;
};

const YearPicker = ({ years, selectedYear, onHandleSelectYear }: Props) => {
  return (
    <div className={classes.YearPickerContainer}>
      <div className={classes.Label}>
        Wybierz rok, aby zobaczyć aktualny cennik
      </div>
      <select
        className={classes.Select}
        value={selectedYear}
        onChange={(e) => onHandleSelectYear(parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearPicker;
