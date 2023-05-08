import { ProductIDs, Offer } from "types";

export function getSelectedProductIds(
  isInternetChecked: boolean,
  isTVChecked: boolean,
  isTelephoneChecked: boolean,
  isDecodeChecked: boolean,
  offer: Offer
): number[] {
  const promo = Object.values(offer.promo);

  let selectedProductsIds: number[] = [];

  const internetAndTvPrice = promo.find(
    ({ id }) => id === ProductIDs.INTERNETANDTVID
  ).price;
  const internetAndTelephonePrice = promo.find(
    ({ id }) => id === ProductIDs.INTERNETANDTELEPHONEID
  ).price;

  if (isInternetChecked && isTVChecked && isTelephoneChecked) {
    const prodIds =
      internetAndTvPrice > internetAndTelephonePrice
        ? [ProductIDs.TVID, ProductIDs.INTERNETANDTELEPHONEID]
        : [ProductIDs.TELEPHONEID, ProductIDs.INTERNETANDTVID];

    selectedProductsIds = prodIds;
  }

  if (isInternetChecked && isTelephoneChecked && !isTVChecked) {
    selectedProductsIds = [ProductIDs.INTERNETANDTELEPHONEID];
  }
  if (isInternetChecked && isTVChecked && !isTelephoneChecked) {
    selectedProductsIds = [ProductIDs.INTERNETANDTVID];
  }
  if (isInternetChecked && !isTVChecked && !isTelephoneChecked) {
    selectedProductsIds = [ProductIDs.INTERNETID];
  }
  if (isTVChecked && !isInternetChecked && !isTelephoneChecked) {
    selectedProductsIds = [ProductIDs.TVID];
  }
  if (isTelephoneChecked && !isInternetChecked && !isTVChecked) {
    selectedProductsIds = [ProductIDs.TELEPHONEID];
  }

  if (
    !isTelephoneChecked &&
    isTVChecked &&
    isDecodeChecked &&
    !isInternetChecked
  ) {
    selectedProductsIds = [ProductIDs.TVID, ProductIDs.DECODEID];
  }

  if (
    isTelephoneChecked &&
    isTVChecked &&
    isDecodeChecked &&
    !isInternetChecked
  ) {
    selectedProductsIds = [
      ProductIDs.TELEPHONEID,
      ProductIDs.TVID,
      ProductIDs.DECODEID,
    ];
  }

  if (
    isTelephoneChecked &&
    isTVChecked &&
    !isDecodeChecked &&
    !isInternetChecked
  ) {
    selectedProductsIds = [ProductIDs.TELEPHONEID, ProductIDs.TVID];
  }

  return selectedProductsIds;
}
