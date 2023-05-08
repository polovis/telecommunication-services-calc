import React from "react";
import { Product } from "types";

import classes from "./SingleProduct.module.scss";
import CheckBox from "components/CheckBox/CheckBox";

type Props = {
  value: boolean;
  isDisabled: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelectedProductIds: any;
} & Product;

const SingleProduct = ({
  id,
  name,
  price,
  value,
  isDisabled,
  handleSelectedProductIds,
  onChange,
}: Props) => {
  return (
    <li className={classes.ProductDetails}>
      <CheckBox
        value={value}
        id={id}
        isDisabled={isDisabled}
        handleSelectedProductIds={handleSelectedProductIds}
        onChange={onChange}
      />
      <div className={classes.Product}>{name}: </div>
      <div className={classes.Price}>{price} zł</div>
    </li>
  );
};

export default SingleProduct;
