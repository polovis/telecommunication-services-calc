import React from "react";
import classes from "./FinalPrice.module.scss";

type Props = {
  finalPrice: number;
  shouldDisplayPromoInfo: boolean;
};

const FinalPrice = ({ finalPrice, shouldDisplayPromoInfo }: Props) => {
  return (
    <>
      <div className={classes.HorizontalLine} />
      <div className={classes.PriceModul}>
        <div className={classes.Label}> Cena wybranych usług </div>
        <div className={classes.Price}> {`${finalPrice} zł`}</div>
      </div>
      {shouldDisplayPromoInfo && (
        <div className={classes.PromoInfo}> z promocją na Internet </div>
      )}
    </>
  );
};

export default FinalPrice;
