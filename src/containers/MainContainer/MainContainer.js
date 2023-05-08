import React, { useState, useEffect } from "react";
import Title from "components/Title/Title";
import YearPicker from "components/YearPicker/YearPicker";
import ProductsList from "components/ProductsList/ProductsList";

import { offers } from "mocks/mock";
import classes from "./MainContainer.module.scss";

const MainContainer = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedOfferByYear, setSelectedOfferByYear] = useState(
    offers[selectedYear]
  );

  const years = Object.keys(offers);

  useEffect(() => setSelectedOfferByYear(offers[selectedYear]), [selectedYear]);

  return (
    <div className={classes.MainWrapper}>
      <a
        href="https://pl.freepik.com/darmowe-zdjecie/niebieski-swiatlowod-z-kablami-ethernet_11382408.htm#query=telekomunikacja&position=10&from_view=search&track=robertav1_2_sidr"
        className={classes.PictureSource}
      >
        Tekstura zdjęcie utworzone przez freepik - pl.freepik.com Obraz Freepik
      </a>

      <div className={classes.Container}>
        <Title />
        <YearPicker
          years={years}
          selectedYear={selectedYear}
          onHandleSelectYear={setSelectedYear}
        />
        <ProductsList offer={selectedOfferByYear}></ProductsList>
      </div>
    </div>
  );
};

export default MainContainer;
