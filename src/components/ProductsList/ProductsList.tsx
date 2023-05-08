import React, { useState, useEffect } from "react";
import {
  CheckboxStatus,
  HandleSetCheckboxStatus,
  Offer,
  Product,
  ProductIDs,
} from "types";

import classes from "./ProductsList.module.scss";
import SingleProduct from "components/SingleProduct/SingleProduct";

import { getSelectedProductIds } from "./utils";
import FinalPrice from "components/FinalPrice/FinalPrice";

type Props = {
  offer: Offer;
};

const ProductsList = ({ offer }: Props) => {
  const products: Product[] = Object.values(offer.standardOffer);

  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  const [isInternetChecked, setIsInternetChecked] = useState(false);
  const [isTVChecked, setIsTVChecked] = useState(false);
  const [isTelephoneChecked, setIsTelephoneChecked] = useState(false);
  const [isDecodeChecked, setIsDecodeChecked] = useState(false);

  const handleSetCheckboxStatus: HandleSetCheckboxStatus = {
    [ProductIDs.INTERNETID]: setIsInternetChecked,
    [ProductIDs.TVID]: setIsTVChecked,
    [ProductIDs.TELEPHONEID]: setIsTelephoneChecked,
    [ProductIDs.DECODEID]: setIsDecodeChecked,
  };

  const checkboxStatus: CheckboxStatus = {
    [ProductIDs.INTERNETID]: isInternetChecked,
    [ProductIDs.TVID]: isTVChecked,
    [ProductIDs.TELEPHONEID]: isTelephoneChecked,
    [ProductIDs.DECODEID]: isDecodeChecked,
  };

  useEffect(() => {
    const productIds = getSelectedProductIds(
      isInternetChecked,
      isTVChecked,
      isTelephoneChecked,
      isDecodeChecked,
      offer
    );    

    setSelectedProductIds((prevSelectedProductIds) =>
      prevSelectedProductIds.splice(0, 0).concat(productIds)
    );
  }, [
    isInternetChecked,
    isTVChecked,
    isTelephoneChecked,
    isDecodeChecked,
    offer,
  ]);

  const handleSelectedProductIds = (id: number, selectedStatus: boolean) => {
    if (id === ProductIDs.TVID && !selectedStatus) {
      setIsDecodeChecked(false);
    }

    if (selectedStatus) {
      setSelectedProductIds((prevSelectedProductIds) => [
        ...prevSelectedProductIds,
        id,
      ]);
    } else {
      setSelectedProductIds((prevSelectedProductIds) =>
        prevSelectedProductIds.filter((prodId) => prodId !== id)
      );
    }
  };

  useEffect(() => {
    const finalPrice: number = [
      ...Object.values(offer.standardOffer),
      ...Object.values(offer.promo),
    ]
      .filter(({ id }) => selectedProductIds.includes(id))
      .map(({ price }) => price)
      .reduce((acc, current) => acc + current, 0);

    setFinalPrice(finalPrice);
  }, [selectedProductIds, offer]);

  const shouldDisplayPromoInfo =
    selectedProductIds.includes(ProductIDs.INTERNETANDTVID) ||
    selectedProductIds.includes(ProductIDs.INTERNETANDTELEPHONEID);
    
  return (
    <div className={classes.ProductListWrapper}>
      <div className={classes.Label}>Proszę wybrać usługę</div>

      <ul className={classes.List}>
        {products.map(({ id, name, price }) => {
          return (
            <SingleProduct
              key={id}
              id={id}
              name={name}
              price={price}
              value={checkboxStatus[id]}
              isDisabled={!isTVChecked && id === ProductIDs.DECODEID}
              handleSelectedProductIds={handleSelectedProductIds}
              onChange={handleSetCheckboxStatus[id]}
            />
          );
        })}
      </ul>
      {finalPrice > 0 && <FinalPrice finalPrice={finalPrice} shouldDisplayPromoInfo={shouldDisplayPromoInfo}/>}
    </div>
  );
};

export default ProductsList;
